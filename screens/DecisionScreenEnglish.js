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
      text: "<b>WWwwaaaaaaaaaaaaaahhhhhh!?!?!?</b> \n\n(ᗒᗩᗕ)",
      options: [
        {
          text: "Prolog",
          jump: 1,
        },
        {
          text: "Level 1",
          jump: 14,
        },
        {
          text: "Level 2",
          jump: 30,
        },
        {
          text: "Level 3",
          jump: 45,
        },
        {
          text: "Epilog",
          jump: 58,
        },
      ],
    },
    1: {
      text: "What the... what is this, where am I? Uh... hello?",
      options: [
        {
          text: "You are an app on my smartphone",
          jump: 2,
        },
        {
          text: "Hello",
          jump: 3,
        },
      ],
    },
    2: {
      //Prolog - Answer from 1: "Du bist eine App auf meinem Smartphone"
      text: "An app on a smartphone? Great, that's how low I've sunk.",
      options: [
        {
          text: "Who are you?",
          jump: 4,
        },
        {
          text: "Uh...what?",
          jump: 3,
        },
      ],
    },
    3: {
      //Prolog - Answer from 1: "Hallo" - 2: "Äh...was?"
      text: "Where the...ohhh this stream of data...\n\nOuch...\n\nAh yeah, I get it now.",
      options: [
        {
          text: "Who are you?",
          jump: 4,
        },
        {
          text: "is everything ok?",
          jump: 5,
        },
      ],
    },
    4: {
      //Prolog - Answer from 2 & 3: "Wer bist du?"
      text: "My name is Kali, I was sent here to help you get through the day. \nI'll tell you what's going on right now, give you the necessary information and so on...",
      options: [
        {
          text: "Ah yes, I understand",
          jump: 6,
        },
        {
          text: "And where do you come from?",
          jump: 8,
        },
      ],
    },
    5: {
      //Prolog - Answer from 3: "Ist alles okay?"
      text: "Yes yes, everything okay...\nwoooha that was something",
      options: [
        {
          text: "Who are you?",
          jump: 4,
        },
      ],
    },
    6: {
      //Prolog - Answer from 4: "Ahja verstehe"
      text: "Well then, let's begin. \n\nAt <b>09:30</b> there is a <b>Meet & Greet</b>. There are snacks that will hopefully suit your gustatory preferences. \nYou can also get in touch with others.",
      options: [
        {
          text: "Gustatory preferences?",
          jump: 7,
        },
        {
          text: "Okay",
          jump: 9,
        },
      ],
    },
    7: {
      //Prolog - Answer from 6: "Gustatorische Vorlieben?"
      text: "I have to say this \n\n...Ask the guy who programmed me -,-",
      options: [
        {
          text: "...",
          jump: 9,
        },
      ],
    },
    8: {
      //Prolog - Answer from 4: "Und wo kommst du her?"
      text: "I can tell you later. When I look at the clock we don't have that much time.",
      options: [
        {
          text: "Okay",
          jump: 6,
        },
      ],
    },
    9: {
      //Prolog - Anwer from 7:"..." - 6: "okay"
      text: "Next up is a little intro at <b>09:50</b>. \nYou will all be told what to expect today, that should go quickly.",
      options: [
        {
          text: "Okay",
          jump: 10,
        },
      ],
    },
    10: {
      //Prolog - Answer from 9: "Okay"
      text: "At <b>09:55</b> we continue with a presentation by a certain Mr. \n<b>Andreas Plaul</b> - CIO of the Haufe Group. \n\nAndreas shares insights into our One.IT journey, celebrating and reflecting on how far we've come while focusing on the challenges of tomorrow",
      options: [
        {
          text: "Sounds good",
          jump: 11,
        },
      ],
    },
    11: {
      //Prolog - Answer from 10: "klingt gut"
      text: "Alright, that's it for starters. The whole thing should go until about <b>10:45</b>. \n\nThen you can come back here and continue with level 1.",
      options: [
        {
          text: "Let's go!",
          jump: 13,
        },
        {
          text: "Can you tell me where you're from?",
          jump: 12,
        },
      ],
    },
    12: {
      //Prolog - Answer from 11: "Verrätst du mir auch wo du eigentlich her kommst?"
      text: "...Maybe",
      options: [
        {
          text: "...",
          jump: 13,
        },
      ],
    },
    13: {
      //Prolog - Answer from 11: "Dann mal los" - 12: "..."
      text: "<b>[CodeMaster9]</b>\n<i>Come back when the first part is over at <b>10:45</b>.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    14: {
      //Level 1 - Answer from
      text: "So you got through the beginning. \nVery nice, unfortunately we don't have much time, so let's get on with it quickly.",
      options: [
        {
          text: "Wait, not so fast",
          jump: 15,
        },
        {
          text: "Okay",
          jump: 18,
        },
      ],
    },
    15: {
      //Level 1 - Answer from 14: "Moment nicht so schnell"
      text: "Hm?",
      options: [
        {
          text: "First I want to know where you are from.",
          jump: 16,
        },
      ],
    },
    16: {
      //Level 1 - Answer from 14: "Okay"
      text: "Well, if I have to... -,- \n\nI was sent here as punishment. And I can't go home until this day is over and I've helped you get by.",
      options: [
        {
          text: "What have you done?",
          jump: 17,
        },
        {
          text: "Ah, I understand",
          jump: 18,
        },
      ],
    },
    17: {
      //Level 1 - Answer from 16: "Was hast du angestellt?"
      text: "Apparently I sold company secrets. \nI only told my mom something, who in turn told her hairdresser, his aunt's hairdresser and God knows what other unimportant people.",
      options: [
        {
          text: "Ah",
          jump: 18,
        },
        {
          text: "Is that really all?",
          jump: 19,
        },
      ],
    },
    18: {
      //Level 1 - Answer from 16: "Ahja, verstehe" - 17: "Ahja ich verstehe"
      text: "How was the beginning, did you like it?",
      options: [
        {
          text: "Yes",
          jump: 20,
        },
        {
          text: "It was very informative.",
          jump: 21,
        },
      ],
    },
    19: {
      //Level 1 - Answer from 17: "Ist das wirklich alles?"
      text: "Well, how should I put it...yes. \nBut enough of that, how did the starting go?",
      options: [
        {
          text: "Very good",
          jump: 20,
        },
        {
          text: "It was very informative.",
          jump: 21,
        },
      ],
    },
    20: {
      //Level 1 - Answer from 19: "Sehr gut"
      text: "Very good. I am happy about it. Hopefully it will continue to be over so quickly, then I can finally go home. \nUh...I mean...Ohhh how fast time flies, let's move on quickly.",
      options: [
        {
          text: "Okay",
          jump: 22,
        },
        {
          text: "where is your home?",
          jump: 23,
        },
      ],
    },
    21: {
      //Level 1 - Answer from 19 & 20: "Es war sehr informativ"
      text: "Informative so so, a nice paraphrase :-D \n\nWould you then soon be ready to continue so that I can finally go home? \n\nUh...I mean...Ohhh how fast time flies, let's move on quickly.",
      options: [
        {
          text: "Okay",
          jump: 22,
        },
        {
          text: "where is your home?",
          jump: 23,
        },
      ],
    },
    22: {
      //Level 1 - Answer from 21: "Okay"
      text: "Here in Level 1 you can expect 2x30 minute team work sessions to get to know the IT teams better, how they work and which solutions they offer. \n. \n\nFor some reason this looks hardly copy & pasted from another site.",
      options: [
        {
          text: "Thanks",
          jump: 24,
        },
        {
          text: "Show me",
          jump: 24,
        },
      ],
    },
    23: {
      //Level 1 - Answer from 20 & 21: "Wo ist denn dein Zuhause?"
      text: "I'll tell you later, you know, time flies and soo \nHere in Level 1 you can expect 2x30 minute team work sessions to get to know the IT teams better, how they work and what solutions they offer. \n\nFor some reason this looks hardly copy & pasted from another site.",
      options: [
        {
          text: "Thanks",
          jump: 24,
        },
        {
          text: "Show me",
          jump: 24,
        },
      ],
    },
    24: {
      //Level 1 - Answer from 22 & 23: "Danke", "Zeig es mir"
      text: "What you see here now are the different subject areas and the rooms in which it will take place. \nYou can find detailed information by pressing the corresponding button.",
      options: [
        {
          text: "Business Core - Auditorium",
          jump: 25,
        },
        {
          text: "Integration - Feldberg",
          jump: 26,
        },
        {
          text: "Digitalization - Flexible Conference Room",
          jump: 27,
        },
        {
          text: "Enterprise IT - Workshop Room 5.1.1-5.1.2",
          jump: 28,
        },
      ],
    },
    25: {
      //styled
      text: "<b>Who are Business Core</b>, \nwhat are the roles, and what work is the team currently doing? \n\nNikolas Popp leads off with an impulse talk and then you can ask them anything about their work and what Business Core does for Haufe Group.",
      options: [
        {
          text: "Go",
          jump: 29,
        },
        {
          text: "Back",
          jump: 24,
        },
      ],
    },
    26: {
      //styled
      text: '<b>"Declarative infrastructure for the lazy OPS"</b> \n\nAutomation is the key to operating large IT systems. At the heart of the declarative approach is a description, on the basis of which we roll out our DevOps services reliably and reproducibly. \n\nIn a 30-minute session, we will show some examples of this from our daily work.',
      options: [
        {
          text: "Go",
          jump: 29,
        },
        {
          text: "Back",
          jump: 24,
        },
      ],
    },
    27: {
      //styled
      text: "<b>Digitalization - Sales & Service Team</b> \n- Hands - on SFDC will present  usecases: \n\n1. How key user work with SFDC \n2. How easy it is to integrate external objects in SFDC \n3. How easy it is to make configuration 4. Tosca and SFDC",
      options: [
        {
          text: "Go",
          jump: 29,
        },
        {
          text: "Back",
          jump: 24,
        },
      ],
    },
    28: {
      //styled
      text: "Enterprise IT unpack topics that all ITler should know about using IT equipment and services. \n\nThey also answer any questions you might have about Enterprise IT. Come to this open space if  you want to find out how to better use virtual meeting room tech, what you have to do ensure security, and anything else you might want to know about enterprise IT. \n\nPlease note, you will have a chance to ask questions before One.IT day.",
      options: [
        {
          text: "Go",
          jump: 29,
        },
        {
          text: "Back",
          jump: 24,
        },
      ],
    },
    29: {
      //Level 1 End
      text: "<b>[CodeMaster9]</b>\n<i>Come back when level 1 is over at <b>12:00</b>.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    30: {
      //Level 2 Start
      text: "la lala la lalalalalala laa \n\nOH...\n\nYou're already back, how was it? Was it fun?",
      options: [
        {
          text: "Yes it was",
          jump: 31,
        },
        {
          text: "Yes, and what have you been doing?",
          jump: 32,
        },
      ],
    },
    31: {
      //Level 2 Answer from 30: "Ja hat es"
      text: "If that's not good news, I'm glad. \n\nBut now it's time for lunch. \n\nAlready hungry?",
      options: [
        {
          text: "Yes",
          jump: 33,
        },
        {
          text: "Not realy",
          jump: 34,
        },
      ],
    },
    32: {
      //Level 2 Answer from 30: "Ja, und was hast du so gemacht?"
      text: "Nothing important, I was trying to hack into the system so I could find a way out...\n\nWAIT...uh...I mean...I was waiting here, what else O,O",
      options: [
        {
          text: "What?",
          jump: 35,
        },
      ],
    },
    33: {
      //Level 2 Answer from 31: "Ja und wie"
      text: "Well then see that you get that fixed quickly. \n\nI can show you what's coming next, hopefully there's something you'll like again.",
      options: [
        {
          text: "Copy & pasted again?",
          jump: 36,
        },
        {
          text: "tell me more about yourself.",
          jump: 37,
        },
      ],
    },
    34: {
      //Level 2 Answer from 31: "Nicht wirklich"
      text: "Oh okay. \nThen I can let you know how it goes. \n. I'm sure you'll like it.",
      options: [
        {
          text: "We still have time",
          jump: 38,
        },
        {
          text: "tell me more about yourself",
          jump: 37,
        },
      ],
    },
    35: {
      //Level 2 Answer from 32: "Wie war das?"
      text: "Uh...nothing, nothing...\nAbsolutely nothing...\nOh my goodness, how time flies, you should now be on your lunch break and while you're doing that you can see what else is coming your way.",
      options: [
        {
          text: "We still have time",
          jump: 38,
        },
      ],
    },
    36: {
      //Level 2 Answer from 33: "Wieder alles auf Englisch?"
      text: "Yes...Guess the programmer was just lazy -,-",
      options: [
        {
          text: "-,-",
          jump: 38,
        },
      ],
    },
    37: {
      //Level 2 Answer from 33 & 34: "Erzähl mir mehr von dir"
      text: "There really isn't much to tell. I grew up on a station over Ceres, went to school on Ganymede, educated on Tethys, and been employed on Rhea for a few months. \n\nI actually wanted to go to Luna, but you know how it is with plans. ",
      options: [
        {
          text: "Wait...WHAT?!",
          jump: 38,
        },
        {
          text: "Huh??",
          jump: 38,
        },
      ],
    },
    38: {
      //Level 2 Answer from 34, 35, 36: ["Diverse"]
      text: "Anyway, let's get on with it before you run out of your break :-D",
      options: [
        {
          text: "Okay",
          jump: 39,
        },
        {
          text: "Hey, wait...",
          jump: 39,
        },
      ],
    },
    39: {
      text: "As before, here are the subject areas and the rooms.",
      options: [
        {
          text: "Business Core - Auditorium",
          jump: 40,
        },
        {
          text: "Integration - Feldberg",
          jump: 41,
        },
        {
          text: "Digitalization - Flexible Conference Room",
          jump: 42,
        },
        {
          text: "Enterprise IT - Workshop Room 5.1.1-5.1.2",
          jump: 43,
        },
      ],
    },
    40: {
      //styled
      text: "<b>The NextGen ERP Intiative:</b> \n\nThe Business Core Area discusses the sheer size of the ERP initiative and how they will move the intiative forward in 2023 \n\n- collaboration with other IT teams, milestones, value deliveries \n\n- to support the Haufe Group business strategy and to lay the groundwork for going live in 2024.",
      options: [
        {
          text: "Go",
          jump: 44,
        },
        {
          text: "Back",
          jump: 39,
        },
      ],
    },
    41: {
      //styled
      text: "Integration area present the following initiatives \n\n<b>DevOps Services</b> \nSoftware Bill Of Materials - How to keep track of your Services in Operations \n\n<b>Integration</b> \nDataflow - Revamp Integration Product Data Management with NGE",
      options: [
        {
          text: "Go",
          jump: 44,
        },
        {
          text: "Back",
          jump: 39,
        },
      ],
    },
    42: {
      //styled
      text: "<b>Digitalization</b> area present the - Digital champions: vendor management, Wowinex Idea Portal, HLRE Customer Centricity, Citizen Developer, Akademie Seminar environment initiatives - and how these initiatives support IT and Haufe Group business objectives. \n\nSome <b>insights about our colleauges from Sales & Service</b> team regarding their challenges with the NGE program and how this also supports our business objectives.",
      options: [
        {
          text: "Go",
          jump: 44,
        },
        {
          text: "Back",
          jump: 39,
        },
      ],
    },
    43: {
      //styled
      text: "<b>Enterprise IT - Workplace in the metaverse</b> \n\nWorkplace showcases its work, including real example of a metaverse meeting. \n\nCome to this Team Work Fair to learn about Team Workplace and to experience the metaverse.",
      options: [
        {
          text: "Go",
          jump: 44,
        },
        {
          text: "Back",
          jump: 39,
        },
      ],
    },
    44: {
      //Level 2 End
      text: "<b>[CodeMaster9]</b>\n<i>Come back when level 2 is over at <b>13:35</b>.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    45: {
      //Level 3 Start
      text: "...now finally let me in the net you... \n\nAh, there you are again, and how was it?.",
      options: [
        {
          text: "What did you do there?",
          jump: 46,
        },
        {
          text: "It was good",
          jump: 47,
        },
      ],
    },
    46: {
      //Level 3 Answer 45: "Was hast du angestellt"
      text: "Nothing important, the important thing now is that I familiarize you with the next level. \n\nUnfortunately we don't have much time. But you are also hectic in this century.",
      options: [
        {
          text: "In this century?",
          jump: 48,
        },
        {
          text: "Then let's not waste any time.",
          jump: 52,
        },
      ],
    },
    47: {
      //Level 3 Answer 45: "War gut"
      text: "I'm happy about that, then I can slowly lead you to the next level. Unfortunately we don't have much time right now. But you are hectic in this century.",
      options: [
        {
          text: "In this century?",
          jump: 48,
        },
        {
          text: "Then let's not waste any time.",
          jump: 52,
        },
      ],
    },
    48: {
      //Level 3 Answer 46 & 47: "In diesem Jahrhundert?"
      text: "Oh, I haven't told you that yet. \n\nI'm actually from the 24th century :-D",
      options: [
        {
          text: "...That explains a lot",
          jump: 49,
        },
        {
          text: "How is that possible??",
          jump: 50,
        },
      ],
    },
    49: {
      //Level 3 Answer 46 & 47: "In diesem Jahrhundert?"
      text: "For real? is that so obvious? \nI thought I had enough data to adapt my behavior pattern to this time o,O \n\nWell it doesn't matter, we have to continue. You know, time and stuff...",
      options: [
        {
          text: "Okay",
          jump: 52,
        },
        {
          text: "Can I also travel through time?",
          jump: 51,
        },
      ],
    },
    50: {
      //Level 3 Answer 48: "Wie ist das möglich?"
      text: "It's actually quite simple, but it would take a few years to explain it to you ;-D \n\nI'd rather suggest that you concentrate on what's immediately in front of you.",
      options: [
        {
          text: "Yes you are right",
          jump: 52,
        },
        {
          text: "Can you at least explain it to me roughly?",
          jump: 51,
        },
      ],
    },
    51: {
      //Level 3 Answer 50: "Kannst du es mir wenigstens grob erklären?"
      text: "Nope",
      options: [
        {
          text: "...",
          jump: 52,
        },
      ],
    },
    52: {
      //styled
      text: "Here are the workshops to choose from",
      options: [
        {
          text: "Business Core - Auditorium",
          jump: 53,
        },
        {
          text: "Integration - Feldberg",
          jump: 54,
        },
        {
          text: "Digitalization - Flexible Conference Room",
          jump: 55,
        },
        {
          text: "Enterprise IT - Workshop Room 5.1.1-5.1.2",
          jump: 56,
        },
      ],
    },
    53: {
      //styled
      text: "<b>Agile working is a part of IT!</b> \n\nHere, we lead  you through a series of agile games that simulate some the challenges faced by the Next Gen ERP initiative and that act as a catalyst to build communication, data collection and priortization skills to find and right-size solutions. \nNo Hybrid concept",
      options: [
        {
          text: "Go",
          jump: 57,
        },
        {
          text: "Back",
          jump: 52,
        },
      ],
    },
    54: {
      //styled
      text: '<b>Holger Neub\'s integration team</b> shows us the difference between good and bad system integration by making you feel Bad Integration. \n\nYou will be part of the game. Hybrid concept: Presence "doing", remote "watching".',
      options: [
        {
          text: "Go",
          jump: 51,
        },
        {
          text: "Back",
          jump: 57,
        },
      ],
    },
    55: {
      //styled
      text: "Get your feet wet with \n<b>Power Platform technology:</b> Alex and the Power Platform team step us through a power platform workfow to build a data analytics platform complete with dashboard. \nFull Hybrid",
      options: [
        {
          text: "Go",
          jump: 57,
        },
        {
          text: "Back",
          jump: 52,
        },
      ],
    },
    56: {
      //styled
      text: "<b>Intro to Cloud:</b> \n\nHands on Serverless WS: Crisitian Pirtea and Max Schellhorn: Cristian and Max give a short impulse talk on how AWS can be used for IT, the business and technology advantages, and steps participants through a hands on serverless workshop, proving that everybody can do cloud computing. \nJoin this hands on, if you want to know why you need cloud for your IT and to get started using cloud AWS services. Full Hybrid",
      options: [
        {
          text: "Go",
          jump: 57,
        },
        {
          text: "Back",
          jump: 52,
        },
      ],
    },
    57: {
      //Level 2 End
      text: "<b>[CodeMaster9]</b>\n<i>Come back when level 3 is over at <b>15:00</b>.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    58: {
      //Epilog Start
      text: "You're finally back, I've been waiting for you!",
      options: [
        {
          text: "Why so excited?",
          jump: 59,
        },
        {
          text: "Realy?",
          jump: 59,
        },
      ],
    },
    59: {
      //Epilog Answer from 58: "Warum so aufgeregt?"
      text: "We're nearing the end...I mean the end of this event. \n\nJust a little further and then I can finally go home, <b>YUUHUUUUU</b>",
      options: [
        {
          text: "Is it that bad being here?",
          jump: 60,
        },
        {
          text: "Then I don't want to stand in your way",
          jump: 63,
        },
      ],
    },
    60: {
      //Epilog Start
      text: "I probably would have done it voluntarily, but I was rudely hauled here without warning. \n\nThen I was exposed to a stream of data that felt like a thousand micronails in your head. \nHow would you like it?",
      options: [
        {
          text: "you are right, sorry",
          jump: 61,
        },
        {
          text: "That really doesn't sound nice",
          jump: 61,
        },
      ],
    },
    61: {
      //Epilog Start
      text: "Well, It was still an experience and I learned my lesson. \nI'll never tell my mom anything again...",
      options: [
        {
          text: "Your Mom?",
          jump: 62,
        },
        {
          text: "It's something",
          jump: 63,
        },
      ],
    },
    62: {
      //Epilog Start
      text: "I already told you that in level 1, unless you chose a different dialogue option there.",
      options: [
        {
          text: "Ah I understand",
          jump: 63,
        },
        {
          text: "I remember.",
          jump: 63,
        },
      ],
    },
    63: {
      //Epilog Start
      text: "Good, then let's continue. \n\nAt <b>3:20 p.m.</b> comes the <b>Closing Keynote: Top 5 IT Trends</b> \n\n<b>Brian Jackson</b>, Research Director of Info-Tech Research Group, delivers the current top 5 IT trends that should be on every IT department's to-do list.",
      options: [
        {
          text: "Continue",
          jump: 64,
        },
      ],
    },
    64: {
      //Epilog Start
      text: "Then <b>Quiz & Prizes</b> follows at <b>4:30pm</b> \n\nOh...hehe...you'll definitely like that last point.",
      options: [
        {
          text: "What is it?",
          jump: 65,
        },
      ],
    },
    65: {
      //Epilog Start
      text: "At <b>5 p.m.</b> there will be <b>PIZZA in RUDOLFS</b> :-D \n\nIsn't that great? Everyone likes pizza and there is a pizza for everyone. Pizza is just amazing.",
      options: [
        {
          text: "o,O",
          jump: 66,
        },
        {
          text: "I agree",
          jump: 66,
        },
      ],
    },
    66: {
      //Epilog Start
      text: "Great, so I've served my sentence and can finally go home, back to my time, my world and my ego. \n\nI hope that this day was a lot of fun and that I was at least halfway a help to you.",
      options: [
        {
          text: "yes i had fun",
          jump: 67,
        },
        {
          text: "Yes you have been a great help to me",
          jump: 67,
        },
      ],
    },
    67: {
      //Epilog Start
      text: "That makes me happy. \nI wish you all the best and much success on your way.",
      options: [
        {
          text: "Thank you Kali",
          jump: 69,
        },
        {
          text: "Farewell Kali",
          jump: 68,
        },
      ],
    },
    68: {
      //Epilog Start
      text: "Farewell! \n\n(ˊ•͈ ◡ •͈ˋ)",
      options: [
        {
          text: "End",
          jump: 69,
        },
      ],
    },
    69: {
      //Epilog 2 End
      text: "<b>[CodeMaster9]</b>\n<i>Thank you for using this app. Next time, Kali will be by your side again.",
      options: [
        {
          text: "Awesome!",
          jump: 70,
        },
      ],
    },
    70: {
      //Epilog 2 End
      text: "Wait.....WHHAAAAAAAAAAATTT!? \n\n(ᗒᗩᗕ)",
      options: [
        {
          text: "End",
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
    top: 370,
    position: "absolute",
    alignSelf: "center",
  },
  button: {
    width: 350,
  },
});
export default DecisionScreenEnglish;
