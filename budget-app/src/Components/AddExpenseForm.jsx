import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addExpenses } from '../redux/features/expensesSlice';

export const AddExpenseForm = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
  
    const dispatch = useDispatch();
    
    const onSubmit = (e) => {
      e.preventDefault();

      const expense = {
        id: uuidv4(),
        name: name,
        cost: parseInt(cost),
      };
        
      dispatch(addExpenses(expense))
      setName("");
      setCost("");
    }

    return (
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-white font-medium text-gray-700"
            >
              Name
            </label>
            <input
              required="required"
              type="text"
              className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="cost"
              className="block text-sm text-white font-medium text-gray-700"
            >
              Cost
            </label>
            <input
              required="required"
              type="text"
              className="mt-1 h-8 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    );
}
