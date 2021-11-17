import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id: "618f74792b8d1a38839729c0",
    username: "admin",
    email: "admin@gmail.com",
    profilePic: "",
    coverPic: "",
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

//creating a wrapper for a parent component to be able to give access to all child components
export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
        {children}
    </AuthContext.Provider>
  );
};
