import React, { useContext } from "react";

import { Menu, ItemMenu } from "./navbar.styles";

import { Box, Button } from "@chakra-ui/react";
import {
  Menu as MenuChakra,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon, QuestionOutlineIcon } from "@chakra-ui/icons";

import { AppContext } from "../../context";

export default function Navbar() {
  const { state } = useContext(AppContext);

  return (
    <Box
      bgColor="white.100"
      padding={2}
      borderRadius={5}
      alignItems="center"
      justifyContent="center"
      display="flex"
      margin={5}
    >
      <Menu>
        <ItemMenu>
          <Button variant="link">Início</Button>
        </ItemMenu>
        <ItemMenu>
          <Button variant="link" leftIcon={<QuestionOutlineIcon />}>
            Sobre
          </Button>
        </ItemMenu>
        <ItemMenu>
          <Button variant="link">GitHub</Button>
        </ItemMenu>
        <ItemMenu>
          <MenuChakra>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {state.firstName}
            </MenuButton>
            <MenuList>
              <MenuItem fontWeight="bold">Sair</MenuItem>
            </MenuList>
          </MenuChakra>
        </ItemMenu>
      </Menu>
    </Box>
  );
}
