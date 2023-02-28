import {
  background,
  border,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import profile from "../Img/vikram_profile.jpg";
import back from "../Img/background1.png";
import Styles from "../Components/navbar.module.css";
import resume from "../Img/Vikram_Kumar_Resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { DownloadIcon } from "@chakra-ui/icons";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.200", "#210070");
  const color = useColorModeValue("white", "black");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className={Styles.drawer}>
        <Center bg={bg} h="110vh" name="home" pt={10}>
          <Box w="90vw" m="auto" mt={20}>
            <SimpleGrid w="90%" m="auto">
              <Box position="relative">
                <Image h="250px" w="320px" src={back} />
                <Image
                  src={profile}
                  w="240px"
                  borderRadius="5px"
                  position="absolute"
                  h="250px"
                  top={["5", "6", "7", "8"]}
                  left={5}
                />
              </Box>
              <Box mt={12}>
                <Text fontSize="2xl" fontWeight="bold">
                  Hello, my name is
                </Text>
                <Heading my={2} size="2xl">
                  Vikram Kumar
                </Heading>
                <Text fontSize="xl" fontWeight="bold">
                  I'm a
                  <span style={{ color: "#F5C32c" }}>
                    {" "}
                    <Typed
                      strings={[
                        "Full Stack Web Developer.",
                        "MERN Stack Developer.",
                      ]}
                      typeSpeed={80}
                      loop
                      backSpeed={80}
                    />{" "}
                  </span>{" "}
                </Text>
                <a href={resume} download>
                  <Button
                    rightIcon={<DownloadIcon />}
                    mt={5}
                    fontWeight="bold"
                    fontSize="20px"
                    width="fit-content"
                    color="white"
                    bg="#F5C32c"
                    _hover={{
                      variant: "outline",
                      color: "#F5C32c",
                      bg: "white",
                      border: "2px solid #F5c32c",
                    }}
                  >
                    Resume
                  </Button>
                </a>
              </Box>
            </SimpleGrid>
          </Box>
        </Center>
      </div>
      <div className={Styles.nav}>
        <>
          {/* bg="#210070" */}
          <Box bg={bg} name="homea" borderTop="1px solid gray">
            <Box w="90%" m="auto" p={5} h="90vh" mt="120px">
              <Flex
                justify="space-between"
                w="100%"
                margin="auto"
                gap="10%"
                p={10}
                mt={10}
              >
                <Flex
                  ml={10}
                  w="50%"
                  flexDir="column"
                  justify="center"
                  data-aos="zoom-in"
                >
                  <Text
                    fontSize={["xl", "2xl", "3xl", "4xl"]}
                    fontWeight="bold"
                  >
                    Hello, my name is
                  </Text>
                  <Heading my={3} size={["xl", "2xl", "3xl", "4xl"]}>
                    Vikram Kumar
                  </Heading>
                  <Text
                    fontSize={["xl", "2xl", "3xl", "4xl"]}
                    fontWeight="bold"
                  >
                    I'm a{" "}
                    <span style={{ color: "#F5C32c" }}>
                      {" "}
                      <Typed
                        strings={[
                          "Full Stack Web Developer",
                          "MERN Stack Developer",
                        ]}
                        typeSpeed={80}
                        loop
                        backSpeed={80}
                      />
                    </span>{" "}
                  </Text>

                  <a href={resume} download>
                    <Button
                      rightIcon={<DownloadIcon />}
                      mt={5}
                      fontWeight="bold"
                      fontSize="20px"
                      width="fit-content"
                      color="white"
                      bg="#F5C32c"
                      _hover={{
                        variant: "outline",
                        color: "#F5C32c",
                        bg: "white",
                        border: "2px solid #F5c32c",
                      }}
                    >
                      Resume
                    </Button>
                  </a>
                </Flex>
                <Flex w="40%" position="relative" data-aos="zoom-in">
                  <Image
                    h={["100px", "150px", "200px", "340px"]}
                    w={["200px", "250px", "300px", "400px"]}
                    src={back}
                  />
                  <Image
                    src={profile}
                    w={["100px", "150px", "200px", "340px"]}
                    borderRadius="20%"
                    position="absolute"
                    h={["100px", "150px", "200px", "340px"]}
                    top={["5", "6", "7", "8"]}
                    left={5}
                  />
                </Flex>
              </Flex>
            </Box>
          </Box>
          <Box position="fixed" bottom="20px" left="10px">
            <a href="https://github.com/VK14133M02" target="blank">
              <Image
                w="55px"
                my={2}
                bg="#F5C32c"
                borderRadius="50%"
                p={2}
                _hover={{
                  variant: "outline",
                  color: "#F5C32c",
                  bg: "white",
                  border: "2px solid #F5c32c",
                }}
                src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
              />
            </a>
            <Link to="contact" offset={-200} spy={true} smooth={true}>
              <Image
                w="55px"
                my={2}
                bg="#F5C32c"
                borderRadius="50%"
                p={2}
                _hover={{
                  variant: "outline",
                  color: "#F5C32c",
                  bg: "white",
                  border: "2px solid #F5c32c",
                }}
                src="https://ceistorvergata.it/public/images/icon/email.png"
              />
            </Link>
            <a
              href="https://www.linkedin.com/in/vikram-kumar850/"
              target="blank"
            >
              <Image
                w="55px"
                my={2}
                bg="#F5C32c"
                p={2}
                borderRadius="50%"
                _hover={{
                  variant: "outline",
                  color: "#F5C32c",
                  bg: "white",
                  border: "2px solid #F5c32c",
                }}
                src="https://img.icons8.com/ios/2x/linkedin-circled.png"
              />
            </a>
          </Box>
        </>
      </div>
    </div>
  );
};

export default Home;
