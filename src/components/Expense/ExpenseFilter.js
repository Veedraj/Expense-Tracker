import React , {useState} from 'react';
import './ExpenseFilter.css';

export default function ExpenseFilter(props) {
  const changeYear = (event) => {    
    props.setYear(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter By Year</label>
        <select value={props.settedYear} onChange={changeYear}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
        </div>
    </div>
  )
}
