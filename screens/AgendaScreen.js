import {
  View,
  Image,
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function AgendaScreen(props) {
  const agenda = {
    0: {
      text: "For more Information, press the button.",
      options: [
        {
          text: "9:30 - 9:45",
          jump: 1,
        },
        {
          text: "9:50 - 9:55",
          jump: 2,
        },
        {
          text: "9:55 - 10:45",
          jump: 3,
        },
        {
          text: "10:50 - 12:00",
          jump: 4,
        },
        {
          text: "12:00 - 12:55",
          jump: 5,
        },
        {
          text: "12:55 - 13:35",
          jump: 6,
        },
        {
          text: "13:45 - 15:00",
          jump: 8,
        },
        {
          text: "15:20 - 16:30",
          jump: 10,
        },
        {
          text: "15:30 - 17:00",
          jump: 11,
        },
        {
          text: "17:00",
          jump: 12,
        },
      ],
    },
    1: {
      text: "Meet & Greet, Snacks, get Situated",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    2: {
      text: "Intro, what to know about the event during and after, rules of the road. What is the schedule, How do you find out where to go etc. ",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    3: {
      text: "Keynote Andreas. Andreas provides insights into our journey of One.IT, celebrating and reflecting on how far we have come while focusing on the challenges of tomorrow",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    4: {
      text: "Level 1 - Team Work",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    5: {
      text: "Lunch",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    6: {
      text: "Level 2 - Area Initatives",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    8: {
      text: "Level 3 - Hands on",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    10: {
      text: "InfoTech - 5 Most important IT Tech Trends",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    11: {
      text: "Quiz Prizes",
      options: [
        {
          text: "back",
          jump: 0,
        },
      ],
    },
    12: {
      text: "Pizza and Relax",
      options: [
        {
          text: "back",
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
        source={require("../assets/img/Agendabackround.png")}
      >
        <Image source={require("../assets/img/Kali.png")} />
        <View>
          <Text style={styles.text}>{agenda[jump].text}</Text>
        </View>
        <View>
          {agenda[jump].options.map((button) => (
            <View>
              <PrimaryButton
                key={button.text}
                onPress={() =>
                  props.navigation.navigate("AgendaScreen", {
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
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default AgendaScreen;
