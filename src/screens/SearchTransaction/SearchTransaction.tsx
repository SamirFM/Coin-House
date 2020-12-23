import { Button, Input, Layout } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { getAccountBalance } from "../../api/requests/etherTransaction";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import { Transaction } from "../../constants/model/transaction.model";
import { Route } from "@react-navigation/native";
import style from "./SearchTransaction.style";

type routeParam = {
  address?: string;
};
export interface SearchTransactionProps {
  route: Route<"SearchTransaction", routeParam>;
}

const SearchTransaction: React.FC<SearchTransactionProps> = ({ route }) => {
  const [address, setAddress] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>();

  const searchTransaction = () => {
    getAccountBalance(route.params?.address ?? address)
      .then((data: any) => {
        const { result } = data;
        setTransactions(result.map(Transaction.mapToTransaction));
      })
      .catch((error: string) => alert(error));
  };

  const renderTransactionItem = (transaction: Transaction) => (
    <TransactionItem
      key={JSON.stringify(transaction)}
      transaction={transaction}
    />
  );

  useEffect(() => {
    if (route.params?.address) {
      setAddress(route.params?.address);
      searchTransaction();
    }
  }, [route.params?.address]);

  return (
    <>
      <Layout style={style.layout}>
        <Text style={style.labelInput}>
          Please enter a valid ethereum address:
        </Text>
        <Input
          placeholder="Ex: 0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91"
          value={address}
          onChangeText={(nextValue) => setAddress(nextValue)}
          style={style.input}
        />
        <Button
          onPress={() => {
            searchTransaction();
          }}
        >
          Lookup
        </Button>
      </Layout>
      <Layout style={style.transactionContainer}>
        {transactions && (
          <>
            <Text style={style.transactionTitle}>
              {transactions.length} MOST RECENT TRANSACTIONS
            </Text>
            <ScrollView>{transactions?.map(renderTransactionItem)}</ScrollView>
          </>
        )}
      </Layout>
    </>
  );
};

export default SearchTransaction;
