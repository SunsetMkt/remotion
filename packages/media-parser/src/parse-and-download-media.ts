import {internalParseMedia} from './internal-parse-media';
import type {ParseAndDownloadMedia} from './options';
import {fetchReader} from './readers/from-fetch';

export const parseAndDownloadMedia: ParseAndDownloadMedia = async (options) => {
	const content = await options.writer.createContent({
		filename: 'hmm',
		mimeType: 'shouldnotmatter',
	});
	return internalParseMedia({
		fields: options.fields ?? null,
		logLevel: options.logLevel ?? 'info',
		mode: 'download',
		onAudioCodec: options.onAudioCodec ?? null,
		onAudioTrack: null,
		onContainer: options.onContainer ?? null,
		onDimensions: options.onDimensions ?? null,
		onDiscardedData: async (data) => {
			await content.write(data);
		},
		onDurationInSeconds: options.onDurationInSeconds ?? null,
		onFps: options.onFps ?? null,
		onImages: options.onImages ?? null,
		onInternalStats: options.onInternalStats ?? null,
		onIsHdr: options.onIsHdr ?? null,
		onKeyframes: options.onKeyframes ?? null,
		onLocation: options.onLocation ?? null,
		onMetadata: options.onMetadata ?? null,
		onMimeType: options.onMimeType ?? null,
		onName: options.onName ?? null,
		onNumberOfAudioChannels: options.onNumberOfAudioChannels ?? null,
		onParseProgress: options.onParseProgress ?? null,
		onRotation: options.onRotation ?? null,
		onSampleRate: options.onSampleRate ?? null,
		onSize: options.onSize ?? null,
		onSlowAudioBitrate: options.onSlowAudioBitrate ?? null,
		onSlowDurationInSeconds: options.onSlowDurationInSeconds ?? null,
		onSlowFps: options.onSlowFps ?? null,
		onSlowKeyframes: options.onSlowKeyframes ?? null,
		onSlowNumberOfFrames: options.onSlowNumberOfFrames ?? null,
		onSlowVideoBitrate: options.onSlowVideoBitrate ?? null,
		onStructure: options.onStructure ?? null,
		onTracks: options.onTracks ?? null,
		onUnrotatedDimensions: options.onUnrotatedDimensions ?? null,
		onVideoCodec: options.onVideoCodec ?? null,
		onVideoTrack: null,
		progressIntervalInMs: options.progressIntervalInMs ?? null,
		reader: options.reader ?? fetchReader,
		signal: options.signal ?? undefined,
		src: options.src,
	});
};
