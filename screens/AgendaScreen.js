import {
  View,
  Image,
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import StyledText from "react-native-styled-text";

function AgendaScreen(props) {
  const agenda = {
    0: {
      //Overview
      text: "For more Information, press the button.",
      options: [
        {
          text: "Kick Off",
          jump: 1,
        },
        {
          text: "Level 1",
          jump: 5,
        },
        {
          text: "Level 2",
          jump: 10,
        },
        {
          text: "Level 3",
          jump: 15,
        },
        {
          text: "Closing",
          jump: 20,
        },
      ],
    },
    1: {
      //Kick Off Overview
      text: "Komm rein, hol Dir ein paar Snacks und mach dich gemutlich. \n\nHier lernen wir wie One.IT Day funktioniert, und Andreas - unser CIO - gibt uns der erste Impuls. ",
      options: [
        {
          text: "09:30 - Meet & Greet",
          jump: 2,
        },
        {
          text: "09:50 - Rules of the Road",
          jump: 3,
        },
        {
          text: "09:55 - Keynote Andreas",
          jump: 4,
        },
        {
          text: "Back",
          jump: 0,
        },
      ],
    },
    2: {
      //Meet & Greet Infos
      text: "<b>Meet & Greet</b> \n\nSnacks get situated \nRoom - Auditorium",
      options: [
        {
          text: "Back",
          jump: 1,
        },
      ],
    },
    3: {
      //Intro Overview
      text: "<b>Intro</b> \n\nWhat to know about the event during and after, rules of the road \nRoom - Auditorium",
      options: [
        {
          text: "Back",
          jump: 1,
        },
      ],
    },
    4: {
      //Keynote Overview
      text: "<b>Keynote Andreas</b> \n\nAndreas provides insights into our journey of One.IT, celebrating and reflecting on how far we have come while focusing on the challenges of tomorrow \nRoom - Auditorium",
      options: [
        {
          text: "Back",
          jump: 1,
        },
      ],
    },
    5: {
      //Level 1 Overview
      text: "<b>Level 1 - Team Work 2x 30 min</b> \n\n10:50",
      options: [
        {
          text: "Auditorium",
          jump: 6,
        },
        {
          text: "Feldberg",
          jump: 7,
        },
        {
          text: "Flexible Conference",
          jump: 8,
        },
        {
          text: "Workshop Room 5.1.1-5.1.2",
          jump: 9,
        },
        {
          text: "Back",
          jump: 0,
        },
      ],
    },
    6: {
      //Description W1
      text: "<b>Who are Business Core</b>, \nwhat are the roles, and what work is the team currently doing? \n\nNikolas Popp leads off with an impulse talk and then you can ask them anything about their work and what Business Core does for Haufe Group.",
      options: [
        {
          text: "Back",
          jump: 5,
        },
      ],
    },
    7: {
      //Description W2
      text: '<b>"Declarative infrastructure for the lazy OPS"</b> \n\nAutomation is the key to operating large IT systems. At the heart of the declarative approach is a description, on the basis of which we roll out our DevOps services reliably and reproducibly. \n\nIn a 30-minute session, we will show some examples of this from our daily work.',
      options: [
        {
          text: "Back",
          jump: 5,
        },
      ],
    },
    8: {
      //Description W3
      text: "<b>Digitalization - Sales & Service Team</b> \n- Hands - on SFDC will present  usecases: \n\n1. How key user work with SFDC \n2. How easy it is to integrate external objects in SFDC \n3. How easy it is to make configuration 4. Tosca and SFDC",
      options: [
        {
          text: "Back",
          jump: 5,
        },
      ],
    },
    9: {
      //Description W4
      text: "Enterprise IT unpack topics that all ITler should know about using IT equipment and services. \n\nThey also answer any questions you might have about Enterprise IT. Come to this open space if  you want to find out how to better use virtual meeting room tech, what you have to do ensure security, and anything else you might want to know about enterprise IT. \n\nPlease note, you will have a chance to ask questions before One.IT day.",
      options: [
        {
          text: "Back",
          jump: 5,
        },
      ],
    },
    10: {
      //Level 2 Overview
      text: "<b>Level 2 - Area Initiatives</b> \n\n12:55",
      options: [
        {
          text: "Auditorium",
          jump: 11,
        },
        {
          text: "Feldberg",
          jump: 12,
        },
        {
          text: "Flexible Conference",
          jump: 13,
        },
        {
          text: "Workshop Room 5.1.1-5.1.2",
          jump: 14,
        },
        {
          text: "Back",
          jump: 0,
        },
      ],
    },
    11: {
      //Description W5
      text: "<b>The NextGen ERP Intiative:</b> \n\nThe Business Core Area discusses the sheer size of the ERP initiative and how they will move the intiative forward in 2023 \n\n- collaboration with other IT teams, milestones, value deliveries \n\n- to support the Haufe Group business strategy and to lay the groundwork for going live in 2024.",
      options: [
        {
          text: "Back",
          jump: 10,
        },
      ],
    },
    12: {
      //Description W6
      text: "Integration area present the following initiatives \n\n<b>DevOps Services</b> \nSoftware Bill Of Materials - How to keep track of your Services in Operations \n\n<b>Integration</b> \nDataflow - Revamp Integration Product Data Management with NGE \n\n3 Stände und Managementraum?",
      options: [
        {
          text: "Back",
          jump: 10,
        },
      ],
    },
    13: {
      //Description W7
      text: "<b>Digitalization</b> area present the - Digital champions: vendor management, Wowinex Idea Portal, HLRE Customer Centricity, Citizen Developer, Akademie Seminar environment initiatives - and how these initiatives support IT and Haufe Group business objectives. \n\nSome <b>insights about our colleauges from Sales & Service</b> team regarding their challenges with the NGE program and how this also supports our business objectives.",
      options: [
        {
          text: "Back",
          jump: 10,
        },
      ],
    },
    14: {
      //Description W8
      text: "<b>Enterprise IT - Workplace in the metaverse</b> \n\nWorkplace showcases its work, including real example of a metaverse meeting. \n\nCome to this Team Work Fair to learn about Team Workplace and to experience the metaverse.",
      options: [
        {
          text: "Back",
          jump: 10,
        },
      ],
    },
    15: {
      //Level 3 Overview
      text: "<b>Level 3 - Hands On</b> \n\n13:45",
      options: [
        {
          text: "Auditorium",
          jump: 16,
        },
        {
          text: "Feldberg",
          jump: 17,
        },
        {
          text: "Flexible Conference",
          jump: 18,
        },
        {
          text: "Workshop Room 5.1.1-5.1.2",
          jump: 19,
        },
        {
          text: "Back",
          jump: 0,
        },
      ],
    },
    16: {
      //Description W9
      text: "<b>Agile working is a part of IT!</b> \n\nHere, we lead  you through a series of agile games that simulate some the challenges faced by the Next Gen ERP initiative and that act as a catalyst to build communication, data collection and priortization skills to find and right-size solutions. \nNo Hybrid concept",
      options: [
        {
          text: "Back",
          jump: 15,
        },
      ],
    },
    17: {
      //Description W10
      text: '<b>Holger Neub\'s integration team</b> shows us the difference between good and bad system integration by making you feel Bad Integration. \n\nYou will be part of the game. Hybrid concept: Presence "doing", remote "watching".',
      options: [
        {
          text: "Back",
          jump: 15,
        },
      ],
    },
    18: {
      //Description W11
      text: "Get your feet wet with \n<b>Power Platform technology:</b> Alex and the Power Platform team step us through a power platform workfow to build a data analytics platform complete with dashboard. \nFull Hybrid",
      options: [
        {
          text: "Back",
          jump: 15,
        },
      ],
    },
    19: {
      //Description W12
      text: "<b>Intro to Cloud:</b> \n\nHands on Serverless WS: Crisitian Pirtea and Max Schellhorn: Cristian and Max give a short impulse talk on how AWS can be used for IT, the business and technology advantages, and steps participants through a hands on serverless workshop, proving that everybody can do cloud computing. \nJoin this hands on, if you want to know why you need cloud for your IT and to get started using cloud AWS services. Full Hybrid",
      options: [
        {
          text: "Back",
          jump: 15,
        },
      ],
    },
    20: {
      //Closed Overview
      text: "Kommen wir nun langsam zum Abschluss, hier findest du alle wichtigen Informarionen.",
      options: [
        {
          text: "15:20 - Closed InfoTech",
          jump: 21,
        },
        {
          text: "16:30 - Quiz Prizes",
          jump: 22,
        },
        {
          text: "17:00 - Pizza and Relax",
          jump: 23,
        },
        {
          text: "Back",
          jump: 0,
        },
      ],
    },
    21: {
      //InfoTech Overview
      text: "Brian Jackson von InfoTech liefert die Top-5 IT-Trends, die jede IT Abteilung auf dem Hut haben muss. ",
      options: [
        {
          text: "Back",
          jump: 20,
        },
      ],
    },
    22: {
      //Quiz Prizes Overview
      text: "Zeigen uns, das was am Tag kleben geblieben ist. \n\nWenn du gut bist kannst Du etwas gewinnen.",
      options: [
        {
          text: "Back",
          jump: 20,
        },
      ],
    },
    23: {
      //Pizza and Relax Overview
      text: "Now, forget about it. \n\nZeit für Pizza futtern und zusammen entspannen. ",
      options: [
        {
          text: "Back",
          jump: 20,
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
        <View style={styles.kaliposition}>
          <Image
            style={styles.kalisize}
            source={require("../assets/img/Kali.png")}
          />
        </View>
        <View>
          <StyledText style={styles.text}>{agenda[jump].text}</StyledText>
        </View>
        <View style={styles.buttons}>
          {agenda[jump].options.map((button) => (
            <View style={styles.button}>
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
    justifyContent: "flex-start",
    resizeMode: "cover",
  },
  text: {
    fontSize: 16,
    color: "white",
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  kaliposition: {
    marginBottom: 30,
    marginLeft: 300,
  },
  kalisize: {
    width: 80,
    height: 80,
  },
  buttons: {
    top: 350,
    position: "absolute",
    alignSelf: "center",
  },
  button: {
    width: 350,
  },
});
export default AgendaScreen;
