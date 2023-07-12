import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ onPress, name, color, size }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.continer}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  continer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.4,
  },
});
