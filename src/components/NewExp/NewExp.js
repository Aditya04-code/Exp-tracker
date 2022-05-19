import React ,{useState} from 'react';
import './Newexp.css';
import ExpForm from './ExpForm';
const NewExpense = (props) => {
    const [isEditing,setIsEditing]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
      setIsEditing(false);
    };
    const startediting =() =>{
        setIsEditing(true);
    };
    const stopediting =()=>{
        setIsEditing(false);
    };


  
    return (
      <div className='new-expense'>
            {!isEditing && <button onClick={startediting}>Add New Expense</button>}
            {!isEditing && <ExpForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopediting} />}
        </div>
    );
  };
  
  export default NewExpense;