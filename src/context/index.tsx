import React, { createContext, useState } from "react";
import { AppContextProps } from "./types";

const AppContext = createContext<AppContextProps | null | any>(null);

const INITIAL_VALUES: AppContextProps = {
  isLogged: false,
  firstName: "",
  lastName: "",
  email: "",
};

const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AppContextProps>(INITIAL_VALUES);

  /**
   * Make login in application
   */
  const signIn = () => {
    setState((prev) => ({ ...prev, isLogged: true }));
  };

  return (
    <AppContext.Provider value={{ state, signIn }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
