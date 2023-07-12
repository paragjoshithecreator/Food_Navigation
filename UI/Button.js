import { View, Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/Styles";
function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Button;
const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: 100,
    height: 30,
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
  },
});
