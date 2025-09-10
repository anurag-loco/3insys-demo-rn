import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  FontFamily,
  Gap,
  FontSize,
  Color,
  Border,
  Padding,
} from "../GlobalStyles";

const InnerFrame = () => {
  return (
    <View style={styles.innerframe}>
      <View style={styles.band}>
        <Image
          style={styles.chargerImageIcon}
          resizeMode="cover"
          source={require("../assets/charger-image.png")}
        />
        <View style={styles.contentHeader}>
          <Text style={[styles.chademo, styles.textTypo]}>CHAdeMO</Text>
          <View style={[styles.chargerInfo, styles.chargerInfoFlexBox]}>
            <Text style={[styles.connectorA, styles.acTypo]}>Connector A</Text>
            <Text style={[styles.text, styles.textTypo]}>•</Text>
            <Text style={[styles.ac, styles.acTypo]}>AC</Text>
            <Text style={[styles.text, styles.textTypo]}>•</Text>
            <Text style={[styles.kwMax, styles.acTypo]}>6.6 kW Max</Text>
          </View>
          <View style={[styles.profilePicture, styles.chargerInfoFlexBox]}>
            <Text style={[styles.available, styles.textTypo]}>Available</Text>
            <Text style={[styles.text3, styles.text3Typo]}>•</Text>
            <Text style={[styles.maxPower44, styles.text3Typo]}>
              Max Power 4.4 kW (AC)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
  },
  chargerInfoFlexBox: {
    gap: Gap.gap_4,
    flexDirection: "row",
    alignItems: "center",
  },
  acTypo: {
    fontWeight: "500",
    lineHeight: 21,
    fontSize: FontSize.size_14,
    height: 21,
    textAlign: "left",
    color: Color.textHeading,
    fontFamily: FontFamily.sFPro,
  },
  text3Typo: {
    display: "none",
    fontFamily: FontFamily.workSansRegular,
    textAlign: "left",
  },
  innerframe: {
    borderRadius: Border.br_16,
    backgroundColor: Color.cardBG,
    overflow: "hidden",
    paddingHorizontal: Padding.p_32,
    paddingVertical: Padding.p_8,
    alignItems: "center",
    alignSelf: "stretch",
  },
  band: {
    justifyContent: "center",
    paddingHorizontal: 0,
    gap: 56,
    flexDirection: "row",
    paddingVertical: Padding.p_8,
    alignItems: "center",
    alignSelf: "stretch",
  },
  chargerImageIcon: {
    width: 56,
    borderRadius: Border.br_32,
    height: 56,
  },
  contentHeader: {
    width: 226,
    gap: Gap.gap_6,
  },
  chademo: {
    width: 106,
    height: 24,
    fontSize: FontSize.size_20,
    fontWeight: "700",
    color: Color.textHeading,
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
  },
  chargerInfo: {
    alignSelf: "stretch",
    gap: Gap.gap_4,
  },
  connectorA: {
    width: 88,
  },
  text: {
    height: 16,
    width: 9,
    lineHeight: 16,
    color: Color.textBody,
    fontSize: FontSize.size_12,
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
  },
  ac: {
    width: 23,
  },
  kwMax: {
    width: 82,
  },
  profilePicture: {
    borderRadius: Border.br_4,
    backgroundColor: Color.colorMintcream,
    borderStyle: "solid",
    borderColor: Color.colorHoneydew,
    borderWidth: 1,
    paddingHorizontal: Padding.p_8,
    paddingVertical: Padding.p_6,
  },
  available: {
    height: 14,
    width: 54,
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_12,
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
  },
  text3: {
    lineHeight: 12,
    color: Color.colorSurfaceOnSurfaceVar,
    fontSize: FontSize.size_12,
  },
  maxPower44: {
    fontSize: FontSize.size_10,
    color: Color.colorMediumslateblue,
  },
});

export default InnerFrame;
