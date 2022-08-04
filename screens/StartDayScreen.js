import { View, Image, Alert, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartDayScreen({ navigation }) {
  return (
    <ImageBackground source={require("../assets/img/Mainmenu.png")}>
      <Image source={require("../assets/img/Kali.png")} />
      <View>
        <PrimaryButton onPress={() => navigation.navigate("DecisionScreen")}>
          Start Game
        </PrimaryButton>
      </View>

      <View>
        <PrimaryButton onPress={() => Alert.alert("AWWWW")}>No</PrimaryButton>
      </View>
    </ImageBackground>
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
