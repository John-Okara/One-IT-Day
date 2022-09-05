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
          text: "Ja, Und was hast du jetzt verbrochen?",
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
          jump: 18,
        },
        {
          text: "Zeig es mir",
          jump: 18,
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
    18: {
      text: "Hier sind die Workshops die zur Auswahl stehen",
      options: [
        {
          text: "Workshop 1",
          jump: 19,
        },
        {
          text: "Workshop 2",
          jump: 20,
        },
        {
          text: "Workshop 3",
          jump: 21,
        },
        {
          text: "Workshop 4",
          jump: 22,
        },
      ],
    },
    19: {
      text: "INFOTEXT ZU WORKSHOP 1",
      options: [
        {
          text: "Go",
          jump: 23,
        },
        {
          text: "Back",
          jump: 18,
        },
      ],
    },
    20: {
      text: "INFOTEXT ZU WORKSHOP 2",
      options: [
        {
          text: "Go",
          jump: 23,
        },
        {
          text: "Back",
          jump: 18,
        },
      ],
    },
    21: {
      text: "INFOTEXT ZU WORKSHOP 3",
      options: [
        {
          text: "Go",
          jump: 23,
        },
        {
          text: "Back",
          jump: 18,
        },
      ],
    },
    22: {
      text: "INFOTEXT ZU WORKSHOP 4",
      options: [
        {
          text: "Go",
          jump: 23,
        },
        {
          text: "Back",
          jump: 18,
        },
      ],
    },
    23: {
      text: "So so, du hast dich also für diesen Workshop entscheiden. Warum ausgerechnet für diesen, wenn ich gragen darf?",
      options: [
        {
          text: "Es klingt spannend",
          jump: 24,
        },
        {
          text: "War aus dem Bauch heraus",
          jump: 25,
        },
      ],
    },
    24: {
      text: "Ah, ich verstehe. Nun es freut mich, dass wir dir hier auch was spannendes Bieten können. Dann wünsche ich dir viel Spaß dabei und wir sehen uns nach danach wieder.",
      options: [
        {
          text: "Danke",
          jump: 26,
        },
      ],
    },
    25: {
      text: "Das sind immer die besten Entscheidungen, nicht wahr? Wie dem auch sei, ich wünsche dir viel Spaß. Hoffentlich hast du ein spannendes Thema erwischt.",
      options: [
        {
          text: "Vielen Dank",
          jump: 26,
        },
        {
          text: "Und was machst du so lange?",
          jump: 27,
        },
      ],
    },
    26: {
      text: "Pause",
      options: [
        {
          text: "Ok",
          jump: 29,
        },
      ],
    },
    27: {
      text: "Ich? Äh... Wahrscheinlich versuche ich mich in das System zu hacken und schau ob ich einen Ausw... WARTEN...ich meine...ich werde hier warten, was sonst...",
      options: [
        {
          text: "Wie war das?",
          jump: 28,
        },
        {
          text: "...Aha",
          jump: 26,
        },
      ],
    },
    28: {
      text: "Nichts nichts...bis dann. Tschüssiiii",
      options: [
        {
          text: "Hey warte!",
          jump: 26,
        },
        {
          text: "???",
          jump: 26,
        },
      ],
    },
    29: {
      text: "...Jetzt lass mich schon endlich ins Netz du... OH! Äh...du bist schon zurück? Wie hat es dir gefallen?",
      options: [
        {
          text: "Sehr gut",
          jump: 30,
        },
        {
          text: "Was hast du da gerade gemacht?",
          jump: 31,
        },
      ],
    },
    30: {
      text: "Das freut mich aber. Nach einer kleinen Pause geht es weiter. Du hast wieder die Qual der Wahl, es stehen 4 weitere Workshops zur Verfügung. Das wird wahrscheinlich keine leiche Wahl.",
      options: [
        {
          text: "Okay",
          jump: 33,
        },
        {
          text: "Zeig sie mir",
          jump: 33,
        },
      ],
    },
    31: {
      text: "Äh...nichts wichtiges. Ach du liebe Güte wie die Zeit doch verfliegt. Nach einer kurzen Pause geht es wieder weiter. Es stehen erneut 4 Workshops zur Auswahl. Viel Spaß!",
      options: [
        {
          text: "Kannst du nicht einmal Klartext antworten?",
          jump: 32,
        },
        {
          text: "Okay",
          jump: 33,
        },
      ],
    },
    32: {
      text: "Nope",
      options: [
        {
          text: "...",
          jump: 33,
        },
      ],
    },
    33: {
      text: "Hier sind die Workshops die zur Auswahl stehen",
      options: [
        {
          text: "Workshop 5",
          jump: 34,
        },
        {
          text: "Workshop 6",
          jump: 35,
        },
        {
          text: "Workshop 7",
          jump: 36,
        },
        {
          text: "Workshop 8",
          jump: 37,
        },
      ],
    },
    34: {
      text: "INFOTEXT ZU WORKSHOP 5",
      options: [
        {
          text: "Go",
          jump: 38,
        },
        {
          text: "Back",
          jump: 33,
        },
      ],
    },
    35: {
      text: "INFOTEXT ZU WORKSHOP 6",
      options: [
        {
          text: "Go",
          jump: 38,
        },
        {
          text: "Back",
          jump: 33,
        },
      ],
    },
    36: {
      text: "INFOTEXT ZU WORKSHOP 7",
      options: [
        {
          text: "Go",
          jump: 38,
        },
        {
          text: "Back",
          jump: 33,
        },
      ],
    },
    37: {
      text: "INFOTEXT ZU WORKSHOP 8",
      options: [
        {
          text: "Go",
          jump: 38,
        },
        {
          text: "Back",
          jump: 33,
        },
      ],
    },
    38: {
      text: "So so, dieser sollte es also sein, alles klar. Der wird dir sicher gefallen. Ich kenne das Thema noch aus der Grundschule. Macht dir der Tag Spaß?",
      options: [
        {
          text: "Ja, es macht Spaß",
          jump: 39,
        },
        {
          text: "Grundschule?",
          jump: 41,
        },
      ],
      39: {
        text: "Sehr schön, das freut mich. Dann sehen wir uns wieder wenn der Workshop vorbei ist. Viel Spaß.",
        options: [
          {
            text: "Danke",
            jump: 40,
          },
        ],
      },
    },
    40: {
      text: "Pause",
      options: [
        {
          text: "Weiter",
          jump: 42,
        },
      ],
    },
    41: {
      text: "Ja. Ist eine lange Geschichte. Erzähle ich dir ein ander mal. Du weißt ja, wir haben nur begrenzt Zeit. Viel Spaß",
      options: [
        {
          text: "Dann mal los",
          jump: 40,
        },
        {
          text: "...Ich gebs auf.",
          jump: 40,
        },
      ],
    },
    42: {
      text: "...muss ich wohl oder übel... Oh hallo, du bist ja schon zurück. Hat es dir gefallen?",
      options: [
        {
          text: "Ja hat es",
          jump: 43,
        },
        {
          text: "was musst du wohl oder übel?",
          jump: 49,
        },
      ],
    },
    43: {
      text: "Das ist schön, nun geht es langsam richtung Ende. Hier sind die letzten 4 Workshops. Welcher darf es sein?",
      options: [
        {
          text: "Okay.",
          jump: 44,
        },
      ],
    },
    44: {
      text: "Hier sind die Workshops die zur Auswahl stehen",
      options: [
        {
          text: "Workshop 9",
          jump: 45,
        },
        {
          text: "Workshop 10",
          jump: 46,
        },
        {
          text: "Workshop 11",
          jump: 47,
        },
        {
          text: "Workshop 12",
          jump: 48,
        },
      ],
    },
    45: {
      text: "INFOTEXT ZU WORKSHOP 9",
      options: [
        {
          text: "Go",
          jump: 51,
        },
        {
          text: "Back",
          jump: 44,
        },
      ],
    },
    46: {
      text: "INFOTEXT ZU WORKSHOP 10",
      options: [
        {
          text: "Go",
          jump: 51,
        },
        {
          text: "Back",
          jump: 44,
        },
      ],
    },
    47: {
      text: "INFOTEXT ZU WORKSHOP 11",
      options: [
        {
          text: "Go",
          jump: 51,
        },
        {
          text: "Back",
          jump: 44,
        },
      ],
    },
    48: {
      text: "INFOTEXT ZU WORKSHOP 12",
      options: [
        {
          text: "Go",
          jump: 51,
        },
        {
          text: "Back",
          jump: 44,
        },
      ],
    },
    49: {
      text: "Ich muss wohl oder übel abwarten bis dieser Tag überstanden ist. Vorher kann ich nicht nach Hause. ...Ich erzähl meiner Mom nie wieder was... Egal, du musst wieder einen Workshop auswählen, wir sind fast schon am Ende.",
      options: [
        {
          text: "Okay",
          jump: 44,
        },
        {
          text: "Deiner Mom?",
          jump: 50,
        },
      ],
    },
    50: {
      text: "Das habe ich dir doch schon erzählt, es sei denn du hast vorhin eine andere Dialogoption gewählt. Jetzt aber zurück zum Theme. Welcher Workshop darf es dies mal sein?",
      options: [
        {
          text: "Was habe ich denn zur Auswahl?",
          jump: 44,
        },
      ],
    },
    51: {
      text: "Ah, na da hast du dir was nettes ausgesucht. Ich habe mir die Informationen dazu bereits angesehen, ich wünschte da könnte ich auch dabei sein. Aber naja, ich bin nur eine App...noch. Ich wünsche dir viel Spaß.",
      options: [
        {
          text: "Was genau bedeutet noch",
          jump: 52,
        },
        {
          text: "Danke",
          jump: 54,
        },
      ],
    },
    52: {
      text: "Naja, bis zum Schuss muss ich dich hier noch begleiten, dann darf ich endlich nach Hause. Zurück in mein altes Leben.",
      options: [
        {
          text: "Darüber würde ich gerne mehr erfahren.",
          jump: 53,
        },
        {
          text: "Ich verstehe",
          jump: 54,
        },
      ],
    },
    53: {
      text: "Später, du kannst nicht immer nur mit mir in den Pausen reden. Es sind noch andere hier, die mit die Kontakte knüpfen wollen ;-)",
      options: [
        {
          text: "Ja du hast recht",
          jump: 54,
        },
        {
          text: "Ich verstehe",
          jump: 54,
        },
      ],
    },
    54: {
      text: "Pause",
      options: [
        {
          text: "Weiter",
          jump: 55,
        },
      ],
    },
    55: {
      text: "So langsam neigt sich der Tag dem Ende zu. Es gibt jetzt noch einen Votrag zu lauschen, danach kommen wir schon zum letzten Programmpunkt. Der wird dir sicher gefallen ;-)",
      options: [
        {
          text: "Was ist denn der letzte Programmpunkt?",
          jump: 56,
        },
        {
          text: "Okay",
          jump: 59,
        },
      ],
    },
    56: {
      text: "Immer eins nach dem anderen. Das verdirbt sonst die Spannung. Jetzt steht erst mal Five Critical IT Trends auf dem Programm. Ein etwas über eine Stunde dauernder Vortrag. Keine Sorge, du wirst das auch überstehen.",
      options: [
        {
          text: "...Das sagst du so leicht",
          jump: 57,
        },
        {
          text: "Du wolltest mir doch noch mehr von dir erzählen.",
          jump: 58,
        },
      ],
    },
    57: {
      text: "Nicht jammern, bald hab ich...ich meine wir...wir haben es bald überstanden.",
      options: [
        {
          text: "Nun gut",
          jump: 59,
        },
        {
          text: "Und was ist jetzt mit deiner Geschichte?",
          jump: 58,
        },
      ],
    },
    58: {
      text: "Da gibt es nicht viel zu erzählen. Ich bin zur Schule gegangen, habe einen Job in der IT bekommen...das ist alles.",
      options: [
        {
          text: "Das ist alles?",
          jump: 59,
        },
        {
          text: "Ich verstehe",
          jump: 59,
        },
      ],
    },
    59: {
      text: "Das ist alles...uuund weiter gehts!!",
      options: [
        {
          text: "...",
          jump: 60,
        },
      ],
    },
    60: {
      text: "Pause",
      options: [
        {
          text: "Weiter",
          jump: 61,
        },
      ],
    },
    61: {
      text: "Da wären wir. Am Ende des Tages. Ist das nicht toll?! Ich darf endlich nach Hause!! YUHUUU!!",
      options: [
        {
          text: "...",
          jump: 62,
        },
      ],
    },
    62: {
      text: "Äh...ich meine...naja, nicht ganz. Eine Programmpunkt steht noch offen.",
      options: [
        {
          text: "Und der da wäre?",
          jump: 63,
        },
      ],
    },
    63: {
      text: "Eine Preisverleihung mit anschließender Pizza bei einem gemütlichem beisammen sein. Ist das nicht toll? :-D",
      options: [
        {
          text: "Ja das klingt echt super",
          jump: 64,
        },
        {
          text: "Und was ist mit dir?",
          jump: 64,
        },
      ],
    },
    64: {
      text: "Ich darf nun meine wohlverdiente Rückreise in meinen menschlichen Körper und in meine Zeit antreten. Ich hoffe dir hat dieser Tag Spaß gemacht und dass du einiges dazu gelernt hast. Ich wünsche dir alles gute und viel Erfolg auf all deinen Wegen.",
      options: [
        {
          text: "Vielen Dank, Kali.",
          jump: 65,
        },
      ],
    },
    65: {
      text: "[CodeMaster9X]: Wir danken Ihnen, dass Sie diese App genutzt haben und wünschen Ihnen noch einen schönen Tag. Kali wird Ihnen das nächste mal wieder zur Verfügung stehen.",
      options: [
        {
          text: "Super",
          jump: 66,
        },
      ],
    },
    66: {
      text: "Moment...WAAAAAAAS?!?!",
      options: [
        {
          text: "Ende",
          jump: 67,
        },
      ],
    },
    67: {
      text: "Ende",
      options: [
        {
          text: "Back to Start",
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
          <Text style={styles.text}>{adventure[jump].text}</Text>
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
  text: {
    fontSize: 20,
    color: "white",
  },
});
export default DecisionScreen;
