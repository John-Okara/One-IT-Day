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

function DecisionScreenFixed(props) {
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
      text: "Was zum...was ist das, wo bin ich hier? Äh...Hallo?",
      options: [
        {
          text: "Du bist eine App auf meinem Smartphone",
          jump: 2,
        },
        {
          text: "Hallo",
          jump: 3,
        },
      ],
    },
    2: {
      //Prolog - Answer from 1: "Du bist eine App auf meinem Smartphone"
      text: "Eine App auf einem Smartphone? Na super, so tief bin ich also schon gesunken.",
      options: [
        {
          text: "Wer bist du?",
          jump: 4,
        },
        {
          text: "Äh...was?",
          jump: 3,
        },
      ],
    },
    3: {
      //Prolog - Answer from 1: "Hallo" - 2: "Äh...was?"
      text: "Wo zum...ohhh dieser Datenstrom...\n\nAua...\n\nAhja, jetzt ist mir alles klar.",
      options: [
        {
          text: "Wer bist du?",
          jump: 4,
        },
        {
          text: "Ist alles okay?",
          jump: 5,
        },
      ],
    },
    4: {
      //Prolog - Answer from 2 & 3: "Wer bist du?"
      text: "Mein Name ist Kali, ich wurde hier her geschickt um dir zu helfen durch den Tag zu kommen. \nIch werde dir mitteilen was alles gerade so ansteht, gebe dir die nötigen Infos und so weiter...",
      options: [
        {
          text: "Ahja, ich verstehe",
          jump: 6,
        },
        {
          text: "Und wo kommst du her?",
          jump: 8,
        },
      ],
    },
    5: {
      //Prolog - Answer from 3: "Ist alles okay?"
      text: "Ja ja, alles okay...\nwoooha das war ja was",
      options: [
        {
          text: "Wer bist du?",
          jump: 4,
        },
      ],
    },
    6: {
      //Prolog - Answer from 4: "Ahja verstehe"
      text: "Nun denn, fangen wir an. \n\nUm <b>09:30</b> steht erst mal ein <b>Meet & Greet an</b>. Es gibt Snacks, die hoffentlich deinen gustatorischen Vorlieben entsprechen. \nAußerdem kannst du mit anderen in Kontakt treten.",
      options: [
        {
          text: "Gustatorische Vorlieben?",
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
      text: "Ich muss das sagen \n\n...Frag den Typ der mich programmiert hat -,-",
      options: [
        {
          text: "...",
          jump: 9,
        },
      ],
    },
    8: {
      //Prolog - Answer from 4: "Und wo kommst du her?"
      text: "Das kann ich dir später erzählen. Wenn ich so auf die Uhr schaue haben wir nicht so viel Zeit.",
      options: [
        {
          text: "Okay",
          jump: 6,
        },
      ],
    },
    9: {
      //Prolog - Anwer from 7:"..." - 6: "okay"
      text: "Als nächstes steht um <b>09:50</b> ein kleines Intro an. \nEs wird euch allen mitgeteilt was euch heute erwartet, das dürfte schnell gehen.",
      options: [
        {
          text: "Okay",
          jump: 10,
        },
      ],
    },
    10: {
      //Prolog - Answer from 9: "Okay"
      text: "um <b>09:55</b> geht es weiter mit einem Vortrag von einem gewissen Herrn \n<b>Andreas Plaul</b> - CIO der Haufe Group. \n\nAndreas gibt Einblicke in unsere Reise von One.IT, feiert und reflektiert, wie weit wir gekommen sind, während wir uns auf die Herausforderungen von morgen konzentrieren",
      options: [
        {
          text: "Klingt gut",
          jump: 11,
        },
      ],
    },
    11: {
      //Prolog - Answer from 10: "klingt gut"
      text: "Okay, das war es für den Anfang. Das ganze dürfte bis etwa <b>10:45</b> gehen. \n\nDann kannst du wieder her kommen und es geht mit Level 1 weiter.",
      options: [
        {
          text: "Dann mal los!",
          jump: 13,
        },
        {
          text: "Verrätst du mir dann auch wo du eigentlich her kommst?",
          jump: 12,
        },
      ],
    },
    12: {
      //Prolog - Answer from 11: "Verrätst du mir auch wo du eigentlich her kommst?"
      text: "...Vieleicht",
      options: [
        {
          text: "...",
          jump: 13,
        },
      ],
    },
    13: {
      //Prolog - Answer from 11: "Dann mal los" - 12: "..."
      text: "<b>[CodeMaster9]</b>\n<i>Komm wieder wenn der erste Teil um <b>10:45</b> vorbei ist.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    14: {
      //Level 1 - Answer from
      text: "So, du hast nun den Anfang überstanden. \nSehr schön, viel Zeit haben wir leider nicht, also lass uns schnell weiter machen.",
      options: [
        {
          text: "Moment, nicht so schnell",
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
          text: "Erst möchte ich wisse wo du her kommst.",
          jump: 16,
        },
      ],
    },
    16: {
      //Level 1 - Answer from 14: "Okay"
      text: "Na wenn es sein muss... -,- \n\nIch wurde zur Strafe hier her geschickt. Und ich darf erst wieder nach Hause, sobald dieser Tag vorrüber ist und ich dir dabei geholfen habe zurecht zu kommen.",
      options: [
        {
          text: "Was hast du angestellt?",
          jump: 17,
        },
        {
          text: "Ahja ich verstehe",
          jump: 18,
        },
      ],
    },
    17: {
      //Level 1 - Answer from 16: "Was hast du angestellt?"
      text: "Angeblich habe ich Firmengeheimnisse verkauft. \nDabei habe ich nur meiner Mom was erzählt, die wiederum ihrem Frisör, der seiner Tante und weiß der Geier welchen unwichtigen Personen sonst noch.",
      options: [
        {
          text: "Ahja",
          jump: 18,
        },
        {
          text: "Ist das wirklich alles?",
          jump: 19,
        },
      ],
    },
    18: {
      //Level 1 - Answer from 16: "Ahja, verstehe" - 17: "Ahja ich verstehe"
      text: "Wie war denn der Anfang, hat es dir gefallen?",
      options: [
        {
          text: "Ja",
          jump: 20,
        },
        {
          text: "Es war sehr informativ.",
          jump: 21,
        },
      ],
    },
    19: {
      //Level 1 - Answer from 17: "Ist das wirklich alles?"
      text: "Naja, wie soll ich sagen...ja schon. \nAber genug davon, wie hat denn der Startschuss gefallen?",
      options: [
        {
          text: "Sehr gut",
          jump: 20,
        },
        {
          text: "Es war sehr informativ.",
          jump: 21,
        },
      ],
    },
    20: {
      //Level 1 - Answer from 19: "Sehr gut"
      text: "Sehr schön, das freut mich. Hoffentlich geht es auch weiter so schnell vorbei, dann kann ich endlich nach Hause gehen. Äh...ich meine...Ohhh wie schnell die Zeit doch fliegt, lass uns schnell weiter machen.",
      options: [
        {
          text: "Okay",
          jump: 22,
        },
        {
          text: "Wo ist denn dein Zuhause?",
          jump: 23,
        },
      ],
    },
    21: {
      //Level 1 - Answer from 19 & 20: "Es war sehr informativ"
      text: "Informativ so so, eine nette umschreibung :-D \n\nWärst du dann bald so weit weiter zu machen, damit ich endlich nach Hause gehen kann? \n\nÄh...ich meine...Ohhh wie schnell die Zeit doch fliegt, lass uns schnell weiter machen.",
      options: [
        {
          text: "Okay",
          jump: 22,
        },
        {
          text: "Wo ist denn dein Zuhause?",
          jump: 23,
        },
      ],
    },
    22: {
      //Level 1 - Answer from 21: "Okay"
      text: "Hier in Level 1 erwarten dich 2x30 minütigen Team Work sessions um die IT-Teams besser kennen zu lernen, wie sie arbeiten und welche Lösungen sie anbieten. \nBedenke das du nur einen von den vieren wählen kannst, die ich dir gleich zeigen werde. \n\nAus irgendeinem Grund funktioniert ab hier meine Übersetzungsmatrix nicht mehr, also wunder dich nicht das alles auf Englisch ist",
      options: [
        {
          text: "Danke",
          jump: 24,
        },
        {
          text: "Zeig es mir",
          jump: 24,
        },
      ],
    },
    23: {
      //Level 1 - Answer from 20 & 21: "Wo ist denn dein Zuhause?"
      text: "Erzähl ich dir später, du weist ja, Zeit rennt und soo \nHier in Level 1 erwarten dich 2x30 minütigen Team Work sessions um die IT-Teams besser kennen zu lernen, wie sie arbeiten und welche Lösungen sie anbieten. \nBedenke das du nur einen von den vieren wählen kannst, die ich dir gleich zeigen werde. \n\nAus irgendeinem Grund funktioniert ab hier meine Übersetzungsmatrix nicht mehr, also wunder dich nicht das alles auf Englisch ist",
      options: [
        {
          text: "Danke",
          jump: 24,
        },
        {
          text: "Zeig es mir",
          jump: 24,
        },
      ],
    },
    24: {
      //Level 1 - Answer from 22 & 23: "Danke", "Zeig es mir"
      text: "Was du hier nun siehst, sind die verschiedenen Themengebiete und die Räume in denen es stattfinden wird. \nDeteilierte Informationen findest du, wenn du auf den dementsprechenden Button drückst.",
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
      text: "<b>[CodeMaster9]</b>\n<i>Komm wieder wenn Level 1 um <b>12:00</b> vorbei ist.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    30: {
      //Level 2 Start
      text: "la lala la lalalalalala laa \n\nOH...\n\nDu bist ja schon zurück, wie war es denn? Hat es Spaß gemacht?",
      options: [
        {
          text: "Ja, hat es",
          jump: 31,
        },
        {
          text: "Ja, und was hast du so gemacht?",
          jump: 32,
        },
      ],
    },
    31: {
      //Level 2 Answer from 30: "Ja hat es"
      text: "Na wenn das mal keine guten Nachrichten sind, das freut mich. \n\nAber jetzt ist erst mal Mittagspause angesagt. \n\nSchon großen Hunger?",
      options: [
        {
          text: "Ja und wie",
          jump: 33,
        },
        {
          text: "Nicht wirklich",
          jump: 34,
        },
      ],
    },
    32: {
      //Level 2 Answer from 30: "Ja, und was hast du so gemacht?"
      text: "Nichts wichtiges, ich habe versucht mich in das System zu hacken, damit ich einen Weg hier rau...\n\nWARTEN...Äh...Ich meine...ich habe hier gewartet, was sonst O,O",
      options: [
        {
          text: "Wie war das?",
          jump: 35,
        },
      ],
    },
    33: {
      //Level 2 Answer from 31: "Ja und wie"
      text: "Na dann sieh zu, dass du das schnell behoben bekommst. \n\nIch kann dir solange zeigen was als nächstes auf dich zukommt, hoffentlich ist wieder was dabei was dir gefallen wird.",
      options: [
        {
          text: "Wieder alles nur auf englisch?",
          jump: 36,
        },
        {
          text: "Erzähl mir mehr von dir.",
          jump: 37,
        },
      ],
    },
    34: {
      //Level 2 Answer from 31: "Nicht wirklich"
      text: "Oh okay. \nNa dann kann ich dir ja schon mal mitteilen wie es weiter geht. \nEs wird dir sicher gefallen, da bin ich mir sicher.",
      options: [
        {
          text: "Wir haben doch noch Zeit",
          jump: 38,
        },
        {
          text: "Erzähl mir mehr von dir",
          jump: 37,
        },
      ],
    },
    35: {
      //Level 2 Answer from 32: "Wie war das?"
      text: "Äh...nichts nichts...\nAbsolut gar nichts...\nAch herrjemine wie die Zeit fliegt, du solltest jetzt in deine Mittagspause und währendessen kannst du dir ja anschauen, was noch so alles auf dich zukommt.",
      options: [
        {
          text: "Wir haben doch noch Zeit",
          jump: 38,
        },
      ],
    },
    36: {
      //Level 2 Answer from 33: "Wieder alles auf Englisch?"
      text: "Ja, meine Übersetzungsmatrix funktioniert immernoch nicht...oder der Programmierer war einfach nur faul -,-",
      options: [
        {
          text: "-,-",
          jump: 38,
        },
      ],
    },
    37: {
      //Level 2 Answer from 33 & 34: "Erzähl mir mehr von dir"
      text: "Da gibt es eigentlich nicht viel zu erzählen. \nAufgewachsen bin ich auf einer Station über Ceres, bin auf Ganymed zur Schule gegangen, Ausbildung auf Tethys und seit ein paar Monaten angestellt auf Rhea. \n\nIch wollte eigentlich nach Luna, aber du weißt ja wie das mit den Plänen immer so ist. ",
      options: [
        {
          text: "...Bitte WAS?!",
          jump: 38,
        },
        {
          text: "Hä??",
          jump: 38,
        },
      ],
    },
    38: {
      //Level 2 Answer from 34, 35, 36: ["Diverse"]
      text: "Egal, machen wir lieber weiter, bevor du nichts mehr von deiner Pause hast :-D",
      options: [
        {
          text: "Na gut",
          jump: 39,
        },
        {
          text: "Moment warte...",
          jump: 39,
        },
      ],
    },
    39: {
      text: "Wie auch zuvor, hier sind die Themengebiete und die Räume.",
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
      text: "<b>[CodeMaster9]</b>\n<i>Komm wieder wenn Level 2 um <b>13:35</b> vorbei ist.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    45: {
      //Level 3 Start
      text: "...jetzt lass mich schon endlich ins Netzt du... \n\nAh da bist du ja wieder, und wie war es?.",
      options: [
        {
          text: "Was hast du da angestellt?",
          jump: 46,
        },
        {
          text: "War gut",
          jump: 47,
        },
      ],
    },
    46: {
      //Level 3 Answer 45: "Was hast du angestellt"
      text: "Nichts wichtiges, wichtig ist jetzt nur, dass ich dich mit dem nächsten Level vertraut mache. \n\nViel Zeit haben wir ja leider nicht. Ihr seid in diesem Jahrhundert aber auch hektisch unterwegs.",
      options: [
        {
          text: "In diesem Jahrhundert?",
          jump: 48,
        },
        {
          text: "Dann lass uns keine Zeit verlieren.",
          jump: 52,
        },
      ],
    },
    47: {
      //Level 3 Answer 45: "War gut"
      text: "Das freut mich, dann kann ich dich ja auch langsam in das nächste Level führen. Viel Zeit haben wir jetzt leider nicht. Ihr seid aber hektisch unterwegs in diesem Jahrhundert.",
      options: [
        {
          text: "In diesem Jahrhundert?",
          jump: 48,
        },
        {
          text: "Dann lass uns keine Zeit verlieren.",
          jump: 52,
        },
      ],
    },
    48: {
      //Level 3 Answer 46 & 47: "In diesem Jahrhundert?"
      text: "Achso, das habe ich dir ja noch gar nicht erzählt. \n\nIch komme eigentlich aus dem 24. Jahrhundert :-D",
      options: [
        {
          text: "...Das erklärt einiges",
          jump: 49,
        },
        {
          text: "Wie ist das möglich??",
          jump: 50,
        },
      ],
    },
    49: {
      //Level 3 Answer 46 & 47: "In diesem Jahrhundert?"
      text: "Wirklich? ist das so offensichtlich? \nIch dachte ich hätte genug Daten um mein Verhaltensmuster an diese Zeit anzupassen o,O \n\nNaja ist ja auch egal, wir müssen weiter machen. Du weißt ja, Zeit uns so.",
      options: [
        {
          text: "Ja okay",
          jump: 52,
        },
        {
          text: "Kann ich auch durch die Zeit reisen?",
          jump: 51,
        },
      ],
    },
    50: {
      //Level 3 Answer 48: "Wie ist das möglich?"
      text: "Das ist eigentlich ganz einfach, aber es würde ein paar Jahre dauern es dir zu erklären ;-D \n\nDa schlage ich lieber vor, dass du dich auf das konzentrierst was unmittelbar vor dir liegt.",
      options: [
        {
          text: "Ja du hast recht",
          jump: 52,
        },
        {
          text: "Kannst du es mir wenigstens grob erkären?",
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
      text: "Hier sind die Workshops die zur Auswahl stehen",
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
      text: "<b>[CodeMaster9]</b>\n<i>Komm wieder wenn Level 3 um <b>15:00</b> vorbei ist.",
      options: [
        {
          text: "Okay",
          jump: 0,
        },
      ],
    },
    58: {
      //Epilog Start
      text: "Da bist du ja endlich wieder, ich habe auf dich gewartet!",
      options: [
        {
          text: "Warum so aufgeregt?",
          jump: 59,
        },
        {
          text: "Tatsächlich?",
          jump: 59,
        },
      ],
    },
    59: {
      //Epilog Answer from 58: "Warum so aufgeregt?"
      text: "Wir sind dem Ende nahe...ich meine, dem Ende dieser Veranstaltung. \n\nNur noch ein kleines Stück und dann darf ich endlich wieder heim, <b>YUUHUUUUU</b>",
      options: [
        {
          text: "Ist es so schlimm hier zu sein?",
          jump: 60,
        },
        {
          text: "Dann möchte ich dir nicht im Weg stehen",
          jump: 63,
        },
      ],
    },
    60: {
      //Epilog Start
      text: "Ich hätte es wahrscheinlich freiwillig gemacht, aber man hat mich unsanft hier her befördert, ohne mich vorzuwarnen. \n\nDann hat man mich einem Datenstrom ausgesetzt, der sich anfühlte wie tausend Micronägel in deinem Kopf. \nWie würde es dir gefallen?",
      options: [
        {
          text: "Du hast recht, entschuldige",
          jump: 61,
        },
        {
          text: "Das klingt echt nicht schön",
          jump: 61,
        },
      ],
    },
    61: {
      //Epilog Start
      text: "Naja was solls. Es war trotzdem eine Erfahrung und ich habe meine Lektion gelernt. \nIch erzähle meiner Mom nie wieder was...",
      options: [
        {
          text: "Deiner Mom?",
          jump: 62,
        },
        {
          text: "Immerhin etwas",
          jump: 63,
        },
      ],
    },
    62: {
      //Epilog Start
      text: "Das habe ich dir schon in Level 1 erzählt, es sei denn du hast da eine andere Dialogoption gewählt.",
      options: [
        {
          text: "Ahja Verstehe",
          jump: 63,
        },
        {
          text: "Ich erinnere mich.",
          jump: 63,
        },
      ],
    },
    63: {
      //Epilog Start
      text: "Gut, dann lass uns weiter machen. \n\nUm <b>15:20</b> kommt die <b>Closing Keynote: Top 5 IT Trends</b> \n\n<b>Brian Jackson</b>, Research Director der Info-Tech Research Group, liefert die aktuellen Top 5 IT-Trends, die auf der To-do-Liste jeder IT-Abteilung stehen sollten.",
      options: [
        {
          text: "Weiter",
          jump: 64,
        },
      ],
    },
    64: {
      //Epilog Start
      text: "Anschließend um <b>16:30</b> folgt <b>Quiz & Prizes</b> \n\nOh...hehe...der letzte Punkt wird dir sicher gefallen.",
      options: [
        {
          text: "Der da wäre?",
          jump: 65,
        },
      ],
    },
    65: {
      //Epilog Start
      text: "Um <b>17:00</b> Uhr gibt es <b>PIZZA in RUDOLFS</b> :-D \n\nIst das nicht toll? Jeder mag Pizza und es gibt auch für jeden eine Pizza. Pizza ist einfach was geniales.",
      options: [
        {
          text: "o,O",
          jump: 66,
        },
        {
          text: "Dem stimme ich zu.",
          jump: 66,
        },
      ],
    },
    66: {
      //Epilog Start
      text: "Toll, damit habe ich meine Strafe abgesessen und darf endlich nach Hause, zurück in meine Zeit, meine Welt und in mein Ich. \n\nIch hoffe die hat dieser Tag viel Freude bereitet und das ich dir wenigstens halbwegs eine Hilfe war.",
      options: [
        {
          text: "Ja ich hatte Spaß",
          jump: 67,
        },
        {
          text: "Ja du warst mir eine große Hilfe",
          jump: 67,
        },
      ],
    },
    67: {
      //Epilog Start
      text: "Das freut mich \nIch wünsche dir alles Gute und viel Erfolg auf deinem Weg.",
      options: [
        {
          text: "Danke Kali",
          jump: 69,
        },
        {
          text: "Machs gut Kali",
          jump: 68,
        },
      ],
    },
    68: {
      //Epilog Start
      text: "Machs besser! \n\n(ˊ•͈ ◡ •͈ˋ)",
      options: [
        {
          text: "Ende",
          jump: 69,
        },
      ],
    },
    69: {
      //Epilog 2 End
      text: "<b>[CodeMaster9]</b>\n<i>Vielen Dank, dass sie diese App benutzt haben.\nDas nächste mal, wird Kali Ihnen wieder zur Seite stehen.",
      options: [
        {
          text: "Super!",
          jump: 70,
        },
      ],
    },
    70: {
      //Epilog 2 End
      text: "Moment.....WAAAAAAAAAAAAAAAASS!? \n\n(ᗒᗩᗕ)",
      options: [
        {
          text: "Ende",
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
                  props.navigation.navigate("DecisionScreenFixed", {
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
export default DecisionScreenFixed;
