/*
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
export const EPOCH_TIME = new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0));
export const EPOCH_TIME_MILLISECONDS = EPOCH_TIME.getTime();
export const EPOCH_TIME_SECONDS = Math.floor(EPOCH_TIME.getTime() / 1000);

// Largest possible address. Derived from bignum.fromBuffer(Buffer.from(new Array(8).fill(255))).
export const MAX_ADDRESS_NUMBER = '18446744073709551615';
// Largest possible amount. Derived from bignum.fromBuffer(Buffer.from(new Array(8).fill(255))).
export const MAX_TRANSACTION_AMOUNT = '18446744073709551615';

export const TESTNET_NETHASH =
	'da3ed6a45429278bac2666961289ca17ad86595d33b31037615d4b8e8f158bba';
export const TESTNET_NODES = ['testnet.lisk.io'];
export const MAINNET_NETHASH =
	'ed14889723f24ecc54871d058d98ce91ff2f973192075c0155ba2b7b70ad2511';
export const MAINNET_NODES = [
	'node01.lisk.io',
	'node02.lisk.io',
	'node03.lisk.io',
	'node04.lisk.io',
	'node05.lisk.io',
	'node06.lisk.io',
	'node07.lisk.io',
	'node08.lisk.io',
];
