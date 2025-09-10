import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Padding, Border, Color } from "../GlobalStyles";

export type HomeIndicatorType = {
  /** Variant props */
  device?: string;
  orientation?: string;
};

const HomeIndicator = ({
  device = "iPad",
  orientation = "Portrait",
}: HomeIndicatorType) => {
  return (
    <View style={[styles.homeIndicator, styles.homePosition]}>
      <View style={[styles.homeIndicator2, styles.homePosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    width: 402,
    marginLeft: -200,
    bottom: 0,
    height: 21,
    flexDirection: "row",
    paddingHorizontal: 127,
    paddingVertical: Padding.p_8,
    zIndex: 2,
  },
  homeIndicator2: {
    width: 139,
    marginLeft: 69,
    bottom: 3,
    borderRadius: Border.br_100,
    backgroundColor: Color.icons,
    height: 5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    transformOrigin: "0 0",
    zIndex: 0,
  },
});

export default HomeIndicator;
