import { View, FlatList, Text } from "react-native";
import ExpenseItem from "../ExpenseItem";
function ExpensesList({ expenses }) {
  function renderExpenses(itemData) {
    return <ExpenseItem {...itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenses}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
export default ExpensesList;
