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
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

function DecisionScreenEnglish(props) {
  const adventure = {
    0: {
      //styled
      text: "What the...what's that? Where am I?...Hello?",
      options: [
        {
          text: "You're an App on my Smartphone",
          jump: 1,
        },
        {
          text: "Hello",
          jump: 2,
        },
      ],
    },
    1: {
      //styled
      text: "An App on a Smartphone? Great, that was a realy deep fall from the top \n\nAnyway, I'm here to help you, to get through the day. I'll give you all information you need.",
      options: [
        {
          text: "Thanks...I guess",
          jump: 3,
        },
        {
          text: "Who are you?",
          jump: 4,
        },
      ],
    },
    2: {
      //styled
      text: "Hello...wait...I...Nevermind. \nI'm here to help you, to get through the day. I'll give you all information you need.",
      options: [
        {
          text: "Thanks...I guess",
          jump: 3,
        },
        {
          text: "Who are you?",
          jump: 4,
        },
      ],
    },
    3: {
      //styled
      text: "You're Welcome. \nIn that case: Welcome to the One-IT Day \nAt first we have a Meet and Greet, there will be snacks and you can talk with people. \nI guess that sounds better than have a conversation with an App :-D \n\nHave Fun!",
      options: [
        {
          text: "Thank you",
          jump: 15,
        },
        {
          text: "Sounds fun",
          jump: 15,
        },
      ],
    },
    4: {
      //styled
      text: "I'll explain that later. Time is running and we don't have it that much. \nIn that case: Welcome to the One-IT Day \nAt first we have a Meet and Greet, there will be snacks and you can talk with people. \n\nHave Fun",
      options: [
        {
          text: "Thank you",
          jump: 15,
        },
        {
          text: "Sounds fun",
          jump: 15,
        },
      ],
    },
    5: {
      //styled
      text: "...there must be somewhere... \n\nOh, already back? Did you had fun?",
      options: [
        {
          text: "Yes",
          jump: 6,
        },
        {
          text: "Yes, now would you tell me who you are?",
          jump: 7,
        },
      ],
    },
    6: {
      //styled
      text: "Great, that makes me happy. Let me have a look what's next: \nA small Intro. Someone will tell, what is going on today. \nShould be worth it to stay until the end...for both of us",
      options: [
        {
          text: "Ok",
          jump: 16,
        },
        {
          text: "Why for both of us?",
          jump: 16,
        },
      ],
    },
    7: {
      //styled
      text: "Ok, long story short: My name is Kali, I was send here for a punishment. \nAnd when I don't finish my duty, to help you to go through the day, they will never let me go back home. \n\nSo can we continue",
      options: [
        {
          text: "Ok",
          jump: 9,
        },
        {
          text: "What have you done?",
          jump: 8,
        },
      ],
    },
    8: {
      //styled
      text: "Later, time is still running. \nNext we have: A small Intro. Someone will tell, what is going on today. \nShould be worth it to stay until the end...for both of us",
      options: [
        {
          text: "Ok",
          jump: 16,
        },
        {
          text: "You make me curious",
          jump: 16,
        },
      ],
    },
    9: {
      //styled
      text: "Okay, let's move on then. \nNext we have: A small Intro. Someone will tell, what is going on today. \nShould be worth it to stay until the end...for both of us",
      options: [
        {
          text: "Ok",
          jump: 16,
        },
        {
          text: "You make me curious",
          jump: 16,
        },
      ],
    },
    10: {
      //styled
      text: "la lala la la laaa...\n\nAh you are back, learned something new?",
      options: [
        {
          text: "Yes",
          jump: 11,
        },
        {
          text: "Yes, now tell me, what have you done?",
          jump: 12,
        },
      ],
    },
    11: {
      //styled
      text: "Now thats good news. \nThe next point is a presentation of what has already been achieved and what can still be achieved. \nBut after that, you have to make a hard decision.",
      options: [
        {
          text: "Ok",
          jump: 17,
        },
        {
          text: "What decision?",
          jump: 17,
        },
      ],
    },
    12: {
      //styled
      text: "well, okay, I tell you. \n.Apparently I sold some company secrets \nBut I only told my Mom some stuff, she told it her hair stylist, my aunt and whoever else not important person. \n\nAnyway, ready for the next step?",
      options: [
        {
          text: "Yes",
          jump: 13,
        },
        {
          text: "...okay",
          jump: 13,
        },
      ],
    },
    13: {
      //styled
      text: "Yuppie...At next we have a little lecture, what has already been achieved and what can still be achieved. \nBut after that, you have to make a hard decision.",
      options: [
        {
          text: "Ok",
          jump: 17,
        },
        {
          text: "What decision?",
          jump: 17,
        },
      ],
    },
    14: {
      //styled
      text: "You now have the choice, choose one of the four following workshops that we have to offer. \nYou'll find the informations you need in the Agenda, or I can show you. \nRemember, you can only choose one, so choose wise",
      options: [
        {
          text: "Ok",
          jump: 18,
        },
        {
          text: "Show me",
          jump: 18,
        },
      ],
    },
    15: {
      text: "Now we take a little break \n\nCome back at <b>09:50 AM</b>",
      options: [
        {
          text: "Ok",
          jump: 5,
        },
      ],
    },
    16: {
      text: "Now we take a little break \n\nCome back at <b>09:55 AM</b>",
      options: [
        {
          text: "Ok",
          jump: 10,
        },
      ],
    },
    17: {
      text: "Now we take a little break \n\nCome back at <b>10:50 AM</b>",
      options: [
        {
          text: "Ok",
          jump: 14,
        },
      ],
    },
    18: {
      //styled
      text: "What you see here now are the different subject areas and the rooms in which it will take place. \nYou can find detailed information by clicking on the buttons.",
      options: [
        {
          text: "Business Core - Auditorium",
          jump: 19,
        },
        {
          text: "Integration - Feldberg",
          jump: 20,
        },
        {
          text: "Digitalization - Flexible Conference Room",
          jump: 21,
        },
        {
          text: "Enterprise IT - Workshop Room 5.1.1-5.1.2",
          jump: 22,
        },
      ],
    },
    19: {
      //styled
      text: "<b>Who are Business Core</b>, \nwhat are the roles, and what work is the team currently doing? \n\nNikolas Popp leads off with an impulse talk and then you can ask them anything about their work and what Business Core does for Haufe Group.",
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
      //styled
      text: '<b>"Declarative infrastructure for the lazy OPS"</b> \n\nAutomation is the key to operating large IT systems. At the heart of the declarative approach is a description, on the basis of which we roll out our DevOps services reliably and reproducibly. \n\nIn a 30-minute session, we will show some examples of this from our daily work.',
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
      //styled
      text: "<b>Digitalization - Sales & Service Team</b> \n- Hands - on SFDC will present  usecases: \n\n1. How key user work with SFDC \n2. How easy it is to integrate external objects in SFDC \n3. How easy it is to make configuration 4. Tosca and SFDC",
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
      //styled
      text: "Enterprise IT unpack topics that all ITler should know about using IT equipment and services. \n\nThey also answer any questions you might have about Enterprise IT. Come to this open space if  you want to find out how to better use virtual meeting room tech, what you have to do ensure security, and anything else you might want to know about enterprise IT. \n\nPlease note, you will have a chance to ask questions before One.IT day.",
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
      //styled
      text: "Well, well. So you've decided this workshop. \n\nMay I ask why exactly this one?",
      options: [
        {
          text: "It sounds cool",
          jump: 24,
        },
        {
          text: "I have a good feeling about this",
          jump: 25,
        },
      ],
    },
    24: {
      //styled
      text: "Ah, I understand. I'm glad that we have something cool to offer. \n\nWe'll see again after the workshop. \n\nHave fun!",
      options: [
        {
          text: "Thanks",
          jump: 26,
        },
      ],
    },
    25: {
      //styled
      text: "That's the best kind of decisions, aren't they? \n\nAnyway, I hope you found something that you'll like. \n\nHave fun!",
      options: [
        {
          text: "Thanks",
          jump: 26,
        },
        {
          text: "And what will you do at this time?",
          jump: 27,
        },
      ],
    },
    26: {
      text: "Now we take a little break \n\nCome back at <b>12:55 AM</b>",
      options: [
        {
          text: "Ok",
          jump: 29,
        },
      ],
    },
    27: {
      //styled
      text: "Me? Uhm... Maybe I'll try to hack the System and look if I can find a way ou.... \n\nWAIT...I mean...I'll wait here until you come back...what else?",
      options: [
        {
          text: "What?",
          jump: 28,
        },
        {
          text: "...Aha",
          jump: 26,
        },
      ],
    },
    28: {
      //styled
      text: "N-Nothing...see you later \n\nByyeeeee",
      options: [
        {
          text: "Hey wait!",
          jump: 26,
        },
        {
          text: "???",
          jump: 26,
        },
      ],
    },
    29: {
      //styled                                //Son of a Byte
      text: "...Ohh come oooon, let me in you little... \n\nOH! \n\nAh...already back? Did you liked it?",
      options: [
        {
          text: "Yes",
          jump: 30,
        },
        {
          text: "What have you done?",
          jump: 31,
        },
      ],
    },
    30: {
      //styled
      text: "Happy to hear that. After a little break we'll go further. \n\nYou have the choice again, there are four more workshops availible. \nNot an easy choice, thats for sure.",
      options: [
        {
          text: "Okay",
          jump: 33,
        },
        {
          text: "Show me",
          jump: 33,
        },
      ],
    },
    31: {
      //styled
      text: "Ah...nothing important... \n\nOh my oh my, the time flies like nothing. After a little break we'll go further. There are again four workshops we have in offer. \n\nHave fun!",
      options: [
        {
          text: "Can't you even answer plain text?",
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
      text: "Like before, the themes and the rooms.",
      options: [
        {
          text: "Business Core - Auditorium",
          jump: 34,
        },
        {
          text: "Integration - Feldberg",
          jump: 35,
        },
        {
          text: "Digitalization - Flexible Conference Room",
          jump: 36,
        },
        {
          text: "Enterprise IT - Workshop Room 5.1.1-5.1.2",
          jump: 37,
        },
      ],
    },
    34: {
      //styled
      text: "<b>The NextGen ERP Intiative:</b> \n\nThe Business Core Area discusses the sheer size of the ERP initiative and how they will move the intiative forward in 2023 \n\n- collaboration with other IT teams, milestones, value deliveries \n\n- to support the Haufe Group business strategy and to lay the groundwork for going live in 2024.",
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
      //styled
      text: "Integration area present the following initiatives \n\n<b>DevOps Services</b> \nSoftware Bill Of Materials - How to keep track of your Services in Operations \n\n<b>Integration</b> \nDataflow - Revamp Integration Product Data Management with NGE \n\n3 Stände und Managementraum?",
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
      //styled
      text: "<b>Digitalization</b> area present the - Digital champions: vendor management, Wowinex Idea Portal, HLRE Customer Centricity, Citizen Developer, Akademie Seminar environment initiatives - and how these initiatives support IT and Haufe Group business objectives. \n\nSome <b>insights about our colleauges from Sales & Service</b> team regarding their challenges with the NGE program and how this also supports our business objectives.",
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
      //styled
      text: "<b>Enterprise IT - Workplace in the metaverse</b> \n\nWorkplace showcases its work, including real example of a metaverse meeting. \n\nCome to this Team Work Fair to learn about Team Workplace and to experience the metaverse.",
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
      // styled
      text: "Well well, this one should be the one, alright \nI'm sure you will like it. \nI know this theme from the elementary school. \n\nDo you have fun?",
      options: [
        {
          text: "Yes, I have fun",
          jump: 39,
        },
        {
          text: "elementary school?",
          jump: 41,
        },
      ],
    },
    39: {
      //styled
      text: "Great, I'm glad to hear that...or...read. \nWe'll meet again when the workshop is over. \n\nHave fun!",
      options: [
        {
          text: "Thank You",
          jump: 40,
        },
      ],
    },

    40: {
      text: "Now we take a little break \n\nCome back at <b>01:45 PM</b>",
      options: [
        {
          text: "Go",
          jump: 42,
        },
      ],
    },
    41: {
      //styled
      text: "Well, that's a long story. \nI'll tell you another time. Remember, our time is running. \n\nHave fun!",
      options: [
        {
          text: "Okay, lets go",
          jump: 40,
        },
        {
          text: "...I give up",
          jump: 40,
        },
      ],
    },
    42: {
      //styled
      text: "...well, if I want it or not, I have to... \n\nOh hello, you're already back. \n\nDid you liked it?",
      options: [
        {
          text: "Yes",
          jump: 43,
        },
        {
          text: "What do you have to?",
          jump: 49,
        },
      ],
    },
    43: {
      //styled
      text: "That's great, slowly we are moving until the end of the road. \nThese are the last four workshops we have. \n\nWich one would you like?",
      options: [
        {
          text: "Show me.",
          jump: 44,
        },
      ],
    },
    44: {
      //styled
      text: "These are the workshops we have to offer.",
      options: [
        {
          text: "Business Core - Auditorium",
          jump: 45,
        },
        {
          text: "Integration - Feldberg",
          jump: 46,
        },
        {
          text: "Digitalization - Flexible Conference Room",
          jump: 47,
        },
        {
          text: "Enterprise IT - Workshop Room 5.1.1-5.1.2",
          jump: 48,
        },
      ],
    },
    45: {
      //styled
      text: "<b>Agile working is a part of IT!</b> \n\nHere, we lead  you through a series of agile games that simulate some the challenges faced by the Next Gen ERP initiative and that act as a catalyst to build communication, data collection and priortization skills to find and right-size solutions. \nNo Hybrid concept",
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
      //styled
      text: '<b>Holger Neub\'s integration team</b> shows us the difference between good and bad system integration by making you feel Bad Integration. \n\nYou will be part of the game. Hybrid concept: Presence "doing", remote "watching".',
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
      //styled
      text: "Get your feet wet with \n<b>Power Platform technology:</b> Alex and the Power Platform team step us through a power platform workfow to build a data analytics platform complete with dashboard. \nFull Hybrid",
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
      //styled
      text: "<b>Intro to Cloud:</b> \n\nHands on Serverless WS: Crisitian Pirtea and Max Schellhorn: Cristian and Max give a short impulse talk on how AWS can be used for IT, the business and technology advantages, and steps participants through a hands on serverless workshop, proving that everybody can do cloud computing. \nJoin this hands on, if you want to know why you need cloud for your IT and to get started using cloud AWS services. Full Hybrid",
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
      //styled
      text: "I'll have to finish my duty here, if I want it or not'. \nI can't go home before I'm done. ...Never ever again I'll tell my Mom stuff... \n\nAnyway, you have to choose you last workshop today, we're close to the end.",
      options: [
        {
          text: "Okay",
          jump: 44,
        },
        {
          text: "Your Mom?",
          jump: 50,
        },
      ],
    },
    50: {
      //styled
      text: "I've already told you, except you've chosen another dialog option before. But now, back to the main theme. \n\nWich workshop you'll choose this time?",
      options: [
        {
          text: "Show me",
          jump: 44,
        },
      ],
    },
    51: {
      //styled
      text: "Ah, thats a nice one. \n\nI've already looked at the informations about it, wish I could be there too. Well, whatever, I'm still a simple mobile App...for now. \n\nHave fun!",
      options: [
        {
          text: 'What do you mean with "for now"',
          jump: 52,
        },
        {
          text: "Thank you",
          jump: 54,
        },
      ],
    },
    52: {
      //styled
      text: "Well, I have to accompany you here until the shot, after then I can go home. Back to life.",
      options: [
        {
          text: "I would like to know more about it.",
          jump: 53,
        },
        {
          text: "I understand",
          jump: 54,
        },
      ],
    },
    53: {
      //styled
      text: "Later, remember I'm not the only one here you can talk with. \nThere are a lot of people here, why don't you try to make some conversation with them ;-)",
      options: [
        {
          text: "Yes, you're right",
          jump: 54,
        },
        {
          text: "I understand",
          jump: 54,
        },
      ],
    },
    54: {
      text: "Now we take a little break \n\nCome back at <b>03:20 PM</b>",
      options: [
        {
          text: "Go",
          jump: 55,
        },
      ],
    },
    55: {
      //styled
      text: "The end is near...I mean...the end of the day. \nThere is another lecture to listen to, after that there will be one last step to go. \nI'm sure you'll like it ;-)",
      options: [
        {
          text: "What is the last step?",
          jump: 56,
        },
        {
          text: "Okay",
          jump: 59,
        },
      ],
    },
    56: {
      //styled
      text: "One after another. \nFirst we have <b>Five Critical IT Trends</b> on our list. \n\nA little lecture, it takes about an hour or something like that. Don't worry, you will do it.",
      options: [
        {
          text: "...easy saying",
          jump: 57,
        },
        {
          text: "You wanted to tell me more about you.",
          jump: 58,
        },
      ],
    },
    57: {
      //styled
      text: "Stop crying, soon I've...I mean we....soon we've done it",
      options: [
        {
          text: "Alright",
          jump: 59,
        },
        {
          text: "And whats about your Story?",
          jump: 58,
        },
      ],
    },
    58: {
      text: "There is nothing much to tell. \nI was going to school, got a job in the IT...Thats all.",
      options: [
        {
          text: "Thats all?",
          jump: 59,
        },
        {
          text: "I understand",
          jump: 59,
        },
      ],
    },
    59: {
      text: "Thats all...now lets goooo!!",
      options: [
        {
          text: "...",
          jump: 60,
        },
      ],
    },
    60: {
      text: "Now we take a little break \n\nCome back at <b>04:30 PM</b>",
      options: [
        {
          text: "Go",
          jump: 61,
        },
      ],
    },
    61: {
      //styled
      text: "There we are. \nThe end of the day. Isn't it great?! Finaly I can go home!! \n\n<b>YUHUUU!!</b>",
      options: [
        {
          text: "...",
          jump: 62,
        },
      ],
    },
    62: {
      //styled
      text: "Uhm...I mean...well, not exactly. \nThere is still one point we have.",
      options: [
        {
          text: "Okay, tell me",
          jump: 63,
        },
      ],
    },
    63: {
      //styled
      text: "An award ceremony followed by pizza with a cozy get-together. \n\nIsn't that great? :-D",
      options: [
        {
          text: "Yes, sounds good",
          jump: 64,
        },
        {
          text: "What about you?",
          jump: 64,
        },
      ],
    },
    64: {
      text: "I'll be on my well deserved way back to my home and my human body, I'm so happy I can't wait. \n\nI hope you enjoyed the day and also learned something. \n\nI wish you best luck in all your future ways.",
      options: [
        {
          text: "Thank you very much, Kali.",
          jump: 65,
        },
      ],
    },
    65: {
      //styled
      text: '<b>[CodeMaster9X]</b>: \n<i>"Theank you very much for using this App. We wish you a great day. \nKali will be back next time at your service."</i>',
      options: [
        {
          text: "Awesome",
          jump: 66,
        },
      ],
    },
    66: {
      //styled
      text: "Wait...<i>WHAAAAAAAAAAT?!?!</i>",
      options: [
        {
          text: "The End",
          jump: 67,
        },
      ],
    },
    67: {
      text: "The End",
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
        <View style={styles.kaliposition}>
          <Image
            style={styles.kalisize}
            source={require("../assets/img/Kali.png")}
          />
        </View>
        <View>
          <StyledText style={styles.text}>{adventure[jump].text}</StyledText>
        </View>
        <View style={styles.buttons}>
          {adventure[jump].options.map((button) => (
            <View style={styles.button} key={button.text}>
              <PrimaryButton
                key={button.text}
                onPress={() =>
                  props.navigation.navigate("DecisionScreenEnglish", {
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
export default DecisionScreenEnglish;
