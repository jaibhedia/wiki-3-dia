const { ethers } = require("ethers");

async function main() {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const accounts = await provider.listAccounts();
    console.log("Accounts:", accounts);
}

main();
