import {exampleVideos} from '@remotion/example-videos';
import {expect, test} from 'bun:test';
import {parseMedia} from '../parse-media';
import {nodeReader} from '../readers/from-node';

test('Should be able to parse only header of Transport Stream', async () => {
	const parsed = await parseMedia({
		src: exampleVideos.transportstream,
		fields: {
			size: true,
			container: true,
			name: true,
			internalStats: true,
		},
		reader: nodeReader,
	});

	expect(parsed.container).toBe('transport-stream');
	expect(parsed.internalStats).toEqual({
		finalCursorOffset: 188,
		skippedBytes: 1913276,
	});
});
test('Should be able to parse only tracks of Transport Stream', async () => {
	const parsed = await parseMedia({
		src: exampleVideos.transportstream,
		fields: {
			size: true,
			container: true,
			name: true,
			internalStats: true,
			tracks: true,
			durationInSeconds: true,
			fps: true,
		},
		reader: nodeReader,
	});

	expect(parsed.container).toBe('transport-stream');
	expect(parsed.internalStats).toEqual({
		finalCursorOffset: 80652,
		skippedBytes: 1832812,
	});
});
