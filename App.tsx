const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ScanQRCode from "./screens/ScanQRCode";
import Dropdwon from "./components/Dropdwon";
import EnergyRates from "./components/EnergyRates";
import InnerFrame from "./components/InnerFrame";
import Star from "./components/Star";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="HomeIndicator"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="HomeIndicator"
              component={ScanQRCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dropdwon"
              component={Dropdwon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dropdwon"
              component={EnergyRates}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dropdwon"
              component={InnerFrame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dropdwon"
              component={Star}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
