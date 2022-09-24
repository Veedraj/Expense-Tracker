import ExpenseItem from './components/Expense/ExpenseItem'
import Expenses from './components/Expense/Expenses';
import './components/Expense/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {title:"Car",amount:200,date:new Date(2022,7,20)},
  {title:"Bike",amount:100,date:new Date(2022,9,20)},
  {title:"Car Insuarance",amount:20,date:new Date(2022,7,21)},
  {title:"Bike Insuarance",amount:20,date:new Date(2022,9,21)}
];

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  
  const addNewExpense = (newExpense) => {
    setExpenses(previousExpenses => {return[newExpense,...previousExpenses];});
  }
  
  return(
    <div>
      <NewExpense NewExpense={addNewExpense}/>
      <div className='expenses'>
    <Expenses items={expenses}/>
    </div>
    </div>
  );
}

export default App;
