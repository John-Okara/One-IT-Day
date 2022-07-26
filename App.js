import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import StartDayScreen from './screens/StartDayScreen';
import { useFonts} from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({

    // use the boolean to return a loading screen until loaded

    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "aldrich-regular": require("./assets/fonts/Aldrich-Regular.ttf")

    

  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
      <StartDayScreen/>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
