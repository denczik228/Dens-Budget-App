import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import { Budget } from './Components/Budget';
import { Remaining } from './Components/Remaining';
import { Total } from './Components/Total';
import { ExpenseList } from './Components/ExpenseList';
import { AddExpenseForm } from './Components/AddExpenseForm';

import { RegisterPage } from "./Pages/RegisterPage";
import { LoginPage } from "./Pages/LoginPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "./redux/features/authSlice";

import { Layout } from './Components/Layout';


function App() {
 const dispatch = useDispatch();
  const navigate = useNavigate();
  
 useEffect(() => {
   const isLoggedIn = dispatch(getMe());
   if (!isLoggedIn) {
     navigate("/login");
   }
 }, [dispatch, navigate]);

  return (
    <Layout>
      <Routes>
        <Route
          path="budget-app"
          element={
            <div className="container">
              <h1 className="mt-4 text-white">Den's Budget App</h1>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="col-span-1">
                  <Budget />
                </div>
                <div className="col-span-1">
                  <Remaining />
                </div>
                <div className="col-span-1">
                  <Total />
                </div>
              </div>
              <h3 className="mt-3 text-rose-400">Expenses</h3>
              <div className="grid grid-cols-1 mt-3">
                <div className="col-span-1">
                  <ExpenseList />
                </div>
              </div>
              <h3 className="mt-3 text-white">Add Expense</h3>
              <div className="mt-3">
                <div className="col-span-1">
                  <AddExpenseForm />
                </div>
              </div>
            </div>
          }
        />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="bottom-center" />
    </Layout>
  );
}

export default App;
