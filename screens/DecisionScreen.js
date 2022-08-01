import { View, Image, Alert, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartDayScreen() {
  return (
    <>
      <View>
        <View>
          <PrimaryButton onPress={() => Alert.alert("yaaay")}>
            Start Game
          </PrimaryButton>
        </View>

        <Image source={require("../assets/img/Kali.png")} />

        <View>
          <PrimaryButton onPress={() => Alert.alert("AAwww")}>No</PrimaryButton>
        </View>
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
