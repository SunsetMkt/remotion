import {expect, test} from 'bun:test';
import {createBtrt} from '../create/iso-base-media/stbl/stsd/create-btrt';

const reference = new Uint8Array([
	0x00, 0x00, 0x00, 0x14, 0x62, 0x74, 0x72, 0x74, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x06, 0xae, 0x73, 0x00, 0x06, 0xae, 0x73,
]);

test('btrt', () => {
	expect(createBtrt({maxBitrate: 437875, avgBitrate: 437875})).toEqual(
		reference,
	);
});
