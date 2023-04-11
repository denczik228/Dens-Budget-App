import React from 'react'
import { useSelector } from 'react-redux'

export const Remaining = () => {
  const { expenses, budget } = useSelector((state) => state.expenses);
  
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

const alertType = totalExpenses > budget ? "bg-red-500" : "bg-green-500";
const textColor = totalExpenses > budget ? "text-white" : "text-black";

  return (
    <div className={`py-4 px-6 font-light rounded-lg ${alertType} ${textColor}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
}
