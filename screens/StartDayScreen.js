import { View, Image, Alert, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartDayScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.backround}
      source={require("../assets/img/Mainmenu.png")}
    >
      <View>
        <Image style={styles.kali} source={require("../assets/img/Kali.png")} />
      </View>
      <View>
        <PrimaryButton onPress={() => navigation.navigate("DecisionScreen")}>
          Game
        </PrimaryButton>
      </View>
      <View>
        <PrimaryButton onPress={() => navigation.navigate("AgendaScreen")}>
          Agenda
        </PrimaryButton>
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
});

export default StartDayScreen;
