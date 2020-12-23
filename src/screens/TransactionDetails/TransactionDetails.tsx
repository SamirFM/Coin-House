import React from "react";
import { Route } from "@react-navigation/native";
import { Transaction } from "../../constants/model/transaction.model";
import DetailsItem from "../../components/DetailsItem/DetailsItem";
import { ScrollView } from "react-native-gesture-handler";

type routeParams = {
  transaction: Transaction;
};

export interface TransactionDetailsProps {
  route: Route<"TransactionDetails", routeParams>;
}

const renderDetailsItem = (key: string, value: string) => (
  <DetailsItem key={key} objectKey={key} objectValue={value} />
);

const TransactionDetails: React.FC<TransactionDetailsProps> = ({ route }) => {
  return (
    <ScrollView>
      {Object.entries(route.params.transaction).map(([key, value]) =>
        renderDetailsItem(key, value)
      )}
    </ScrollView>
  );
};

export default TransactionDetails;
