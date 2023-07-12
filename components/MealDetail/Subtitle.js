import { View, Text, StyleSheet } from "react-native";
function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;
const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b597",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b597",
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
