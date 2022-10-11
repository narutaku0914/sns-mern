import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
};
