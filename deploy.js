//provider that which will specify the network to connect to and the accounts to use. 
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');


//set provider to new instance with two arguments, account pneumonic and network URL
const provider = new HDWalletProvider(
    'bounce soul jewel that twelve august castle shine disease equal unable family',
    'https://rinkeby.infura.io/v3/942ce769803d44c795f138b757ee4388'
);

//takes provider, passes it to Web3 constructor and creates new instance of web3 enabled for unlocked rinkbey network
const web3 = new Web3(provider);


//to use async await syntax, created function to deploy. 
const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        //contains objects byte code and any inital arguments to pass to the contract. 
        .deploy({ data: '0x' + bytecode })
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to ', result.options.address);
};

deploy();