import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, image, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={image} color={color} size={24} />
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
