import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const tools = [
  {
    img: "https://avatars.githubusercontent.com/u/8908513?s=280&v=4",
    title: "Cypress",
  },
  {
    img: "https://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png",
    title: "NPM",
  },
  {
    img: "https://sayan1portfolio.netlify.app/assets/git-icon.d59a2cfd.svg",
    title: "git",
  },
];

const Tools = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const color = useColorModeValue("white", "blackAlpha.700");

  return (
    <Box
      w={["90%", "80%"]}
      m="auto"
      my={14}
      mt="100px"
      name="skill"
      h={["auto", "60vh"]}
    >
      <Heading mb={10} color="#F5C32C" textAlign="center">
        Tools
      </Heading>
      <SimpleGrid
        columns={[2, 3, 4, 5, 6, 7]}
        spacing={5}
        my={14}
        color={color}
      >
        {tools.map((el) => (
          <Box
            bg="#BEE3F8"
            key={el.title}
            data-aos="zoom-in"
            textAlign="center"
            p={[3, 5]}
            rounded="xl"
            _hover={{
              bg: "gray.300",
              color: { color },
              boxShadow: "xl",
              transform: "scale(1.125)",
            }}
          >
            <Center>
              <Image h="80px" src={el.img} alt="logo" />
            </Center>
            <Text fontWeight={"500"} mt={4}>
              {el.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Tools;
