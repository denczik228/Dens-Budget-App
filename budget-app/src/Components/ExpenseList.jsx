import React,{useEffect, useState} from 'react'
import { ExpenseItem } from './ExpenseItem';
import { useSelector, useDispatch } from 'react-redux';
import { setExpenses } from '../redux/features/expensesSlice';

export const ExpenseList = () => {
  const { expenses } = useSelector((state)=>state.expenses);
  const dispatch = useDispatch();
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      dispatch(setExpenses(JSON.parse(savedExpenses)));
    }
  }, [dispatch]);

  window.onbeforeunload = () => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <input
          type="text"
          className="border border-gray-300 rounded py-2 px-4 w-full mr-2 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Type to search..."
          onChange={handleChange}
        />
      </div>
      <ul className="list-group">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
}
