import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const color = useColorModeValue("blackAlpha.700", "white");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Box my={10} data-aos="zoom-in" mt="180px" name="about">
        <Heading m="auto" color="#F5C32C" textAlign="center">
          About Me
        </Heading>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          spacing={10}
          w="80%"
          m="auto"
          mt={20}
        >
          <Box>
            <Image
              maxH="350px"
              src="https://d1mwexcsjeyerr.cloudfront.net/images/meanstack/side-img-2.png"
            />
          </Box>
          <Box>
            <ul>
              <li>
                <Text color={color} fontSize="18px">
                  Hello! My name is Vikram Kumar and I am a Passionate
                  Developer, with strong administrative and problem solving
                  skills. I have ability to write efficient code using MERN
                  Stack.
                </Text>
              </li>
              <li>
                <Text color={color} fontSize="18px" mt={5}>
                  I love working on new and exciting technologies emerging
                  nowadays.
                </Text>
              </li>
              <li>
                <Text color={color} fontSize="18px" mt={5}>
                  Looking forward to applying and enhancing my skills and
                  knowledge as a developer.
                </Text>
              </li>
            </ul>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default About;
