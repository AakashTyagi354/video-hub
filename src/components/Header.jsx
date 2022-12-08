import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
const Header = () => {
    const {isOpen,onOpen,onClose} = useDisclosure()

  return (
    <>
    
      <Button
      zIndex={'overlay'}
        pos={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        p={"0"}
        w={10}
        h={10}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>video hub</DrawerHeader>
            <DrawerBody>
                <VStack alignItems={"flex-start"}>
                    <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/home"}>Home</Link>
                    </Button>

                    <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/videos"}>Videos</Link>
                    </Button>

                    <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/videos?cat=free"}>Free Videos</Link>
                    </Button>

                    <Button onClick={onClose} colorScheme={"purple"} variant={"ghost"}>
                        <Link to={"/upload"}>upload video</Link>
                    </Button>
                </VStack>

                <HStack pos={"absolute"} bottom={"10"} left={"0"} width={"full"} justifyContent={'space-evenly'}>
                   <Button colorScheme={"purple"} onClick={onClose}>
                    <Link to={"/login"}>Log In</Link>
                   </Button>
                   <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}>
                    <Link to={"/signup"}>Sign Up</Link>
                   </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
