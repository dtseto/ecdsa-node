import server from "./server";

//ES5 vs ES6
// USE REQUIRE INSTEAD OF IMPORT

//import * as secp from 'ethereum-cryptography/secp256k1';
//import secp from "/ethereum-cryptography/secp256k1";

//const { createPrivateKeySync, ecdsaSign } = require("ethereum-cryptography/secp256k1");
//const toHex = require("ethereum-cryptography/utils");
//const secp = require("ethereum-cryptography/secp256k1");

//import {toHex} from "/ethereum-cryptography/utils";

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);

    const address = toHex(secp.getPublicKey(privateKey));
    setAddress(address);

    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type privatekey, for example: 0x1" value={address} onChange={onChange}></input>
      </label>

      <div>
        Address: {address}
      </div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
