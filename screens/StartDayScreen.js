import { View, Image } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

function StartDayScreen() {
  return (
    <>
      <View>
        <PrimaryButton>Start Game</PrimaryButton>
      </View>

      <Image source={require("../assets/img/Kali.png")} />

      <View>
        <SecondaryButton>No</SecondaryButton>
      </View>
    </>
  );
}

export default StartDayScreen;
