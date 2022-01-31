import React, { createContext, useState } from "react";
import api from "../services/api";
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

  const signIn = async (formData: LoginProps) => {
    try {
      // setar isLoading para true antes da requisicao api.
      setState((prev) => ({ ...prev, isLoading: true }));

      let request = await api.post("/auth/login", formData);

      if (request.data.status === 200) {
        const { local_id, firstName, lastName, email } = request.data.user;
        let user = { id: local_id, firstName, lastName, email };
        console.log(user);

        setState((prev) => ({
          ...prev,
          ...user,
          isLoading: false,
          isLogged: true,
        }));

        return { status: 200, message: "Login realizado com sucesso" };
      } else {
        setState((prev) => ({ ...prev, isLoading: false }));
        console.log("entrou aqui!");
        return { status: 400, message: "Houve um erro ao fazer login" };
      }
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      return {
        status: 400,
        message:
          "Houve um erro ao realizar o login. Por favor, verifique suas credenciais e tente novamente.",
      };
    }
  };

  const signUp = async (formData: IFormData): Promise<any> => {
    setState((prev) => ({ ...prev, isLoading: true }));

    let request = await api.post("/auth/signup", formData);

    if (request.data.status === 200) {
      const { local_id, firstName, lastName, email } = request.data.user;
      let user = { id: local_id, firstName, lastName, email };

      setState((prev) => ({
        ...prev,
        ...user,
        isLoading: false,
        isLogged: true,
      }));

      return { status: 200, message: "Conta criada com sucesso" };
    } else {
      setState((prev) => ({ ...prev, isLoading: false }));
      return { status: 400, message: "Houve um erro ao criar a conta" };
    }
  };

  return (
    <AppContext.Provider value={{ state, signIn, signUp }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
