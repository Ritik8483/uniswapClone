import { Sepolia } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xaf3173234C68fF76fEa1E8e99d484987B741603d";

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]:
      "https://eth-sepolia.g.alchemy.com/v2/yNF6jmjoL349mj_CmznpaseJMuvG_i1Z",
  },
};
