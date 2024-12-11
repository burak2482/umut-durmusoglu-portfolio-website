import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext.jsx';
import axios from 'axios'
import { useAuthContext } from './useAuthContext.js';

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(null)

  const { user, dispatch } = useAuthContext();


  const login = async (email, password) => {
    setisLoading(true)
    setError(null)

    console.log('Sending email:', email, 'Password:', password);
  
    const response = await axios.post('http://localhost:5000/user/login', {
      email,
      password,
    });
  
    console.log('API Response:', response.data);
  
    const json = response.data
  
    if (response.status >= 200 && response.status < 300) {
      if (json && json.token) {
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
      } else {
        setError('User data is incomplete');
      }
      setisLoading(false);
    } else {
      setisLoading(false);
      setError(json.error);
    }
  }
  

  return {login, isLoading, error}
}