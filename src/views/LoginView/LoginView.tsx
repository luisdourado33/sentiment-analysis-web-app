import React, { useState, useCallback } from "react";

import { Container } from "./login-view.styles";
import {
  Box,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";

import SignUpView from "../SignUpView/SignUpView";

interface LoginProps {
  email: string;
  password: string;
}

export default function LoginView() {
  const [formData, setFormData] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  const handleChangeInput = (
    input: string,
    event: any
  ): void => {
    setFormData((current) => ({ ...current, [input]: event.target.value }));
  };

  const handleChangeShowPassword = useCallback(() => {
    setShowPassword((current) => !current);
  }, []);

  const handleChangeIsSigningUp = useCallback(() => {
    setIsSigningUp((current) => !current);
  }, []);

  const LoginBox = () => {
    return (
      <Box
        bgColor="white"
        boxShadow="lg"
        p={15}
        h="fit-content"
        borderRadius={5}
      >
        <Heading size="lg" mb={5}>
          Acessar
        </Heading>
        <form>
          <FormControl mb={3}>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Ex: john.doe@email.com"
              required
              value={formData.email}
              onChange={(e) => handleChangeInput("email", e)}
            />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <InputGroup>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder='********'
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
          <FormControl mt={5} flex="1">
            <Button w="full" type="submit" colorScheme="blue" variant="solid">
              Entrar
            </Button>
          </FormControl>
          <FormControl
            mt={2}
            flex="1"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Button
              type="button"
              colorScheme="blue"
              variant="link"
              onClick={handleChangeIsSigningUp}
            >
              Registrar-se
            </Button>
          </FormControl>
        </form>
      </Box>
    );
  };

  if (isSigningUp) {
    return (
      <Container>
        <SignUpView hasAccount={() => setIsSigningUp(false)} />
      </Container>
    );
  }

  return (
    <Container>
      <LoginBox />
    </Container>
  );
}
