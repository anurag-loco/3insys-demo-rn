import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarIPhone from "../components/StatusBarIPhone";
import Statelayer from "../assets/state-layer.svg";
import ScanQrCode1 from "../components/ScanQrCode1";
import HomeIndicator from "../components/HomeIndicator";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const ScanQRCode = () => {
  return (
    <SafeAreaView style={styles.scanQrCodeFlexBox}>
      <KeyboardAvoidingView
        style={styles.scanQrCodeFlexBox}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scanQRCodeContent}
        >
          <StatusBarIPhone background={false} />
          <View style={styles.buttons}>
            <Image
              style={styles.logoIcon}
              resizeMode="cover"
              source={require("../assets/Logo.png")}
            />
            <View style={styles.login}>
              <View style={[styles.textField, styles.viewFlexBox]}>
                <TextInput
                  style={styles.textinput}
                  placeholder="Enter Charger ID"
                  placeholderTextColor="#777c82"
                />
                <Statelayer
                  style={styles.stateLayerIcon}
                  width={40}
                  height={40}
                />
              </View>
              <View style={[styles.view, styles.viewFlexBox]}>
                <View style={styles.btnBorder} />
                <Text style={styles.or}>OR</Text>
                <View style={[styles.leftSide, styles.btnBorder]} />
              </View>
              <ScanQrCode1 />
            </View>
            <Text style={styles.vxxx}>vX.X.X</Text>
          </View>
          <HomeIndicator device="iPhone" orientation="Portrait" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scanQRCodeContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
    height: 874,
  },
  viewFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  btnBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke300,
    borderStyle: "solid",
    flex: 1,
  },
  scanQrCodeFlexBox: {
    flex: 1,
    width: "100%",
  },
  scrollview: {
    backgroundColor: Color.colorWhitesmoke100,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  buttons: {
    width: 402,
    paddingVertical: Padding.p_32,
    zIndex: 1,
    paddingHorizontal: Padding.p_16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  logoIcon: {
    height: 78,
    alignSelf: "stretch",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  login: {
    backgroundColor: Color.colorRed,
    gap: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textField: {
    backgroundColor: Color.cardBG,
    borderWidth: 1,
    justifyContent: "space-between",
    paddingVertical: Padding.p_8,
    gap: 0,
    borderColor: Color.colorWhitesmoke300,
    borderStyle: "solid",
    flexDirection: "row",
    borderRadius: 128,
    paddingHorizontal: Padding.p_16,
  },
  textinput: {
    height: 20,
    width: 113,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.sFPro,
  },
  stateLayerIcon: {
    width: 40,
    height: 40,
    borderRadius: 128,
  },
  view: {
    gap: 26,
  },
  or: {
    height: 19,
    width: 26,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
    color: Color.textBody,
  },
  leftSide: {
    backgroundColor: Color.colorWhitesmoke300,
  },
  vxxx: {
    fontSize: FontSize.size_12,
    fontWeight: "500",
    textAlign: "center",
    color: Color.textBody,
    fontFamily: FontFamily.sFPro,
    alignSelf: "stretch",
  },
});

export default ScanQRCode;