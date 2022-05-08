require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const {ALCHEMY_KEY, PRIVATE_KEY} = process.env; 

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    hardhat: {
      chainId: 1337
    }
  }
};
