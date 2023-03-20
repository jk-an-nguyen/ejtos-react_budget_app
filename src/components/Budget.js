import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX = 20000;

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const enterBudgetHanler = (e) =>{
        var inputValue = e.target.value;

        if (inputValue < totalExpenses){
            alert("The value cannot be lower than the expenses value" + currency + totalExpenses);
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses,
            });

        } else if (inputValue > BUDGET_MAX){
            alert("This value cannot exceed the fund of " + currency + BUDGET_MAX);
            dispatch({
                type: 'SET_BUDGET',
                payload: BUDGET_MAX,
            });
        } else{
            dispatch({
                type: 'SET_BUDGET',
                payload: inputValue,
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency}</label>
            <input required="required"
            type="number"
            id='budget'
            value={budget}
            step="10"
            onChange={enterBudgetHanler}></input>
        </div>
    );
};
export default Budget;