import { API_KEY } from "../../config";
const EtherscanInstance = require("etherscan-api").init(API_KEY);

export default EtherscanInstance;
