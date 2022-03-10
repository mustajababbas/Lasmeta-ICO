require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const ALCHEMY_API_KEY = `GKcZh-E7o6PB3gEz0M9fUHPwG4_xHbbj`
 const privateKey = `7ad2941b69a0d0429d576eaac92d18e6f4c17c2dc2673c221585b2b96e5cbdb3`

module.exports = {
  solidity: "0.8.0",
 networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${privateKey}`],
    },
  },
  abiExporter: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
    path: './client/src/contract',

  },
};
