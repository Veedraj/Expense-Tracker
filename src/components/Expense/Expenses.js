import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2022");

  const userSetYear = (data) => {
    setFilterYear(data);
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <ExpenseFilter settedYear={filterYear} setYear={userSetYear} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </div>
  );
}
