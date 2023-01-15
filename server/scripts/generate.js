const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

function createAccount(){
    //get privatekey
    const privateKey = secp.utils.randomPrivateKey();

    //derive a public key from private key
    const publicKey = secp.getPublicKey(privateKey);
    const publicKeyHex = publicKey.toHex();
    console.log(publicKey);


    //create address from public key
    function getAddress(publicKey){
        const publicKeySliced = publicKey.slice(1);
        const publicKeyHash = keccak256(publicKeySliced);
        const address = publicKeyHash.slice(12);
        console.log('address', address);
        return address;

    }

    //address to give to server
    //client can use private key and public key address
}