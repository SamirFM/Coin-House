import { API_KEY } from "../../config";
const etherscanInstance = require("etherscan-api").init(API_KEY);

export default etherscanInstance;
