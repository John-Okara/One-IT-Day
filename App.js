import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import StartDayScreen from "./screens/StartDayScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    // use the boolean to return a loading screen until loaded

    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "aldrich-regular": require("./assets/fonts/Aldrich-Regular.ttf"),
  });
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <View>
          <StartDayScreen />
        </View>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d2691",
    alignItems: "center",
    justifyContent: "center",
  },
});
