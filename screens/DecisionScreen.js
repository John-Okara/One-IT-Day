import { View, Image, Alert, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function DecisionScreen() {
  return (
    <>
      <ImageBackground
        style={styles.backround}
        source={require("../assets/img/Gamebackround.png")}
      >
        <Image source={require("../assets/img/Kali.png")} />
        <View>
          <View>
            <PrimaryButton onPress={() => Alert.alert("yaaay")}>
              Start Game
            </PrimaryButton>
          </View>

          <View>
            <PrimaryButton onPress={() => Alert.alert("AAwww")}>
              No
            </PrimaryButton>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backround: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});

export default DecisionScreen;
