import {
  View,
  Image,
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function DecisionScreen(props) {
  const adventure = {
    0: {
      text: "Was zum...was ist das? Wo bin ich hier?! Äh...Hallo?",
      options: [
        {
          text: "Du bist eine App auf meinem Smartphone",
          jump: 1,
        },
        {
          text: "Hallo",
          jump: 1,
        },
      ],
    },
    1: {
      text: "Eine App auf einem Smartphone? Na super, so tief bin ich schon gesunken. Egal, ich bin hier um dir zu helfen, durch den Tag zu kommen. Ich gebe dir dafür alle nötigen Informationen die du brauchst.",
      options: [
        {
          text: "Äääääh, danke",
          jump: 0,
        },
        {
          text: "Wer bist du?",
          jump: 0,
        },
      ],
    },
  };
  if (props?.route?.params?.jump) {
    var jump = props.route.params.jump;
  } else {
    var jump = 0;
  }
  return (
    <>
      <ImageBackground
        style={styles.backround}
        source={require("../assets/img/Gamebackround.png")}
      >
        <Image source={require("../assets/img/Kali.png")} />
        <View>
          <Text>{adventure[jump].text}</Text>
        </View>
        <View>
          {adventure[jump].options.map((button) => (
            <View>
              <PrimaryButton
                key={button.text}
                onPress={() =>
                  props.navigation.navigate("DecisionScreen", {
                    jump: button.jump,
                    navigation: props.navigation,
                  })
                }
              >
                {button.text}
              </PrimaryButton>
            </View>
          ))}
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
