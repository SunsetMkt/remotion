import type {ParseMediaController} from '../controller';
import type {ParseMediaSrc} from '../options';

export type Reader = {
	reader: ReadableStreamDefaultReader<Uint8Array>;
	abort: () => void;
};

type ReadResult = {
	reader: Reader;
	contentLength: number | null;
	contentType: string | null;
	name: string;
	supportsContentRange: boolean;
};
type ReadContent = (options: {
	src: ParseMediaSrc;
	range: [number, number] | number | null;
	controller: ParseMediaController | undefined;
}) => Promise<ReadResult>;
type GetLength = (src: ParseMediaSrc) => Promise<number>;

export type ReaderInterface = {
	read: ReadContent;
	getLength: GetLength;
};
