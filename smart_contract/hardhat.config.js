require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      //CHANGE HERE
      url: "YOUR ALCHEMY APP API KEY",
      //CHANGE HERE
      accounts: [
        "API KEY OF THE METAMASK WALLET YOU WANT TO USE TO DEPLOY DE CONTRACT",
      ],
    },
  },
};
