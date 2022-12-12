import { Box, Center, Heading, Image, SimpleGrid, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const skill = [
    {
        img: "https://sayan1portfolio.netlify.app/assets/html5.def2d6d2.svg",
        title: "HTML"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/css.106e7ff7.svg",
        title: "CSS"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/js-official.5cd82e09.svg",
        title: "JavaScript"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/react.35ef61ed.svg",
        title: "React"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/redux-logo-svgrepo.000deaac.svg",
        title: "Redux"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/chakraui.4a4caf4b.svg",
        title: "Chakra UI"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/material-ui.701cfef5.svg",
        title: "Material UI"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/bootstrap-4-logo.b296d117.svg",
        title: "Bootstrap"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/nodejs-1-logo.43b81cb7.svg",
        title: "Node JS"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/mongodb-logo.583c2bc4.svg",
        title: "MongoDB"
    },

    {
        img: "https://img.icons8.com/office/2x/express-js.png",
        title: "Express Js"
    },
    {
        img: "https://www.tomsquest.com/img/posts/2018-10-02-better-npm-ing/npm_logo.png",
        title: "NPM"
    },
    {
        img: "https://sayan1portfolio.netlify.app/assets/git-icon.d59a2cfd.svg",
        title: "git"
    }

]

const Skills = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    const color = useColorModeValue('white', "blackAlpha.700")

    return (
        <Box w={["90%", "80%"]} m="auto" my={14} mt="100px" name="skill" h={["auto", "60vh"]}>
            <Heading mb={10} color="#F5C32C" textAlign="center">My Technical Skills</Heading>
            <SimpleGrid columns={[2, 4, 5, 7,]} spacing={5} my={14} color={color}>
                {skill.map((el) =>
                    <Box bg="#BEE3F8" key={el.title} data-aos="zoom-in" textAlign="center" p={[3, 5]} rounded="xl" _hover={{ bg: "gray.300", color: { color }, boxShadow: 'xl', transform: "scale(1.125)" }}>

                        <Center>
                            <Image h="80px" src={el.img} alt="logo" />
                        </Center>
                        <Text fontWeight={"500"} mt={4}>{el.title}</Text>
                    </Box>
                )}
            </SimpleGrid>
        </Box>

    )
}

export default Skills
