import React from "react";
import { useEthers } from "@usedapp/core";
import styles from "./styles/index";
import { uniswapLogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";
import { usePools } from "./hooks/usePools";

const App = () => {
  const { account } = useEthers();
  const [loading, pools] = usePools(); //it gives access to meta mask account and provide id
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap-logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Uniswap 2.0</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  loading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

//CRANQ
// ctrl+window+r
// To get ETH use metamask accont id https://sepoliafaucet.com/ (SEPOLIA)
// In cranq every node has output and an input
//Make out factory/router compiler and router/factory deployer
// 1. join compiled factory contract node of FC with factory contract of FD same for router
// 2. join start of node to input start of FC node
//3. to create a config in FC create a crank store and pop out store
//4. In input key data of store provide following instance
// {
//   "providerUrl": "https://eth-sepolia.g.alchemy.com/v2/keIp3KCOzQR0PyJzWMTPSG5uZ9RGCu85",  http address of alchemy
//   "privateKey": "429e5438078f99c07fefb922b7c9b207b684f157f9e9c28f159dc210f58ec8f0",  (Paste private key)
//   "accountAddress": "0x39c7048DD091C69A9a095Ca08AFb6007Ae19e49f",  account address of sepolia metamask
//   "network": "sepolia"     //change network to goerli because it shows error in type in weth address
// }
// import { Network, Alchemy } from 'alchemy-sdk';
// NOTE : pass key names without string
// const settings = {
//     apiKey: "keIp3KCOzQR0PyJzWMTPSG5uZ9RGCu85",
//     network: Network.ETH_SEPOLIA,
// };

// 5.Connect output of store to input consfig of FD
//Multiplex event logger
// 6. connect events of output FD to input multiplexed event logger
// Logger with message
// 7. connect error of FD with data node of LWM
// 8.In message of LMW write any error message like "Factory Compilation Error"
// 9. connect confirmation of FD to data logger
//10. paste transaction hash here https://sepolia.etherscan.io/tx/ and check details after successfull deployment
// 11. disable multiplexed event logger

// NEXT
//inside complie and factory deployer take out contract deployemnt waiter and connect confirmation of FD to confiramtion of CDW
//inside number input of CDW enter 2
//rename confirmation in output to contract address and connect contact address to renamed contract address in CDW and delete logger node

//INSIDE CDR
//take out init code hash and connect output of ICH to input factory init hash of RC
//create a new input on your node group as factory address,factory ABI and config and connect FD and ABI to input of ICPH
//pop out item getter retreives an item value by it's key and connect config to dict input of IG
// Rename item getter as get providerUrl and inside key pass "providerUrl " as value and connect it's output value to input web3Provider url of ICPH
//connect factory address,config of node group to input factory address,config of RD
//pop out WETH address and duplicate item getter/get providerURL
//connect config to dict of IG(get weth newtwork node) and pass network as key and connect values output to network input of weth and connect weth to weth of FD
//pop out contract deployment waiter and connect confirmation of FD output to input confirmation of CDW and pass number required value as 2
//now at output of CDR make some node with name router address ,router ABI,events and error
//connect error of FD and FC to error of created node,
//duplicate get network node and rename it as get ABI key and connect compiled router of RC to dict input ABI and pass key as "abi"
//connect contract address of CDW to router address,events of RD to events and value of get ABI key to router ABI

//Now shrink node
//rename contract address to factory address of CDF and connect it to factory address of CDR
//connect data output key of store(config) to config
// pop out an item getter inside CDF and output connect compile factory of FC to input dict of item getter and pass key as "abi"
//careate a new output node as abi and connect value of IG to abi
//shrink the node and connect the newly created abi node to factory abi of CDR

//duplicate Mutliplexed event logger and logger with message
//connect events of CDR output to input multiplexed event logger,and error to data input of logger and pass message as "Router compilation or deployment error"
//connect a new logger node (Logs received data and tag to the output. Formats data as JSON.) and connect router address to data of logger

//Liquidity Pools
//pop out liquidities adder
//pop out store (expiration) an pass data as 300 which is equal to 5 min
//pop out timestamp getter
//pop out adder ans conect timstamp output to a and expiration data to b input of adder
//group expiration and timestamp as calculate deadline and make input node as start and attch pairs to start
//inside CD connect start to get input of timestamp and read of expiration
//now connect sum output of adder to deadline input of liquidities adder,connect pairs to pairs
//create a new node on main node as config and connect to credentials of LA
//pop out item getter (Retrieves an item's value by its key from a dictionary. If the item is not found, the inputs are sent via not found.) and connect config to dict and pass key as "accountAddress" and merge it's value to toAddress of LA
//create an outer most node as router contract and connect it to router contract
//change type of created router contract to typeof `router contract` of `liquidities adder`
//pop out syncer and click on field input and add ["address","abi"] to value it creates new node and connect address and abi of RDR to both of them and connect synced to router contract
//connect data of store(config) to config of add liquidities
//pop out store and inside data of store write,here we are exchanging JSMG for eth
// [
//   [
//   {
//       "address":"0x5129B78A2bCA7C3141E9E373A9cb1466Ec87a01b",    //Token contract address
//       "desiredAmount":1000
//   },
//   {
//     "address":"ETH",
//     "desiredAmount":0.001
//   }
//   ],
// [
//   {
//       "address":"0x5129B78A2bCA7C3141E9E373A9cb1466Ec87a01b",    forgold to silver
//       "desiredAmount":100
//   },
//   {
//     "address":"0x095668d34C46ECd64129A76B9E7D285A19eBEE43",
//     "desiredAmount":1000
//   }
//   ],
// [
//   {
//       "address":"0xf2B27de028Be6Eb0A2DBE1A45C7698856507d020",    //exchanging shiba to ETH
//       "desiredAmount":1000
//   },
//   {
//     "address":"ETH",
//     "desiredAmount":0.001
//   }
//   ]
// ]
// https://www.smartcontracts.tools/token-generator/create/ethereum/ user to make tokens
//connect output data of store to input pairs of AL and connect start to read part of store
//Now go inside AL and make 2 output nodes name as result and error and connect LA nodes to them
//pop out logger and connect error to data and pass error message,and copy log and connect result to log
//CHANGE
// INSIDE ADD LIQUIDITIES DISSCOUNECT PAIRS TO START INPUT OF CALDEAD AND ADD ROUTER CONTRACT TO IT
