import axios from 'axios';
//import { setUser } from '../state/user/userReducer';
import { setUser } from '../state/user/userReducer';
import { Dispatch } from '@reduxjs/toolkit';
//const dispatch = useDispatch()


export const registration = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/auth/registration',
      {
        username,
        password,
      }
    );
    console.log(response.data.message);
  } catch (e: any) {
    alert(e.response.data.message);
  }
};


export const login =  (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
      try {
          const response = await axios.post('http://localhost:3001/auth/login', {
              username,
              password,
          })
          dispatch(setUser(response.data.user))
          localStorage.setItem('token', response.data.token)
      } catch (e: any) {
          console.log(e.response.data.message)
      }
  }
}
