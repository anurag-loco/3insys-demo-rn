import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontFamily,
  FontSize,
  Padding,
  Gap,
  Color,
  Border,
} from "../GlobalStyles";

const EnergyRates = () => {
  return (
    <View style={styles.energyRates}>
      <View style={styles.rateIntervals}>
        <Text style={[styles.timeOfUseEnergyRates, styles.am8Typo]}>
          Time-of-Use Energy Rates
        </Text>
      </View>
      <View style={[styles.am8AmParent, styles.am8AmParentFlexBox]}>
        <Text style={[styles.am8Am, styles.am8Typo]}>11:35 AM- 8 AM</Text>
        <Text style={[styles.kwh, styles.kwhFlexBox]}>$0.44/kWh</Text>
      </View>
      <View style={styles.am8AmParentFlexBox}>
        <Text style={[styles.energyRatesAm8Am, styles.am8Typo]}>
          11:35 AM- 8 AM
        </Text>
        <Text style={[styles.energyRatesKwh, styles.kwhFlexBox]}>
          $0.35/kWh
        </Text>
      </View>
      <View style={styles.am8AmParentFlexBox}>
        <Text style={[styles.energyRatesAm8Am, styles.am8Typo]}>
          8 AM- 12 PM
        </Text>
        <Text style={[styles.energyRatesKwh, styles.kwhFlexBox]}>
          $0.40/kWh
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  am8Typo: {
    textAlign: "left",
    fontFamily: FontFamily.sFPro,
    fontWeight: "500",
    fontSize: FontSize.size_14,
    flex: 1,
  },
  am8AmParentFlexBox: {
    gap: 0,
    padding: Padding.p_8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  kwhFlexBox: {
    textAlign: "right",
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_14,
    flex: 1,
    alignSelf: "stretch",
  },
  energyRates: {
    paddingHorizontal: Padding.p_20,
    gap: Gap.gap_4,
    paddingVertical: Padding.p_8,
    alignSelf: "stretch",
  },
  rateIntervals: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke300,
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: Padding.p_8,
    alignSelf: "stretch",
  },
  timeOfUseEnergyRates: {
    textTransform: "uppercase",
    color: Color.textHeading,
  },
  am8AmParent: {
    borderRadius: Border.br_8,
    backgroundColor: Color.badgeBlueBG,
  },
  am8Am: {
    color: Color.badgeBlueText,
  },
  kwh: {
    color: Color.badgeBlueText,
  },
  energyRatesAm8Am: {
    color: Color.textHeading,
  },
  energyRatesKwh: {
    color: Color.textHeading,
  },
});

export default EnergyRates;
