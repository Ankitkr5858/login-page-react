import {
    USER_LOADED,
    AUTH_ERROR,
    LOG_OUT,
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    FETCH_EMPLOYEE_REQUEST,
    FETCH_EMPLOYEE_SUCCESS,
    FETCH_EMPLOYEE_FAIL
  } from "../const";
  import { employees } from "../../data/data";
  
  const initialState = {
    isAuthenticated: null,
    loading: true,
    employees: null,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
      case FETCH_EMPLOYEE_REQUEST:
        return {
          ...state,
          isAuthenticated: false,
          loading: false,
          user: payload,
        };
      case LOG_IN_SUCCESS:

        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case FETCH_EMPLOYEE_SUCCESS:
            return {
              ...state,
              employees: employees.user,
              loading: false,
            };
      case AUTH_ERROR:
      case LOG_OUT:
      case LOG_IN_FAIL:
      case FETCH_EMPLOYEE_FAIL:
        return {
          ...state,
          loading: false,
          user: null,
        };
      default:
        return state;
    }
  }