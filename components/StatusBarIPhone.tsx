import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import CellularConnection from "../assets/Cellular-Connection.svg";
import Wifi from "../assets/Wifi.svg";
import Cap from "../assets/Cap.svg";
import { Color, Padding, FontFamily } from "../GlobalStyles";

export type StatusBarIPhoneType = {
  /** Variant props */
  background?: boolean;
};

const StatusBarIPhone = ({ background = false }: StatusBarIPhoneType) => {
  return (
    <View style={styles.statusBarIphone}>
      <View style={styles.frame}>
        <View style={[styles.time, styles.timeFlexBox]}>
          <Text style={styles.statusBarIphoneTime}>9:41</Text>
        </View>
        <View style={styles.dynamicIslandSpacer} />
        <View style={[styles.levels, styles.timeFlexBox]}>
          <CellularConnection
            style={styles.cellularConnectionIcon}
            width={19}
            height={12}
          />
          <Wifi style={styles.wifiIcon} width={17} height={12} />
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderPosition]} />
            <Cap style={[styles.capIcon, styles.borderPosition]} />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  statusBarIphone: {
    width: 402,
    backgroundColor: Color.cardBG,
    height: 50,
    paddingTop: 21,
    zIndex: 0,
  },
  frame: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  time: {
    paddingLeft: Padding.p_16,
    paddingRight: Padding.p_6,
  },
  statusBarIphoneTime: {
    height: 22,
    width: 40,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.sFPro,
    color: Color.icon1,
    textAlign: "center",
  },
  dynamicIslandSpacer: {
    width: 124,
    height: 10,
  },
  levels: {
    paddingLeft: Padding.p_6,
    paddingRight: Padding.p_16,
    gap: 7,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  battery: {
    width: 27,
    height: 13,
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: Color.icon1,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    maxHeight: "100%",
    width: 1,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: 3,
    backgroundColor: Color.icon1,
    width: 21,
  },
});

export default StatusBarIPhone;
