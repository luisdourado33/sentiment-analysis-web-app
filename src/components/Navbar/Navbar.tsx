import React from 'react'

import { Menu, ItemMenu } from './navbar.styles';

import {Box, Button} from '@chakra-ui/react';
import { QuestionOutlineIcon } from '@chakra-ui/icons'

export default function Navbar() {
  return (
    <Box
      bgColor='white.100'
      padding={2}
      borderRadius={5}
      alignItems='center'
      justifyContent='center'
      display='flex'
      margin={5}
    >
      <Menu>
        <ItemMenu>
          <Button variant='link'>Início</Button>
        </ItemMenu>
        <ItemMenu>
          <Button variant='link' leftIcon={<QuestionOutlineIcon />}>Sobre</Button>
        </ItemMenu>
        <ItemMenu>
          <Button variant='link'>GitHub</Button>
        </ItemMenu>
      </Menu>
    </Box>
  )
}
