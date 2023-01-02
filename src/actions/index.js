import {
  SET_USER,
} from "./actionTypes";


export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});




export const setUserAPI = (payload)=>{
  return dispatch =>{
    dispatch(setUser(payload))
  }
}


