import { Text, View } from "react-native";
import ExpensesOutput from "../practiceComponant/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../storePractice/expenses-context";
import { useContext } from "react";
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
}
export default AllExpenses;
