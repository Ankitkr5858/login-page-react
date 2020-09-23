import {
    REGISTER_SUCCESS,
    USER_LOADED,
    LOG_OUT,
    LOG_IN_FAIL,
    LOG_IN_SUCCESS,
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAIL
  } from "../const";
  import { setAlert } from "./alert";
  import {user } from "../../data/data";
  
  export const logout = () => (dispatch) => {
    dispatch({
      type: LOG_OUT,
    });
  };
  export const login = (body) => (dispatch) => {
    dispatch({
      type:  USER_LOADED,
    });
    
    const { email, password } = body;
    try {

        if(user.username === email && user.password === password ){
            dispatch({
                type: LOG_IN_SUCCESS,
            });
            dispatch(setAlert('Welcome to our dashboard.', "success"));
        }else
            dispatch(setAlert("Something is wrong. Sorry, you can't sign in.", "error"));
     
    } catch (error) {
      dispatch({
        type: LOG_IN_FAIL,
      });
      dispatch(setAlert("Something is wrong. Sorry, you can't sign in.", "error"));
    }
  };
  //register user
  export const loadUser = (decoded) => {
    return {
      type: REGISTER_SUCCESS,
      payload: decoded,
    };
  };

  export const loadEmployee = () => (dispatch) => {
    dispatch({
      type:  FETCH_EMPLOYEE_REQUEST,
    });
    try {
      
      dispatch({
        type: FETCH_EMPLOYEE_SUCCESS,
      });
     
    } catch (error) {
      dispatch({
        type: FETCH_EMPLOYEE_FAIL,
      });
      dispatch(setAlert("We can't fetch the employees' list.", "error"));
    }
  };