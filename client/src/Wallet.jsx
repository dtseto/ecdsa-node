import server from "./server";

//const secp = require("ethereum-cryptography/secp256k1");
//const toHex = require("ethereum-cryptography/utils");

import secp from "ethereum-cryptography/secp256k1"
import toHex from "ethereum-cryptography/utils"

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    //const address = evt.target.value;
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const address = toHex(secp.getPublicKey(privateKey))
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
        <input placeholder="Type a private key, for example: 0x1" value={privateKey} onChange={onChange}></input>
      </label>

      <div>
        Address: {address.slice(0,20)}
      </div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;