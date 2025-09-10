import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Fi545674 from "../assets/fi-545674.svg";
import Inclusion from "../assets/Inclusion.svg";
import { Padding, Color, FontFamily, FontSize, Gap } from "../GlobalStyles";

const Star = () => {
  return (
    <View style={styles.star}>
      <View style={[styles.separator, styles.imageSpaceBlock]}>
        <Text style={[styles.connectionFee, styles.feeTypo]}>
          Connection Fee
        </Text>
        <Fi545674 style={styles.fi545674Icon} width={12} height={12} />
        <Text style={[styles.image, styles.hrTypo]}>$0.99</Text>
      </View>
      <View style={[styles.starImage, styles.imageSpaceBlock]}>
        <Text style={[styles.idleFee, styles.feeTypo]}>Idle Fee</Text>
        <View style={styles.image2}>
          <Text style={[styles.hr, styles.hrTypo]}>$1.50/hr</Text>
        </View>
      </View>
      <View style={[styles.image3, styles.imageSpaceBlock]}>
        <Fi545674 style={styles.fi545674Icon} width={12} height={12} />
        <View style={styles.discountLabel}>
          <Text style={[styles.processingFee, styles.feeTypo]}>
            Processing Fee
          </Text>
        </View>
        <Inclusion style={styles.inclusionIcon} width={16} height={16} />
        <Text style={[styles.calculatedAtSession, styles.hrTypo]}>
          Calculated at session end
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageSpaceBlock: {
    paddingVertical: Padding.p_12,
    paddingHorizontal: Padding.p_24,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  feeTypo: {
    textAlign: "left",
    color: Color.textHeading,
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_14,
    height: 17,
    fontWeight: "500",
  },
  hrTypo: {
    textAlign: "right",
    color: Color.textHeading,
    fontFamily: FontFamily.sFPro,
    fontSize: FontSize.size_14,
  },
  star: {
    backgroundColor: Color.colorWhitesmoke200,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  separator: {
    gap: Gap.gap_8,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Color.colorWhitesmoke300,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_24,
    flexDirection: "row",
  },
  connectionFee: {
    width: 109,
  },
  fi545674Icon: {
    width: 12,
    height: 12,
    display: "none",
  },
  image: {
    flex: 1,
    fontWeight: "500",
    textAlign: "right",
  },
  starImage: {
    justifyContent: "space-between",
    gap: 0,
    paddingHorizontal: Padding.p_24,
    flexDirection: "row",
  },
  idleFee: {
    width: 56,
  },
  image2: {
    flex: 1,
  },
  hr: {
    alignSelf: "stretch",
  },
  image3: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Color.colorWhitesmoke300,
    borderStyle: "solid",
    paddingHorizontal: Padding.p_24,
    flexDirection: "row",
  },
  discountLabel: {
    justifyContent: "center",
  },
  processingFee: {
    width: 107,
  },
  inclusionIcon: {
    width: 16,
    height: 16,
  },
  calculatedAtSession: {
    flex: 1,
  },
});

export default Star;
