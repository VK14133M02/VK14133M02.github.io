import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DrawerNav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const bg = useColorModeValue("#2B547E", "black");
  const color = useColorModeValue("white", "black");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <Flex
        justify="space-between"
        p={5}
        bg={bg}
        position="fixed"
        w="100%"
        zIndex="5"
      >
        <Heading color="#1bc6ed">
          V<span className="yellow">K</span>
        </Heading>
        <Flex align={"center"}>
          <Button
            ref={btnRef}
            color="white"
            variant="outline"
            _hover={{
              background: "white",
              color: "teal.500",
            }}
            onClick={onOpen}
          >
            <FaBars />
          </Button>
          <IconButton
            bg={isDark ? "black" : "white"}
            size="sm"
            m={2}
            onClick={toggleColorMode}
            icon={
              isDark ? (
                <FaSun color="yellow" fontSize="20px" />
              ) : (
                <FaMoon color="black" />
              )
            }
          />
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton border="3px solid teal" />

          <DrawerBody bg={"gray.200"}>
            <Flex justify="center" align="center" flexDir="column">
              <Link
                to="home"
                onClick={onClose}
                offset={-80}
                spy={true}
                smooth={true}
              >
                <Text
                  fontSize={25}
                  fontWeight="bold"
                  lineHeight="60px"
                  color={"blackAlpha.700"}
                  _hover={{
                    bg: "lightskyblue",
                    px: "10px",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  HOME
                </Text>
              </Link>
              <Link
                to="about"
                onClick={onClose}
                offset={-300}
                spy={true}
                smooth={true}
              >
                <Text
                  fontSize={25}
                  fontWeight="bold"
                  lineHeight="60px"
                  color={"blackAlpha.700"}
                  _hover={{
                    bg: "lightskyblue",
                    px: "10px",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  ABOUT
                </Text>
              </Link>
              <Link
                to="project"
                onClick={onClose}
                offset={-120}
                spy={true}
                smooth={true}
              >
                <Text
                  fontSize={25}
                  fontWeight="bold"
                  lineHeight="60px"
                  color={"blackAlpha.700"}
                  _hover={{
                    bg: "lightskyblue",
                    px: "10px",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  PROJECTS
                </Text>
              </Link>
              <Link
                to="skill"
                offset={-100}
                onClick={onClose}
                spy={true}
                smooth={true}
              >
                <Text
                  fontSize={25}
                  fontWeight="bold"
                  lineHeight="60px"
                  color={"blackAlpha.700"}
                  _hover={{
                    bg: "lightskyblue",
                    px: "10px",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  SKILLS
                </Text>
              </Link>
              <Link
                to="contact"
                offset={-190}
                onClick={onClose}
                spy={true}
                smooth={true}
              >
                <Text
                  fontSize={25}
                  fontWeight="bold"
                  lineHeight="60px"
                  color={"blackAlpha.700"}
                  _hover={{
                    bg: "lightskyblue",
                    px: "10px",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  CONTACTS
                </Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
