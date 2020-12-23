import {
  Button,
  Divider,
  Input,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { getAccountBalance } from "../../api/requests/etherTransaction";
import { Transaction } from "../../constants/model/transaction.model";
import style from "./SearchTransaction.style";

const SearchTransaction = () => {
  const [address, setAddress] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const searchTransaction = () => {
    getAccountBalance("0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91")
      .then((data: any) => {
        const { result } = data;
        setTransactions(result.map(Transaction.mapToTransaction));
        console.log(transactions);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={style.searchTransactionContainer}>
      <TopNavigation title="Coinhouse Ethersan" alignment="center" />
      <Divider />
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
    </SafeAreaView>
  );
};

export default SearchTransaction;
