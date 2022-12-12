import { Box, Flex, IconButton, Link, SimpleGrid, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#2B547E', 'black')
    const color = useColorModeValue('white', 'white')

    return (
        <Box bg={bg}>
            <Flex w="80%" margin="auto" justifyContent="space-around" p="10px" flexWrap="wrap">
                <Flex alignItems={"center"} gap="10px" color={color} mt={4} >
                    <IconButton size='sm' _focus={{ outline: "none" }} icon={<FaPhone fontSize="22px" color='blue' />} />
                    <Link href="tel:6201138922">
                        <Text textDecoration={"underline"}>+91 8817661895</Text>
                    </Link>
                </Flex>
                <Flex alignItems={"center"} gap="10px" color={color} mt={4} >
                    <IconButton size='sm' colorScheme='gray' _focus={{ outline: "none" }} icon={<EmailIcon fontSize="25px" color='blue' />} />

                    <Link href='mailto:vk14133m02059@gmail.com'>
                        <Text textDecoration={"underline"}>vk14133m02059@gmail.com</Text>
                    </Link>
                </Flex>

                <Flex alignItems={"center"} gap="10px" color={color} mt={4} >
                    <IconButton size='sm' color={color} _focus={{ outline: "none" }} icon={<FaGithub fontSize="25px" color='blue' />} />

                    <Link href='https://github.com/VK14133M02' isExternal >
                        <Text textDecoration={"underline"}>Github Profile</Text>
                    </Link>
                </Flex>


                <Flex alignItems={"center"} gap="10px" color={color} mt={4} >

                    <IconButton size='sm' _focus={{ outline: "none" }} icon={<FaLinkedin fontSize="25px" color='blue' />} />

                    <Link href="https://www.linkedin.com/in/vikram-kumar850/" isExternal >
                        <Text textDecoration={"underline"} >LinkedIn Profile</Text>
                    </Link>

                </Flex>
            </Flex>
            <Flex h="80px" color={color} textAlign="center" justify="center" align="center">
                <Text>Designed & Build by Vikram Kumar, 2022 All rights reserved.</Text>
            </Flex>
        </Box>
    )
}

export default Footer
