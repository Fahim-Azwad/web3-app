require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/W3J-NdPxOFElr7kuN9JBK0LT6i7hd-Zl',
      accounts: [
        '0995679ebb93df2f2ffa3798b42fe70967f9c502fd13c4ea14142b67def65b25',
      ],
    },
  },
}