import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import QrCode from "./QrCode";
import Frame from "../assets/Frame.svg";
import {
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
  FontSize,
} from "../GlobalStyles";

const ScanQrCode1 = () => {
  return (
    <View style={[styles.cardscanQrCode, styles.cardscanQrCodeFlexBox]}>
      <View style={styles.text}>
        <Text style={[styles.scanQrCode, styles.scanFlexBox]}>
          Scan QR Code
        </Text>
        <QrCode style="Outlined" />
      </View>
      <View style={styles.scanAction}>
        <Pressable
          style={[styles.buttonFilledComponent, styles.cardscanQrCodeFlexBox]}
        >
          <Frame style={styles.frameIcon} width={16} height={16} />
          <Text style={styles.scan}>Scan</Text>
        </Pressable>
        <Text style={[styles.scanTheQr, styles.scanFlexBox]}>
          Scan the QR code on the station to start charging
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardscanQrCodeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  scanFlexBox: {
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    alignSelf: "stretch",
  },
  cardscanQrCode: {
    boxShadow: "0px 0px 8px rgba(0, 31, 63, 0.04)",
    shadowColor: Color.colorGray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    borderRadius: Border.br_20,
    backgroundColor: Color.cardBG,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke300,
    borderWidth: 1,
    padding: Padding.p_32,
    gap: Gap.gap_24,
  },
  text: {
    gap: Gap.gap_4,
    alignItems: "center",
    alignSelf: "stretch",
  },
  scanQrCode: {
    fontSize: FontSize.size_20,
    fontWeight: "600",
    color: Color.textHeading,
  },
  scanAction: {
    gap: Gap.gap_12,
    alignSelf: "stretch",
  },
  buttonFilledComponent: {
    borderRadius: Border.br_100,
    backgroundColor: Color.buttonBody,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_16,
    paddingVertical: Padding.p_12,
    gap: Gap.gap_8,
  },
  frameIcon: {
    width: 16,
    height: 16,
  },
  scan: {
    height: 19,
    width: 42,
    fontSize: FontSize.size_16,
    fontWeight: "500",
    color: Color.buttonText,
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
  },
  scanTheQr: {
    fontSize: FontSize.size_12,
    lineHeight: 18,
    color: Color.textBody,
  },
});

export default ScanQrCode1;
