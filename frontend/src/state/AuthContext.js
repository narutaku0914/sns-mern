import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  user: {
    _id: "632851a4da4037c85875f77f",
    username: "narutaku",
    email: "test@gmail.com",
    password: "passw@rd",
    profilePicture: "/person/1.jpeg",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
