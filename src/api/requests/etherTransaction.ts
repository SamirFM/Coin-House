import { EtherSort } from "../../constants/enums/EtherSort.enum";
import EtherscanInstance from "../instances/etherscan.instance";

export const getAccountBalance = (
  address: string,
  page: number = 1,
  offset: number = 100,
  sort: EtherSort = EtherSort.ASC
) => {
  return EtherscanInstance.account.txlist(
    address,
    page,
    "latest",
    1,
    offset,
    sort
  );
};
