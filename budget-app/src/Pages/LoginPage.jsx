import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { checkIsAuth, loginUser } from '../redux/features/authSlice';

export const LoginPage = () => {
  const isAuth=useSelector(checkIsAuth)
  
  const [email, setEmail] = useState('')
  const [password, setPassword]=useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
   if (status) {
     toast(status);
   }
    if (isAuth) {
      navigate('/budget-app')
    }
  }, [status,isAuth, navigate]);

  const handleSubmit = async () => {
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  }
  
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="h-60 mx-auto mt-48 min-w-[25%] w-96"
    >
      <h1 className="text-lg text-white text-center">Authorization</h1>
      <label className="text-xs text-gray-400">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mt-1 text-black w-96 rounded-lg bg-gray-400 border-2 py-1 px-2 text-sm outline-none placeholder:text-gray-800"
        />
      </label>

      <label className="mt-1 text-xs text-gray-400">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-1 text-black w-96 rounded-lg bg-gray-400 border-2 py-1 px-2 text-sm outline-none placeholder:text-gray-800"
        />
      </label>
      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex whitespace-nowrap justify-center bg-green-600 items-center text-base text-white rounded-xl py-2 px-4"
        >
          Log In
        </button>
        <div className="inline-flex items-center">
          <span className="whitespace-nowrap text-gray-400">
            Don't have an account yet?
          </span>
          <Link
            to="/register"
            className="px-2 text-base whitespace-nowrap text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
