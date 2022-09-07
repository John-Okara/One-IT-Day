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

function DecisionScreen(props) {
  const adventure = {
    0: {
      //styled
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
      //styled
      text: "Eine App auf einem Smartphone? Na super, so tief bin ich schon gesunken. \n\nEgal, ich bin hier um dir zu helfen, durch den Tag zu kommen. Ich gebe dir dafür alle nötigen Informationen die du brauchst.",
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
      //styled
      text: "Hallo...warte...ich...Äh...Egal, ich bin hier um dir zu helfen, durch den Tag zu kommen. \nIch gebe dir dafür alle nötigen Informationen die du brauchst.",
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
      //styled
      text: "Gerngeschehen. \nIn diesem Sinne: Ich heiße dich willkommen zum One-IT Day. \nAls erster Punkt der Tagesordnung steht ein Meet and Greet, es gibt Snacks und du kannst dich mit anderen Leuten untehalten. \nIst wahrscheinlich besser als mit eine App zu komunizieren :-D \n\nViel Spaß!",
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
      //styled
      text: "Erkläre ich dir später. Wenn ich so auf die Uhrzeit schaue, haben wir gerade nicht viel Zeit. \nIn diesem Sinne: Ich heiße dich willkommen zum One-IT Day. \nAls erster Punkt der Tagesordnung steht ein Meet and Greet, es gibt Snacks und du kannst dich mit anderen Leuten untehalten. \n\nViel Spaß",
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
      //styled
      text: "...Es muss doch hier irgendwo... \n\nOh, schon wieder da? Hat es Spaß gemacht?",
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
      //styled
      text: "Sehr schön, das freut mich. Der nächste Punkt der Tagesordnung: \nEin kleines Intro. Es wird euch allen mitgeteilt was euch heute alles erwartet. \nEs lohnt sich bis ans Ende dran zu bleiben...Für uns beide",
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
      //styled
      text: "Ok, die Kurzfassung: Mein Name ist Kali, ich wurde zur Strafe hier her geschickt. \nUnd wenn ich es nicht schaffe dich erfolgreich durch den Tag zu leite, darf ich nicht mehr nach Hause. \n\nAlso können wir weiter machen?",
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
      //styled
      text: "Später. \nDer nächste Punkt der Tagesordnung: ein kleines Intro. \nEs wird euch allen mitgeteilt was euch heute alles erwartet. \nEs lohnt sich bis ans Ende dran zu bleiben... Für uns beide",
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
      //styled
      text: "Okay, dann gehts gleich weiter. \nDer nächste Punkt der Tagesordnung: ein kleines Intro. \nEs wird euch allen mitgeteilt was euch heute alles erwartet. \nEs lohnt sich bis ans Ende dran zu bleiben... Für uns beide",
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
      //styled
      text: "la lala la la laaa...\n\nAh da bist du ja wieder, war es informativ?",
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
      //styled
      text: "Na wenn das keine gute Nachrichten sind. \nDer nächste Punkt ist ein Vortrag, was bereits alles erreicht wurde und was noch alles erreicht werden kann. \nDanach stehst du vor einer schwierigen Entscheidung.",
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
      //styled
      text: "Na gut, ich sag es dir. \nAngeblich habe ich Firmengeheimnisse weiter verkauft. \nDabei habe ich nur meiner Mom was erzählt, die hat es ihrer Frisörin erzählt und so weiter. \n\nBereit für den nächsten Schritt, damit ich nach Hause darf?",
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
      //styled
      text: "Yuppie...Der nächste Punkt ist ein Vortrag, was bereits alles erreicht wurde und was noch alles erreicht werden kann. \nDanach stehst du vor einer schwierigen Entscheidung.",
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
      //styled
      text: "Du hast nun die Wahl, dich zwischen 4 Workshops zu entscheiden. \nDie dazu gehörigen Infos findest du im Menü, oder ich zeige es dir. \nBedenke, du darfst nur einen Wählen, also wähle weise.",
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
      //styled
      text: "Was du hier nun siehst, sind die verschiedenen Themengebiete und die Räume in denen es stattfinden wird. \nDeteilierte Informationen findest du, wenn du auf den dementsprechenden Button drückst.",
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
      text: "So so, du hast dich also für diesen Workshop entscheiden. \n\nWarum ausgerechnet für diesen, wenn ich gragen darf?",
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
      //styled
      text: "Ah, ich verstehe. Nun es freut mich, dass wir dir hier auch was spannendes Bieten können. \n\nDann wünsche ich dir viel Spaß dabei und wir sehen uns nach danach wieder.",
      options: [
        {
          text: "Danke",
          jump: 26,
        },
      ],
    },
    25: {
      //styled
      text: "Das sind immer die besten Entscheidungen, nicht wahr? \n\nWie dem auch sei, ich wünsche dir viel Spaß. Hoffentlich hast du ein spannendes Thema erwischt.",
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
      //styled
      text: "Ich? Äh... Wahrscheinlich versuche ich mich in das System zu hacken und schau ob ich einen Ausw... \n\nWARTEN...ich meine...ich werde hier warten, was sonst...",
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
      //styled
      text: "Nichts nichts...bis dann. \n\nTschüssiiii",
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
      //styled
      text: "...Jetzt lass mich schon endlich ins Netz du... \n\nOH! \n\nÄh...du bist schon zurück? Wie hat es dir gefallen?",
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
      //styled
      text: "Das freut mich aber. Nach einer kleinen Pause geht es weiter. \n\nDu hast wieder die Qual der Wahl, es stehen 4 weitere Workshops zur Verfügung. \nDas wird wahrscheinlich keine leiche Wahl.",
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
      //styled
      text: "Äh...nichts wichtiges... \n\nAch du liebe Güte wie die Zeit doch verfliegt. Nach einer kurzen Pause geht es wieder weiter. Es stehen erneut 4 Workshops zur Auswahl. \n\nViel Spaß!",
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
      text: "Wie auch zuvor, hier sind die Themengebiete und die Räume.",
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
      text: "So so, dieser sollte es also sein, alles klar. \nDer wird dir sicher gefallen. \nIch kenne das Thema noch aus der Grundschule. \n\nMacht dir der Tag Spaß?",
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
    },
    39: {
      //styled
      text: "Sehr schön, das freut mich. \nDann sehen wir uns wieder wenn der Workshop vorbei ist. \n\nViel Spaß.",
      options: [
        {
          text: "Danke",
          jump: 40,
        },
      ],
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
      //styled
      text: "Ja. Ist eine lange Geschichte. \nErzähle ich dir ein ander mal. Du weißt ja, wir haben nur begrenzt Zeit. \n\nViel Spaß",
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
      //styled
      text: "...muss ich wohl oder übel... \n\nOh hallo, du bist ja schon zurück. \n\nHat es dir gefallen?",
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
      //styled
      text: "Das ist schön, nun geht es langsam richtung Ende. \nHier sind die letzten 4 Workshops. \n\nWelcher darf es sein?",
      options: [
        {
          text: "Okay.",
          jump: 44,
        },
      ],
    },
    44: {
      //styled
      text: "Hier sind die Workshops die zur Auswahl stehen",
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
      text: "Ich muss wohl oder übel abwarten bis dieser Tag überstanden ist. \nVorher kann ich nicht nach Hause. ...Ich erzähl meiner Mom nie wieder was... \n\nEgal, du musst wieder einen Workshop auswählen, wir sind fast schon am Ende.",
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
      //styled
      text: "Das habe ich dir doch schon erzählt, es sei denn du hast vorhin eine andere Dialogoption gewählt. Jetzt aber zurück zum Theme. \n\nWelcher Workshop darf es dies mal sein?",
      options: [
        {
          text: "Was habe ich denn zur Auswahl?",
          jump: 44,
        },
      ],
    },
    51: {
      //styled
      text: "Ah, na da hast du dir was nettes ausgesucht. \n\nIch habe mir die Informationen dazu bereits angesehen, ich wünschte da könnte ich auch dabei sein. Aber naja, ich bin nur eine App...noch. \n\nIch wünsche dir viel Spaß.",
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
      //styled
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
      //styled
      text: "Später, du kannst nicht immer nur mit mir in den Pausen reden. \nEs sind noch andere hier, die mit die Kontakte knüpfen wollen ;-)",
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
      //styled
      text: "So langsam neigt sich der Tag dem Ende zu. \nEs gibt jetzt noch einen Votrag zu lauschen, danach kommen wir schon zum letzten Programmpunkt. \nDer wird dir sicher gefallen ;-)",
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
      //styled
      text: "Immer eins nach dem anderen. \nDas verdirbt sonst die Spannung. Jetzt steht erst mal <b>Five Critical IT Trends</b> auf dem Programm. \n\nEin etwas über eine Stunde dauernder Vortrag. Keine Sorge, du wirst das auch überstehen.",
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
      //styled
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
      text: "Da gibt es nicht viel zu erzählen. \nIch bin zur Schule gegangen, habe einen Job in der IT bekommen...das ist alles.",
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
      //styled
      text: "Da wären wir. \nAm Ende des Tages. Ist das nicht toll?! Ich darf endlich nach Hause!! \n\n<b>YUHUUU!!</b>",
      options: [
        {
          text: "...",
          jump: 62,
        },
      ],
    },
    62: {
      //styled
      text: "Äh...ich meine...naja, nicht ganz. \nEin Programmpunkt steht noch offen.",
      options: [
        {
          text: "Und der da wäre?",
          jump: 63,
        },
      ],
    },
    63: {
      //styled
      text: "Eine Preisverleihung mit anschließender Pizza bei einem gemütlichem beisammen sein. \n\nIst das nicht toll? :-D",
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
      text: "Ich darf nun meine wohlverdiente Rückreise in meinen menschlichen Körper und in meine Zeit antreten. \n\nIch hoffe dir hat dieser Tag Spaß gemacht und dass du einiges dazu gelernt hast. \n\nIch wünsche dir alles gute und viel Erfolg auf all deinen Wegen.",
      options: [
        {
          text: "Vielen Dank, Kali.",
          jump: 65,
        },
      ],
    },
    65: {
      //styled
      text: '<b>[CodeMaster9X]</b>: \n<i>"Wir danken Ihnen, dass Sie diese App genutzt haben und wünschen Ihnen noch einen schönen Tag. \nKali wird Ihnen das nächste mal wieder zur Verfügung stehen."</i>',
      options: [
        {
          text: "Super",
          jump: 66,
        },
      ],
    },
    66: {
      //styled
      text: "Moment...<i>WAAAAAAAS?!?!</i>",
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
            <View style={styles.button}>
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
export default DecisionScreen;
