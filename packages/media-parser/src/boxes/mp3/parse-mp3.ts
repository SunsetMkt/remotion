import type {BufferIterator} from '../../buffer-iterator';
import type {Mp3Structure, ParseResult} from '../../parse-result';
import type {ParserState} from '../../state/parser-state';
import {parseId3} from './id3';
import {parseMpegHeader} from './parse-mpeg-header';

export const parseMp3 = async ({
	iterator,
	structure,
	state,
}: {
	iterator: BufferIterator;
	structure: Mp3Structure;
	state: ParserState;
}): Promise<ParseResult> => {
	const continueParsing = () => {
		return parseMp3({iterator, structure, state});
	};

	if (iterator.bytesRemaining() === 0) {
		return Promise.resolve({
			status: 'done',
		});
	}

	if (iterator.bytesRemaining() < 3) {
		return {
			status: 'incomplete',
			skipTo: null,
			continueParsing,
		};
	}

	const {returnToCheckpoint} = iterator.startCheckpoint();
	const bytes = iterator.getSlice(3);
	returnToCheckpoint();

	if (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) {
		parseId3(iterator, structure);
		return {
			status: 'incomplete',
			continueParsing,
			skipTo: null,
		};
	}

	if (bytes[0] === 0xff) {
		await parseMpegHeader({
			iterator,
			state,
		});
		return {
			status: 'incomplete',
			continueParsing,
			skipTo: null,
		};
	}

	throw new Error('Unknown MP3 header');
};
