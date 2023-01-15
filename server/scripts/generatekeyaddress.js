const EC = require('elliptic').ec;
const BN = require('bn.js')
// Apply the Keccak-256 hash function
const keccak256 = require('js-sha3').keccak256; 
  
// Elliptic Curve used by Ethereum that is secp526k1
const ec = new EC('secp256k1'); 
  
const SK = new BN('DC38EE117CAE37750EB1ECC5CFD3DE8E85963B481B93E732C5D0CB66EE6B0C9D', 16);
  
// Elliptic Curve Generator Point
const G = ec.g;
// Public Point Elliptic Curve Multiplication
const pp = G.mul(SK);
  
// The first 32 bits representing point x
const x = pp.getX().toBuffer(); 
  
// The last 32 bits representing point y
const y = pp.getY().toBuffer(); 
  
// Concatenation of the 64 bit of Elliptic Curve Multiplication
const bt = Buffer.concat([x,y])
  
// Here wwe are doing keccak256 hashing of our ECDSA public key
const kc = keccak256(bt)
  
// Here we will be doing two things
// First we will get the hex format of our Keccak-256 hash
// Secondly we will obtain the right most 160 bits
  
const ethereumAddress = Buffer.from((kc, 'hex').slice(-20).toString('hex'))
console.log('Address is', ethereumAddress);
  