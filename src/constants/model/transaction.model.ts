export class Transaction {
  blockNumber: number = 0;
  timeStamp: number = 0;
  hash: string = "";
  nonce: number = 0;
  blockHash: string = "";
  transactionIndex: string = "";
  from: string = "";
  to: string = "";
  value: number = 0;
  gas: string = "";
  gasPrice: string = "";
  isError: number = 0;

  static mapToTransaction = (transaction: any): Transaction => {
    const mappedReview: Transaction = {
      blockNumber: transaction.blockNumber,
      timeStamp: transaction.timeStamp,
      hash: transaction.hash,
      nonce: transaction.nonce,
      blockHash: transaction.blockHash,
      transactionIndex: transaction.transactionIndex,
      from: transaction.from,
      to: transaction.to,
      value: transaction.value,
      gas: transaction.gas,
      gasPrice: transaction.gasPrice,
      isError: transaction.isError,
    };
    return mappedReview;
  };
}
