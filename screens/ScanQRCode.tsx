import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBarIPhone from "../components/StatusBarIPhone";
import Statelayer from "../assets/state-layer.svg";
import QrCode from "../components/QrCode";
import Frame from "../assets/Frame.svg";
import HomeIndicator from "../components/HomeIndicator";
import {
  FontSize,
  Color,
  FontFamily,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

const ScanQRCode = () => {
  return (
    <SafeAreaView style={[styles.scanQrCode, styles.scanQrCodeLayout]}>
      <KeyboardAvoidingView
        style={[styles.keyboardavoidingview, styles.scanQrCodeLayout]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={[styles.scrollview, styles.logoIconLayout]}
          contentContainerStyle={styles.scanQRCodeContent}
        >
          <StatusBarIPhone background={false} />
          <View style={styles.buttons}>
            <Image
              style={[styles.logoIcon, styles.logoIconLayout]}
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
                <Text style={[styles.or, styles.orTypo]}>OR</Text>
                <View style={[styles.leftSide, styles.btnBorder]} />
              </View>
              <View style={[styles.cardscanQrCode, styles.textFieldBorder]}>
                <View style={styles.text}>
                  <Text style={styles.scanQrCode2}>Scan QR Code</Text>
                  <QrCode style="Outlined" />
                </View>
                <View style={styles.scanAction}>
                  <Pressable
                    style={[styles.buttonFilledComponent, styles.viewFlexBox]}
                  >
                    <Frame style={styles.frameIcon} width={16} height={16} />
                    <Text style={[styles.scan, styles.orTypo]}>Scan</Text>
                  </Pressable>
                  <Text style={[styles.scanTheQr, styles.vxxxTypo]}>
                    Scan the QR code on the station to start charging
                  </Text>
                </View>
              </View>
            </View>
            <Text style={[styles.vxxx, styles.vxxxTypo]}>vX.X.X</Text>
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
  scanQrCodeLayout: {
    width: "100%",
    flex: 1,
  },
  logoIconLayout: {
    maxWidth: "100%",
    width: "100%",
  },
  viewFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  orTypo: {
    textAlign: "left",
    fontSize: FontSize.size_16,
    height: 19,
  },
  btnBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhitesmoke300,
    borderStyle: "solid",
    flex: 1,
  },
  textFieldBorder: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke300,
    borderStyle: "solid",
    backgroundColor: Color.cardBG,
  },
  vxxxTypo: {
    fontSize: FontSize.size_12,
    textAlign: "center",
    color: Color.textBody,
    fontFamily: FontFamily.sFPro,
    alignSelf: "stretch",
  },
  scanQrCode: {
    flex: 1,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  scrollview: {
    backgroundColor: Color.colorWhitesmoke100,
    flex: 1,
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
  },
  login: {
    gap: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textField: {
    justifyContent: "space-between",
    paddingVertical: Padding.p_8,
    gap: 0,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke300,
    borderStyle: "solid",
    backgroundColor: Color.cardBG,
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
    width: 26,
    fontFamily: FontFamily.workSansRegular,
    color: Color.textBody,
    textAlign: "left",
    fontSize: FontSize.size_16,
    height: 19,
  },
  leftSide: {
    backgroundColor: Color.colorWhitesmoke300,
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
    borderRadius: 20,
    padding: Padding.p_32,
    gap: Gap.gap_24,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
    alignItems: "center",
  },
  scanQrCode2: {
    fontSize: FontSize.size_20,
    fontWeight: "600",
    color: Color.textHeading,
    textAlign: "center",
    fontFamily: FontFamily.sFPro,
    alignSelf: "stretch",
  },
  scanAction: {
    gap: 12,
    alignSelf: "stretch",
  },
  buttonFilledComponent: {
    borderRadius: Border.br_100,
    backgroundColor: Color.buttonBody,
    paddingVertical: Padding.p_12,
    gap: Gap.gap_8,
    paddingHorizontal: Padding.p_16,
    justifyContent: "center",
    overflow: "hidden",
  },
  frameIcon: {
    width: 16,
    height: 16,
  },
  scan: {
    width: 42,
    color: Color.buttonText,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_16,
    height: 19,
    fontFamily: FontFamily.sFPro,
  },
  scanTheQr: {
    lineHeight: 18,
  },
  vxxx: {
    fontWeight: "500",
  },
});

export default ScanQRCode;
