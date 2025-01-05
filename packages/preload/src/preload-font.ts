import {preloadAsset} from './preload-asset';

/*
 * @description Preloads a font so that when an <Img> tag is mounted, it can display immediately.
 * @see [Documentation](https://www.remotion.dev/docs/preload/preload-font)
 */
export const preloadFont = (src: string): (() => void) => {
	return preloadAsset(src, 'font');
};
