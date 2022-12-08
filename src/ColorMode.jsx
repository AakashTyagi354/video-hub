import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import {FaMoon,FaSun} from 'react-icons/fa'
const ColorMode = (props) => {
    const {toggleColorMode}= useColorMode();
    const text = useColorModeValue('dark','light');
    const SwitchIcon = useColorModeValue(FaMoon,FaSun);

  return (
    <IconButton
    variant="ghost"
    zIndex={'overlay'}
    color="current"
    pos={'fixed'}
    top={'4'}
    right={'4'}
    onClick={toggleColorMode}
    icon={<SwitchIcon/>}
    {...props}
    />
  )
}

export default ColorMode