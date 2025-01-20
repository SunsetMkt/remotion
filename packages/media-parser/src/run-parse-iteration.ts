import {parseAac} from './boxes/aac/parse-aac';
import {parseFlac} from './boxes/flac/parse-flac';
import {parseIsoBaseMedia} from './boxes/iso-base-media/parse-boxes';
import {parseMp3} from './boxes/mp3/parse-mp3';
import {parseRiff} from './boxes/riff/parse-riff';
import {parseTransportStream} from './boxes/transport-stream/parse-transport-stream';
import {parseWav} from './boxes/wav/parse-wav';
import {parseWebm} from './boxes/webm/parse-webm-header';
import {initVideo} from './init-video';
import type {ParseResult} from './parse-result';
import type {ParserState} from './state/parser-state';

export const runParseIteration = async ({
	state,
	mimeType,
	contentLength,
	name,
}: {
	state: ParserState;
	mimeType: string | null;
	contentLength: number | null;
	name: string | null;
}): Promise<ParseResult> => {
	if (state.iterator.bytesRemaining() === 0) {
		return Promise.reject(new Error('no bytes'));
	}

	const structure = state.structure.getStructureOrNull();

	if (structure === null) {
		await initVideo({state, mimeType, name, contentLength});
		return {skipTo: null};
	}

	if (structure.type === 'riff') {
		return parseRiff(state);
	}

	if (structure.type === 'mp3') {
		return parseMp3(state);
	}

	if (structure.type === 'iso-base-media') {
		return parseIsoBaseMedia(state);
	}

	if (structure.type === 'matroska') {
		return parseWebm(state);
	}

	if (structure.type === 'transport-stream') {
		return parseTransportStream(state);
	}

	if (structure.type === 'wav') {
		return parseWav(state);
	}

	if (structure.type === 'aac') {
		return parseAac(state);
	}

	if (structure.type === 'flac') {
		return parseFlac({state, iterator: state.iterator});
	}

	return Promise.reject(
		new Error('Unknown video format ' + (structure satisfies never)),
	);
};
