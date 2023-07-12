import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.continer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
export default ExpensesSummary;
const styles = StyleSheet.create({
  continer: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  period: {
    color: GlobalStyles.colors.primary400,
    fontSize: 16,
  },
  sum: {
    color: GlobalStyles.colors.primary500,
    fontSize: 18,
    fontWeight: "bold",
  },
});
