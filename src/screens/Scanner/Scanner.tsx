import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Layout } from "@ui-kitten/components";
import style from "./Scanner.style";
import { useNavigation } from "@react-navigation/native";

const Scanner: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [address, setAddress] = useState("");
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (result: { type: string; data: string }) => {
    setScanned(true);
    setAddress(result.data);
    alert(
      `Bar code with type ${result.type} and data ${result.data} has been scanned!`
    );
  };

  const resetScan = () => {
    setScanned(false);
    setAddress("");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={style.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
      {scanned && (
        <Layout style={style.scannedContainer}>
          <Text style={style.address}>Address: {address}</Text>
          <Layout
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button style={style.button} onPress={resetScan}>
              Re:Scan
            </Button>
            <Button
              style={style.button}
              onPress={() =>
                navigate("SearchTransaction", { address: address })
              }
            >
              Lookup
            </Button>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default Scanner;
