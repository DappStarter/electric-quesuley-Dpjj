require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remind concert grace option force skull'; 
let testAccounts = [
"0x5b0fe8b7b5f1766d5a1ad324f7353be64884e716d3f3ffaff2807f37f2cd5f29",
"0x3398bbc51f5f03886d9956e88a77c1e1dd4460958224281397473afdd8b0dc55",
"0x83f3b6a0d9b575514a73457b49a457b742411e304223a79878e01a5fa9732d77",
"0xa5a12fee0dcabf93a7ab37720077dae3ee5f3bfe4e4b3be6ddf409e3af3a4000",
"0x01297c4cf5396b37f762f3c85b5f5c7ddc7f13cd62ae4458f5eb0217b7c3dc70",
"0xe81a06a7a6043a6f7faff7c177ea7292e6cac620818fca4ad7944da6d456d129",
"0xcf23701a22f5957a5278ae1c29a3c45ada5802639b48df825b9e7833407cef94",
"0xdff8ebea9673cd2d50a2c52441b37591f120ba02338875022b759c3ed4d589a4",
"0x7ffd8f124a0bbb776536582be255abe0df46f3ca9f2cffb19dd7690e0fd4e48b",
"0x49edcc5ab16ce19afd51b292437ffa458f53d18e732fa27a9637ccceda5b06ef"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

