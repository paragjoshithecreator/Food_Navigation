import { Text } from "react-native";
import ExpensesOutput from "../practiceComponant/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../storePractice/expenses-context";
import { useContext, useEffect, useState } from "react";
import { getDateMinusDays } from "../utility/date";
import { fetchExpense } from "../utility/http";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);

  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);
  //const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError("Could not fetch expense!");
      }
      setIsFetching(false);
      //setFetchedExpenses(expenses);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    //console.log("recent ", expensesCtx);
    //return expense.date > date7DaysAgo;
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expense registered for the last 7 days"
    />
  );
}
export default RecentExpenses;
