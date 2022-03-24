import { ethers } from "ethers";

export const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

export const getAddress = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

export const signText = (text, address) => {
    return ethersProvider.send("personal_sign", [text, address]);
}