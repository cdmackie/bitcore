var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.nets = {
	BTC:{
		symbol:'BTC',
		coinname:'Bitcoin',
		name: 'livenet',
		magic: hex('f9beb4d9'),
		addressVersion: 0x00,
		privKeyVersion: 128,
		P2SHVersion: 5,
		hkeyPublicVersion: 0x0488b21e,
		hkeyPrivateVersion: 0x0488ade4,
		genesisBlock: {
			hash: hex('6FE28C0AB6F1B372C1A6A246AE63F74F931E8365E15A089C68D6190000000000'),
			merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
			height: 0,
			nonce: 2083236893,
			version: 1,
			prev_hash: buffertools.fill(new Buffer(32), 0),
			timestamp: 1231006505,
			bits: 486604799,
		},
		dnsSeeds: [
			'seed.bitcoin.sipa.be',
			'dnsseed.bluematt.me',
			'dnsseed.bitcoin.dashjr.org',
			'seed.bitcoinstats.com',
			'seed.bitnodes.io',
			'bitseed.xf2.org'
		],
		defaultClientPort: 8333
	},
	DOGE:{
		symbol:'DOGE',
		coinname:'Dogecoin',
		name: 'livenet',
		magic: hex('c0c0c0c0'),
		addressVersion: 0x1e,
		privKeyVersion: 0x9e,
		P2SHVersion: 5,
		hkeyPublicVersion: 0x0488b21e,
		hkeyPrivateVersion: 0x0488ade4,
		genesisBlock: {
			hash: hex('9156352c1818b32e90c9e792efd6a11a82fe7956a630f03bbee236cedae3911a'),
			merkle_root: hex('696ad20e2dd4365c7459b4a4a5af743d5e92c6da3229e6532cd605f6533f2a5b'),
			height: 0,
			nonce: 99943,
			version: 1,
			prev_hash: buffertools.fill(new Buffer(32), 0),
			timestamp: 1386325540,
			bits: 504365040,
		},
		dnsSeeds: [
			'seed.dogecoin.com',
			'seed.mophides.com',
			'seed.dglibrary.org',
			'seed.dogechain.info'
		],
		defaultClientPort: 22556
	},
	LTC:{
		symbol:'LTC',
		coinname:'Litecoin',
		name: 'livenet',
		magic: hex('fbc0b6db'),
		addressVersion: 0x30,
		privKeyVersion: 0xb0,
		P2SHVersion: 5,
		hkeyPublicVersion: 0x0488c42e,
		hkeyPrivateVersion: 0x0488e1f4,
		genesisBlock: {
			hash: hex('E2BF047E7E5A191AA4EF34D314979DC9986E0F19251EDABA5940FD1FE365A712'),
			merkle_root: hex('D9CED4ED1130F7B7FAAD9BE25323FFAFA33232A17C3EDF6CFD97BEE6BAFBDD97'),
			height: 0,
			nonce: 2084524493,
			version: 1,
			prev_hash: buffertools.fill(new Buffer(32), 0),
			timestamp: 1317972665,
			bits: 504365040,
		},
		dnsSeeds: [
			'dnsseed.litecointools.com',
			'dnsseed.litecoinpool.org',
			'dnsseed.ltc.xurious.com',
			'dnsseed.koin-project.com',
			'dnsseed.weminemnc.com'
		],
		defaultClientPort: 9333
	},
	NMC:{
		symbol:'NMC',
		coinname:'namecoin',
		name: 'livenet',
		magic: hex('f9beb4fe'),
		addressVersion: 0x34,
		privKeyVersion: 0xb4,
		P2SHVersion: 5,
		hkeyPublicVersion: 0x0488c42e,
		hkeyPrivateVersion: 0x0488e1f4,
		genesisBlock: {
			hash: hex('70c7a9f0a2fb3d48e635a70d5b157c807e58c8fb45eb2c5e2cb7620000000000'),
			merkle_root: hex('0dcbd3e6f061215bf3b3383c8ce2ec201bc65acde32595449ac86890bd2dc641'),
			height: 0,
			nonce: 2719916434,
			version: 1,
			prev_hash: buffertools.fill(new Buffer(32), 0),
			timestamp: 1303000001,
			bits: 469794815,
		},
		dnsSeeds: [
		],
		defaultClientPort: 8334
	}
};

exports.livenet = exports.nets[process.env["BITCORE_COIN"] || "BTC"] || exports.nets.BTC;

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
