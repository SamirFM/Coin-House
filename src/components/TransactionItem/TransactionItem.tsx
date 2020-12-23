import { useNavigation } from "@react-navigation/native";
import { Icon, Layout } from "@ui-kitten/components";
import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { Transaction } from "../../constants/model/transaction.model";
import style from "./TransactionItem.style";

export interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      style={style.container}
      activeOpacity={1}
      onPress={() => {
        navigate("TransactionDetails", { transaction: transaction });
      }}
    >
      <Image source={require("../../assets/transfer.png")} style={style.icon} />
      <Layout style={style.transactionTextContainer}>
        <Text style={style.value}>{transaction.value} ETH</Text>
        <Text style={style.recipient}>To: {transaction.to}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

export default TransactionItem;
