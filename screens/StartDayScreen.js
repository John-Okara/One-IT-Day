import { View, Image, Alert, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function StartDayScreen({ navigation }) {
  return (
    <>
      <View>
        <ImageBackground
          source={require("../assets/img/Mainmenu.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Image source={require("../assets/img/Kali.png")} />
          <View>
            <PrimaryButton
              onPress={() => navigation.navigate("DecisionScreen")}
            >
              Start Game
            </PrimaryButton>
          </View>

          <View>
            <PrimaryButton onPress={() => Alert.alert("AAwww")}>
              No
            </PrimaryButton>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default StartDayScreen;
