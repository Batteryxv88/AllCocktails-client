import { RootActionsType } from '../rootActionsTypes';
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defaultState, action: any) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
}

export const setUser = (user: any) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });

//////////////////////////////////////////////////////////

// import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

// export interface State {
//   currentUser: any,
//   isAuth: boolean
// }

// const userSlice = createSlice({
//   name: 'userSlice',
//   initialState: {
//     currentUser: {},
//    isAuth: false,
//   } as State,

//   reducers: {
//     setUser: (state, action: PayloadAction) => {
//       state.currentUser = action.payload.user,
//       state.isAuth = true
//     }
//   }
// })

// export default userSlice.reducer
// export const { setUser } = userSlice.actions
