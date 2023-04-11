import React from 'react'
import { useSelector } from "react-redux";

export const Total = () => {

  const { expenses } = useSelector((state) => state.expenses);
  
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost)
  }, 0);

  return (
    <div className="bg-blue-500 rounded-lg font-light text-white py-4 px-6">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
}
