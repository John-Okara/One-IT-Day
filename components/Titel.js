// Custom reusable title component. White box on Game Screen
import {Text, StyleSheet} from "react-native";
import { View } from "react-native";
import Colors from "../../assets/constants/colors";

function Title({children}) {
    return <View style={styles.titleContainer}><Text style={styles.title}>{children}</Text></View>;

} 

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
    },
    title: {
        fontSize: 24,
        fontFamily:"open-sans-bold",
        color: Colors.plainWhite,
        borderColor: Colors.plainWhite,
        borderWidth: 2,         
        padding: 12,
        
    },
});