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
      text: "Was zum...was ist das, wo bin ich hier? Äh...Hallo?",
      options: [
        {
          text: "Du bist eine App auf meinem Smartphone?",
          jump: 1,
        },
        {
          text: "Hallo",
          jump: 2,
        },
      ],
    },
    1: {
      text: "Eine App auf einem Smartphone? Na super, so tief bin ich schon gesunken. Egal, ich bin hier um dir zu helfen, durch den Tag zu kommen. Ich gebe dir dafür alle nötigen Informationen die du brauchst.",
      options: [
        {
          text: "Äh...Danke",
          jump: 3,
        },
        {
          text: "Wer bist du?",
          jump: 4,
        },
      ],
    },
    2: {
      text: "“Hallo...warte...ich...Äh...Egal, ich bin hier um dir zu helfen, durch den Tag zu kommen. Ich gebe dir dafür alle nötigen Informationen die du brauchst.",
      options: [
        {
          text: "Äh...Danke",
          jump: 3,
        },
        {
          text: "Wer bist du?",
          jump: 4,
        },
      ],
    },
    3: {
      text: "“Gerngeschehen. In diesem Sinne: Ich heiße dich willkommen zum One-IT Day. Als erster Punkt der Tagesordnung steht ein Meet and Greet, es gibt Snacks und du kannst dich mit anderen Leuten untehalten. Ist wahrscheinlich besser als mit eine App zu komunizieren :-D Viel Spaß!”",
      options: [
        {
          text: "Danke",
          jump: 15,
        },
        {
          text: "Hui, klingt nach Spaß",
          jump: 15,
        },
      ],
    },
    4: {
      text: "„Erkläre ich dir später. Wenn ich so auf die Uhrzeit schaue, haben wir gerade nicht viel Zeit. In diesem Sinne: Ich heiße dich willkommen zum One-IT Day. Als erster Punkt der Tagesordnung steht ein Meet and Greet, es gibt Snacks und du kannst dich mit anderen Leuten untehalten. Viel Spaß”",
      options: [
        {
          text: "Danke",
          jump: 15,
        },
        {
          text: "Hui, klingt nach Spaß",
          jump: 15,
        },
      ],
    },
    5: {
      text: "“...Es muss doch hier irgendwo... Oh, schon wieder da? Hat es Spaß gemacht?”",
      options: [
        {
          text: "Ja",
          jump: 6,
        },
        {
          text: "Ja, Sagst du mir jetzt wer du bist?",
          jump: 7,
        },
      ],
    },
    6: {
      text: "“Sehr schön, das freut mich. Der nächste Punkt der Tagesordnung: ein kleines Intro. Es wird euch allen mitgeteilt was euch heute alles erwartet. Es lohnt sich bis ans Ende dran zu bleiben...Für uns beide”",
      options: [
        {
          text: "Ok",
          jump: 16,
        },
        {
          text: "Warum für uns beide?",
          jump: 16,
        },
      ],
    },
    7: {
      text: "“Ok, die Kurzfassung: Mein Name ist Kali, ich wurde zur Strafe hier her geschickt. Und wenn ich es nicht schaffe dich erfolgreich durch den Tag zu leite, darf ich nicht mehr nach Hause. Also können wir weiter machen?”",
      options: [
        {
          text: "Ok",
          jump: 9,
        },
        {
          text: "Was hast du verbrochen?",
          jump: 8,
        },
      ],
    },
    8: {
      text: "“Später. Der nächste Punkt der Tagesordnung: ein kleines Intro. Es wird euch allen mitgeteilt was euch heute alles erwartet. Es lohnt sich bis ans Ende dran zu bleiben... Für uns beide”",
      options: [
        {
          text: "Ok",
          jump: 16,
        },
        {
          text: "Du machst mich neugierig",
          jump: 16,
        },
      ],
    },
    9: {
      text: "“Okay, dann gehts gleich weiter. Der nächste Punkt der Tagesordnung: ein kleines Intro. Es wird euch allen mitgeteilt was euch heute alles erwartet. Es lohnt sich bis ans Ende dran zu bleiben... Für uns beide”",
      options: [
        {
          text: "Ok",
          jump: 16,
        },
        {
          text: "Du machst mich neugierig",
          jump: 16,
        },
      ],
    },
    10: {
      text: "“la lala la la laaa...Ah da bist du ja wieder, war es informativ?”",
      options: [
        {
          text: "Ja",
          jump: 11,
        },
        {
          text: "Erst wenn du mir sagst was du verbrochen hast",
          jump: 12,
        },
      ],
    },
    11: {
      text: "“Na wenn das keine gute Nachrichten sind. Der nächste Punkt ist ein Vortrag, was bereits alles erreicht wurde und was noch alles erreicht werden kann. Danach stehst du vor einer schwierigen Entscheidung.”",
      options: [
        {
          text: "Ok",
          jump: 17,
        },
        {
          text: "Was für eine Entscheidung?",
          jump: 17,
        },
      ],
    },
    12: {
      text: "“Na gut, ich sag es dir. Angeblich habe ich Firmengeheimnisse weiter verkauft. Dabei habe ich nur meiner Mom was erzählt, die hat es ihrer Frisörin erzählt und so weiter. Bereit für den nächsten Schritt, damit ich nach Hause darf?”",
      options: [
        {
          text: "Ja",
          jump: 13,
        },
        {
          text: "Ähm...okay",
          jump: 13,
        },
      ],
    },
    13: {
      text: "“Yuppie...Der nächste Punkt ist ein Vortrag, was bereits alles erreicht wurde und was noch alles erreicht werden kann. Danach stehst du vor einer schwierigen Entscheidung.”",
      options: [
        {
          text: "Ok",
          jump: 17,
        },
        {
          text: "Was für eine Entscheidung?",
          jump: 17,
        },
      ],
    },
    14: {
      text: "“Du hast nun die Wahl, dich zwischen 4 Workshops zu entscheiden. Die dazu gehörigen Infos findest du im Menü, oder ich zeige es dir. Bedenke, du darfst nur einen Wählen, also wähle weise.",
      options: [
        {
          text: "Ok",
          jump: 0,
        },
        {
          text: "Zeig es mir",
          jump: 0,
        },
      ],
    },
    15: {
      text: "Pause",
      options: [
        {
          text: "Ok",
          jump: 5,
        },
      ],
    },
    16: {
      text: "Pause",
      options: [
        {
          text: "Ok",
          jump: 10,
        },
      ],
    },
    17: {
      text: "Pause",
      options: [
        {
          text: "Ok",
          jump: 14,
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
