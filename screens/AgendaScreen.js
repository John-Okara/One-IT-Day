import { View, Image, Alert, ImageBackground, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function AgendaScreen() {
  return (
    <>
      <ImageBackground
        style={styles.backround}
        source={require("../assets/img/Agendabackround.png")}
      >
        <Image source={require("../assets/img/Kali.png")} />
        <View>
          <View>
            <PrimaryButton onPress={() => Alert.alert("yaaay")}>
              this will be
            </PrimaryButton>
          </View>

          <View>
            <PrimaryButton onPress={() => Alert.alert("AAwww")}>
              the Agenda
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

export default AgendaScreen;
