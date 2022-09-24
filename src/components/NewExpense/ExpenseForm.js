import React , {useId, useState} from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {

  const [userInput,setUserInput] = useState({
    title :"",
    amount :"",
    date : ""
  });
  const onChangeHandler = (event) => {
    setUserInput((oldUserInput)=>({...oldUserInput,
      [event.target.name]:event.target.value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title : userInput.title,
      amount : userInput.amount,
      date : new Date(userInput.date),
    }
    props.returnedForm(newExpense);
    userInput.amount='';
    userInput.date='';
    userInput.title='';
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
        <label>Title</label>
        <input type="text" name='title' value={userInput.title} onChange={onChangeHandler} required/>
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type="number" name='amount' value={userInput.amount} min="0.1" step="0.1" onChange={onChangeHandler} required/>
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" name='date' value={userInput.date} min="2019-01-01" max="2022-12-31" onChange={onChangeHandler} required/>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick = {props.hideForm} >Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
      </div>
    </form>
  )
}
