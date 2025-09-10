import * as React from "react";
import { StyleSheet, ScrollView, Pressable, Text, View } from "react-native";
import Grabber from "../assets/Grabber.svg";
import InnerFrame from "./InnerFrame";
import Star from "./Star";
import EnergyRates from "./EnergyRates";
import ButtonBackground from "../assets/Button-Background.svg";
import {
  Color,
  Border,
  Padding,
  Gap,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const Dropdwon = () => {
  return (
    <View style={[styles.dropdwon, styles.dropdwonFlexBox]}>
      <Grabber style={styles.grabberIcon} width={36} height={5} />
      <View style={styles.dropdownOptions}>
        <InnerFrame />
        <ScrollView
          style={styles.stars}
          contentContainerStyle={styles.starsContainerContent}
        >
          <Star />
          <EnergyRates />
        </ScrollView>
        <View style={styles.mobileResponsive}>
          <Pressable
            style={[styles.buttonFilledComponent, styles.dropdwonFlexBox]}
          >
            <Text style={styles.proceed}>Proceed</Text>
            <ButtonBackground
              style={styles.buttonBackgroundIcon}
              width={16}
              height={16}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  starsContainerContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dropdwonFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  dropdwon: {
    width: 402,
    boxShadow: "0px 2px 12px rgba(73, 74, 77, 0.11)",
    shadowColor: Color.colorDarkslategray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_32,
    borderTopRightRadius: Border.br_32,
    backgroundColor: Color.cardBG,
    paddingTop: Padding.p_20,
    gap: Gap.gap_24,
  },
  grabberIcon: {
    width: 36,
    borderRadius: 3,
    height: 5,
  },
  dropdownOptions: {
    alignSelf: "stretch",
  },
  stars: {
    flex: 1,
    maxWidth: "100%",
    alignSelf: "stretch",
  },
  mobileResponsive: {
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke300,
    borderTopWidth: 1,
    paddingHorizontal: Padding.p_32,
    paddingVertical: Padding.p_16,
    alignSelf: "stretch",
  },
  buttonFilledComponent: {
    borderRadius: Border.br_100,
    backgroundColor: Color.buttonBody,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_16,
    paddingVertical: Padding.p_12,
    gap: Gap.gap_8,
    alignSelf: "stretch",
  },
  proceed: {
    height: 19,
    width: 68,
    fontSize: FontSize.size_16,
    fontWeight: "500",
    fontFamily: FontFamily.sFPro,
    color: Color.buttonText,
    textAlign: "left",
  },
  buttonBackgroundIcon: {
    width: 16,
    height: 16,
  },
});

export default Dropdwon;
