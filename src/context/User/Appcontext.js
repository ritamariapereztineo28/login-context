// import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { initialState } from "./initialState";
import userReducer from "./userReducer";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppContext);
  return context;
}

export { useAppState, AppContextProvider };
