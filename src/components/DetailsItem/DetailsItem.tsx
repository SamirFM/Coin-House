import { Layout } from "@ui-kitten/components";
import React from "react";
import { Text } from "react-native";
import style from "./DetailsItem.style";

export interface DetailsItemProps {
  objectKey: string;
  objectValue: string;
}

const DetailsItem: React.FC<DetailsItemProps> = ({
  objectKey,
  objectValue,
}) => {
  return (
    <Layout style={style.container}>
      <Text style={[style.objectKey, style.text]}>{objectKey}</Text>
      <Text style={[style.objectValue, style.text]}>{objectValue}</Text>
    </Layout>
  );
};

export default DetailsItem;
