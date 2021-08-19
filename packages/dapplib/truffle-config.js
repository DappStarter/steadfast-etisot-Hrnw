require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn protect inner entire swift trophy'; 
let testAccounts = [
"0x2c17a734c54099262c2cb91822a44cd943c1ae0581d00f5a01acd7b67ef38dbd",
"0x82d26f2dae2417ba341dcf8e2640a9629facc5c7fcd9e880a3ae3eeb84f15019",
"0x78242ea7e5222af39edeea4bf045f92db5cba895c33a1287732f95fbcb7357b5",
"0x18ead22b57bcb17b1979ab2cf4b023187dc4c3b646a276e5ba1c44ecba9c20d5",
"0x2fa4b478d74bcccd6f66208b5c3bb5bf41be7036a133e9c8049f7565abc750f6",
"0xff91a0d90700574b9f6083e34b8f522d82d004980954faab1737b25ef631cead",
"0x0f64aecbb5afa7fa32bc3f18fd2495051a9c0752e8e636a739493472cb309ee8",
"0x4a78769bdf90c602b8c78320da6b69a7aa03c158c75032d56dca373e80fbc867",
"0x9ac711c0cd3a3c78856281f63ddd1940c8a81ca48b9465d8def27a9bf9a91416",
"0xcd5de1221927388147f281448beb9bb0fe2c2c2663e278a5da4dc2a4e18655a7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

