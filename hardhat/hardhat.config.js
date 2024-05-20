/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      chainId: 1337 // Localhost chain ID
    },
    goerli: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_GOERLI}`,
      accounts: [`${process.env.GOERLI_PRIVATE_KEY}`],
      chainId: 12345 // Goerli chain ID
    }
  }
};
