import { SET_USER } from "../actions/actionTypes";

const LocalUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const INITIAL_STATE = LocalUser() ;

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      action.payload?localStorage.setItem("user", JSON.stringify(action.payload)): localStorage.setItem("user", null)
      return  action.payload ;
    default:
      return state;
  }
};

export default userReducer;
