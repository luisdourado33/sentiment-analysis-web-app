import React, { useState, useCallback, useContext } from "react";

import { Container } from "./signup-view.styles";

import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Input,
  Button,
  Icon,
  Heading,
  Text
} from "@chakra-ui/react";
import { AppContext } from "../../context";

export interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export default function SignUpView(props: {
  hasAccount?: (has: boolean) => void;
}) {
  const { state, signUp } = useContext(AppContext);
  const [formData, setFormData] = useState<IFormData>({
    firstName: "Luís",
    lastName: "Dourado",
    email: "luis_dourado33@hotmail.com",
    password: "123123123",
    passwordRepeat: "123123123",
  });
  const [isInputInvalid, setIsInputInvalid] = useState<any>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setIsInputInvalid((prev: any) => ({
      ...prev,
      password: !(formData.password === formData.passwordRepeat),
    }));

    let hasInvalidInput = false;

    for (let entry in isInputInvalid) {
      if (isInputInvalid[entry] === true) hasInvalidInput = true;
    }
    
    if (!hasInvalidInput) {
      let request = await signUp(formData);
      console.log(request);
    }
  };

  const handleChangeInput = (
    input: string,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData((current) => ({ ...current, [input]: event.target.value }));
  };

  const handleChangeShowPassword = useCallback(() => {
    setShowPassword((current) => !current);
  }, []);

  const handleHasAccount = useCallback(() => {
    if (props.hasAccount) {
      props.hasAccount(true);
    }
  }, []);

  return (
    <Container>
      <Box
        bgColor="white"
        boxShadow="lg"
        p={30}
        h="fit-content"
        borderRadius={5}
      >
        <Heading mb={1} fontSize="lg" fontWeight="bold">
          Criar conta
        </Heading>
        <Text mb={5} fontSize="sm" textColor="gray.400" fontWeight="500">
          Preencha os dados abaixo para criar uma nova conta
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl mb={3}>
            <FormLabel htmlFor="firstName">Nome</FormLabel>
            <Input
              id="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => handleChangeInput("firstName", e)}
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel htmlFor="lastName">Sobrenome</FormLabel>
            <Input
              id="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => handleChangeInput("lastName", e)}
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChangeInput("email", e)}
            />
            <FormHelperText>
              Não compartilharemos seu e-mail com ninguém.
            </FormHelperText>
          </FormControl>
          <FormControl mb={3} isInvalid={isInputInvalid.password}>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <InputGroup>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) => handleChangeInput("password", e)}
              />
              <InputRightElement width="3rem">
                <Button h="1.5rem" size="sm" onClick={handleChangeShowPassword}>
                  {showPassword ? <Icon name="eye" /> : <Icon name="cog" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl mb={3} isInvalid={isInputInvalid.password}>
            <FormLabel htmlFor="passwordRepeat">Confirmar senha</FormLabel>
            <InputGroup>
              <Input
                id="passwordRepeat"
                type={showPassword ? "text" : "password"}
                isInvalid={isInputInvalid.password}
                required
                value={formData.passwordRepeat}
                onChange={(e) => handleChangeInput("passwordRepeat", e)}
              />
              <InputRightElement width="3rem">
                <Button h="1.5rem" size="sm" onClick={handleChangeShowPassword}>
                  {showPassword ? <Icon name="eye" /> : <Icon name="cog" />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {isInputInvalid.password && (
              <FormErrorMessage>As senhas não coincidem.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mt={5} flex="1">
            <Button
              w="full"
              type="submit"
              colorScheme="blue"
              isLoading={state.isLoading}
              disabled={state.isLoading}
            >
              Criar nova conta
            </Button>
          </FormControl>
          <FormControl mt={2} flex="1">
            <Button
              w="full"
              type="button"
              colorScheme="blue"
              variant="link"
              onClick={handleHasAccount}
            >
              Já possuo uma conta
            </Button>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}
