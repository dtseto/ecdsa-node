const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const { keccak256 } = require("ethereum-cryptography/keccak");
//import { Buffer } from 'node:buffer';

//create privatekey
const privateKey = secp.utils.randomPrivateKey();
const publicKey = secp.getPublicKey(privateKey);
//const kpkey = keccak256(publicKey)
const address = keccak256(publicKey.slice(1)).slice(-20);
//const kpkeyslice = kpkey.slice(1);
//const address = kpkeyslice.slice(-40);

// sign transaction need public key address message hash


//console.log('keccak256 public key:',kpkey)
//console.log('k publickey slice hex',toHex(kpkeyslice))

//const eAddress = Buffer.from((kpkey, 'hex').slice(-20).toString('hex'))
//console.log('Address is', ethereumAddress);

console.log('private key hex:', toHex(privateKey));
console.log('public key hex:', toHex(publicKey));

//console.log('keccak256 public key:',kpkey)
//console.log('keccak256 public key:',toHex(kpkey))

//console.log('k publickey slice hex',toHex(kpkeyslice))

console.log('address no hex', address);
console.log('address hex',toHex(address));