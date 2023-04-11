import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { checkIsAuth, logout } from '../redux/features/authSlice';
import { toast } from 'react-toastify'
 
export const Navbar = () => {
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeStyles = {
        color:'white',
  }

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    window.localStorage.removeItem("expenses");
    navigate('/login')
    toast("You have successfully logged out!");
  }
  
  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-32 h-6 bg-gray-500 text-sm text-white rounded-xl">
        Den's Budget App
      </span>

      {isAuth && (
        <ul className="flex">
          <li>
            <NavLink
              to={"/budget-app"}
              href="/budget-app"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              className=" text-sm no-underline text-gray-400 hover:text-red"
            >
              Budget Page
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-gray-500 w-22 h-6 text-sm text-white border-2 border-rose-500 rounded-xl px-4">
        {isAuth ? (
          <button onClick={logoutHandler}>Log Out</button>
        ) : (
          <Link className="text-white no-underline" to={"/login"}>
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}
