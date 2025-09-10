import * as React from "react";
import { StyleSheet, View } from "react-native";
import Vector89 from "../assets/Vector89.svg";

export type QrCodeType = {
  /** Variant props */
  style?: string;
};

const QrCode = ({ style = "Filled" }: QrCodeType) => {
  return (
    <View style={styles.qrCode}>
      <Vector89 style={styles.vectorIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCode: {
    width: 96,
    height: 97,
    overflow: "hidden",
  },
  vectorIcon: {
    position: "absolute",
    height: "75.05%",
    width: "75%",
    top: "12.47%",
    right: "12.5%",
    bottom: "12.47%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default QrCode;
