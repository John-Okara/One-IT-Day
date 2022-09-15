import { View, Image, Alert, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartDayScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backround}
      source={require("../assets/img/Mainmenu.png")}
    >
      <View style={styles.kaliposition}>
        <Image style={styles.kali} source={require("../assets/img/Kali.png")} />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <PrimaryButton onPress={() => navigation.navigate("DecisionScreen")}>
            Game (GER)
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton
            onPress={() => navigation.navigate("DecisionScreenEnglish")}
          >
            Game (ENG)
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={() => navigation.navigate("AgendaScreen")}>
            Agenda
          </PrimaryButton>
        </View>
      </View>
    </ImageBackground>
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
  kali: {
    //flex: 9,
    width: 80,
    height: 80,
  },
  kaliposition: {
    marginBottom: 30,
    marginLeft: 30,
  },
  button: {
    width: 350,
  },
  buttons: {
    top: 350,
    position: "absolute",
    alignSelf: "center",
  },
});

export default StartDayScreen;
