import React ,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const newForm = (data) => {
    const form = {
      ...data,
      id: Math.random().toString(),
    };
    props.NewExpense(form);
  };
  const [form,showForm] = useState(false);
  const showFormHandler = (event) => {
    event.preventDefault();
    showForm(true);
  }
  const hideFormHandler = (event) => {
    event.preventDefault();
    showForm(false);
  }
  return (
    <div className="new-expense">
      {!form && <button onClick={showFormHandler}>Add Expense</button>}
      {form && <ExpenseForm returnedForm={newForm} hideForm={hideFormHandler}/>}
    </div>
  );
}
