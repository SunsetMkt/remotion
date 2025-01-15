import type {BufferIterator} from '../../buffer-iterator';
import {getTracks} from '../../get-tracks';
import {hasAllInfo} from '../../has-all-info';
import type {Options, ParseMediaFields} from '../../options';
import type {ParseResult, RiffStructure} from '../../parse-result';
import {
	registerTrack,
	registerVideoTrackWhenProfileIsAvailable,
} from '../../register-track';
import type {ParserState} from '../../state/parser-state';
import {continueAfterRiffBoxResult} from './continue-after-riff-result';
import {expectRiffBox} from './expect-riff-box';
import {
	TO_BE_OVERRIDDEN_LATER,
	makeAviAudioTrack,
	makeAviVideoTrack,
} from './get-tracks-from-avi';
import {getStrfBox, getStrhBox} from './traversal';

export const parseRiffBody = async ({
	iterator,
	structure,
	maxOffset,
	state,
	fields,
}: {
	iterator: BufferIterator;
	structure: RiffStructure;
	maxOffset: number;
	state: ParserState;
	fields: Options<ParseMediaFields>;
}): Promise<ParseResult> => {
	while (
		iterator.bytesRemaining() > 0 &&
		iterator.counter.getOffset() < maxOffset &&
		!hasAllInfo({fields, state})
	) {
		const result = await expectRiffBox({
			iterator,
			state,
			structure,
			fields,
		});
		if (result.type === 'complete' && result.skipTo !== null) {
			return {
				status: 'incomplete',
				skipTo: result.skipTo,
				continueParsing() {
					return Promise.resolve(
						continueAfterRiffBoxResult({
							iterator,
							maxOffset,
							state,
							result,
							structure,
							fields,
						}),
					);
				},
			};
		}

		if (result.type === 'incomplete') {
			return {
				status: 'incomplete',
				async continueParsing() {
					return Promise.resolve(
						continueAfterRiffBoxResult({
							iterator,
							maxOffset,
							state,
							result: await result.continueParsing(),
							structure,
							fields,
						}),
					);
				},
				skipTo: null,
			};
		}

		if (result.box === null) {
			continue;
		}

		structure.boxes.push(result.box);
		// When parsing an AVI
		if (result.box.type === 'list-box' && result.box.listType === 'hdrl') {
			const tracks = getTracks(structure, state);
			if (!tracks.videoTracks.some((t) => t.codec === TO_BE_OVERRIDDEN_LATER)) {
				state.callbacks.tracks.setIsDone();
			}
		}

		// When parsing a WAV
		if (result.box.type === 'wave-format-box') {
			state.callbacks.tracks.setIsDone();
		}

		if (
			result.box.type === 'strf-box-video' ||
			result.box.type === 'strf-box-audio'
		) {
			const strh = getStrhBox(structure.boxes);
			const strf = getStrfBox(structure.boxes);
			if (!strh || !strf) {
				throw new Error('strh or strf box missing');
			}

			if (strf.type === 'strf-box-audio' && state.onAudioTrack) {
				const audioTrack = makeAviAudioTrack({
					index: state.riff.getNextTrackIndex(),
					strf,
				});
				await registerTrack({
					state,
					track: audioTrack,
					container: 'avi',
				});
			}

			if (state.onVideoTrack && strf.type === 'strf-box-video') {
				const videoTrack = makeAviVideoTrack({
					strh,
					index: state.riff.getNextTrackIndex(),
					strf,
				});
				registerVideoTrackWhenProfileIsAvailable({
					state,
					track: videoTrack,
					container: 'avi',
				});
			}

			state.riff.incrementNextTrackIndex();
		}
	}

	return {
		status: 'done',
	};
};
