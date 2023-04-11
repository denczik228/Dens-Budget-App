import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateBudget } from '../redux/features/expensesSlice';

export const Budget = () => {
  const { budget } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (e) => {
    setNewBudget(e.target.value);
  }

  const handleSaveClick = () => {
    dispatch(updateBudget(newBudget));
    setIsEditing(false);
  }

  const handleEditClick = () => {
    setIsEditing(true);
  }

  return (
    <div className="bg-gray-300 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <>
            <input
              type="number"
              value={newBudget}
              onChange={handleBudgetChange}
              className="border-2 py-1 border-gray-400 w-1/2 leading-none rounded-lg"
            />
            <button
              className="bg-green-500 text-white py-1 px-2 rounded-lg"
              onClick={handleSaveClick}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <span className="font-light">Budget: ${budget}</span>
            <button
              className="bg-blue-500 text-white py-1 px-2 rounded-lg"
              type="button"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
}
