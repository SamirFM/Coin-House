import {
  Button,
  Divider,
  Input,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { getAccountBalance } from "../../api/requests/etherTransaction";
import TransactionItem from "../../components/TransactionItem/TransactionItem";
import { Transaction } from "../../constants/model/transaction.model";
import style from "./SearchTransaction.style";

const SearchTransaction = () => {
  const [address, setAddress] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>();

  const searchTransaction = () => {
    getAccountBalance("0xf7eB7637DeD2696B152c7D5EDEe502902B0F1c91").then(
      (data: any) => {
        const { result } = data;
        setTransactions(result.map(Transaction.mapToTransaction));
      }
    );
  };

  const renderTransactionItem = (transaction: Transaction) => (
    <TransactionItem
      key={JSON.stringify(transaction)}
      transaction={transaction}
    />
  );

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
