import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "@expo-google-fonts/inter";
import StartDayScreen from "./screens/StartDayScreen";
import DecisionScreenFixed from "./screens/DecisionScreenFixed";
import AgendaScreen from "./screens/AgendaScreen";
import DecisionScreenEnglish from "./screens/DecisionScreenEnglish";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    // use the boolean to return a loading screen until loaded

    AldrichRegular: require("./assets/fonts/Aldrich-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StartDayScreen"
            component={StartDayScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="DecisionScreenFixed"
            component={DecisionScreenFixed}
            options={{ title: "Game" }}
          />
          <Stack.Screen
            name="DecisionScreenEnglish"
            component={DecisionScreenEnglish}
            options={{ title: "Game(EN)" }}
          />
          <Stack.Screen
            name="AgendaScreen"
            component={AgendaScreen}
            options={{ title: "Agenda" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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

export default App;
