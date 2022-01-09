import React, { useState, useCallback } from "react";

import { Container } from "./signup-view.styles";

import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export default function SignUpView(props: {
  hasAccount?: (has: boolean) => void;
}) {
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        <Heading as="h1" size="lg" mb={10}>
          Criar uma nova conta
        </Heading>
        <form>
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
          <FormControl mb={3}>
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
          <FormControl mb={3}>
            <FormLabel htmlFor="passwordRepeat">Confirmar senha</FormLabel>
            <InputGroup>
              <Input
                id="passwordRepeat"
                type={showPassword ? "text" : "password"}
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
          </FormControl>
          <FormControl mt={5} flex="1">
            <Button w="full" type="submit" colorScheme="purple">
              Criar nova conta
            </Button>
          </FormControl>
          <FormControl mt={2} flex="1">
            <Button
              w="full"
              type="button"
              colorScheme="purple"
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
