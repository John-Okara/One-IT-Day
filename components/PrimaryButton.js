// Custom reusable button component
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Colors from "../assets/constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    // inner and outer containers to control effects and handling. inner controls ripple with conditional styling.
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        } // std prop "pressed" passed into react: if true then array of styles otherwise just inner container.
        // onPress prop to pass up to StartGameScreen to add handling
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#20206b",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "AldrichRegular",
    fontSize: 24,
  },
});
