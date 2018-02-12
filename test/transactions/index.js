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
import transaction from 'transactions';

describe('transactions', () => {
	describe('exports', () => {
		it('should have the create transfer transaction function', () => {
			return transaction.should.have
				.property('transfer')
				.which.is.a('function');
		});

		it('should have the register second passphrase transaction function', () => {
			return transaction.should.have
				.property('registerSecondPassphrase')
				.which.is.a('function');
		});

		it('should have the register delegate transaction function', () => {
			return transaction.should.have
				.property('registerDelegate')
				.which.is.a('function');
		});

		it('should have the cast votes transaction function', () => {
			return transaction.should.have
				.property('castVotes')
				.which.is.a('function');
		});

		it('should have the register multisignature transaction function', () => {
			return transaction.should.have
				.property('registerMultisignature')
				.which.is.a('function');
		});

		it('should have the create dapp transaction function', () => {
			return transaction.should.have
				.property('createDapp')
				.which.is.a('function');
		});

		it('should have the transfer into dapp transaction function', () => {
			return transaction.should.have
				.property('transferIntoDapp')
				.which.is.a('function');
		});

		it('should have the transfer out of dapp transaction function', () => {
			return transaction.should.have
				.property('transferOutOfDapp')
				.which.is.a('function');
		});
	});
});
