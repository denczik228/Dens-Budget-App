import React from 'react'

import { useDispatch } from "react-redux";
import { deleteExpenses } from "../redux/features/expensesSlice";

export const ExpenseItem = (props) => {
  const dispatch = useDispatch();
  
  const handleDeleteExpense = () => {
    dispatch(deleteExpenses(props.id));
  };
    return (
      <li class="flex justify-between items-center bg-white rounded-md shadow-md py-2 px-3 my-2">
        <span class="font-medium mr-auto">{props.name}</span>
        <div class="flex items-center">
          <span class="bg-blue-500 text-white rounded-md px-2 py-1 text-sm font-medium mr-3">
            $ {props.cost}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-700 transition duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleDeleteExpense}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </li>
    );
}
