import React, { createContext, useState } from "react";
import { LoginProps } from "../views/LoginView/LoginView";
import { IFormData } from "../views/SignUpView/SignUpView";
import { AppContextProps } from "./types";

const AppContext = createContext<AppContextProps | any>(null);

const INITIAL_VALUES: AppContextProps = {
  isLoading: false,
  isLogged: false,
  firstName: "",
  lastName: "",
  email: "",
};

const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AppContextProps>(INITIAL_VALUES);

  const signIn = (formData: LoginProps) => {
    // setar isLoading para true antes da requisicao api.
    setState((prev) => ({ ...prev, isLogged: true }));
  };

  const signUp = (formData: IFormData) => {
    // setar isLoading para true antes da requisicao api.
    console.log(formData);
    setState((prev) => ({ ...prev, isLogged: true }));
  };

  return (
    <AppContext.Provider value={{ state, signIn, signUp }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
