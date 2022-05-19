import React, { useState } from 'react';
import ExpensesList from './ExpList';
// import ExpenseItem from './ExpItem';
import Card from '../UI/Card';
import './Exp.css';
import ExpensesFilter from './ExpFilter';
import ExpenseChart from './ExpChart';
const Exp = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExp = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExp}/>
        <ExpensesList items ={filteredExp}/>
      </Card>
    </div>
  );
};


export default Exp;