import React, { useEffect } from 'react'
import { FaGithub, FaLink } from "react-icons/fa"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text, SimpleGrid, Box, Flex, Button, IconButton, color, Link, Image, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react"
import Aos from 'aos';
import 'aos/dist/aos.css';
import Apple1 from "../Img/Apple_Tv+/Apple_Tv+_Navbar.png"
import Apple2 from "../Img/Apple_Tv+/Apple_Tv+_Category.png"
import Apple3 from "../Img/Apple_Tv+/Apple_Tv+_Video.png"
import Apple4 from "../Img/Apple_Tv+/Apple_Tv+_Footer.png"
import Apple5 from "../Img/Apple_Tv+/Apple_Tv+_Signin.png"
import Apple6 from "../Img/Apple_Tv+/Apple_Tv+_Signup.png"


import chakra from "../Img/techstack/chakra.png"
import rct_router from "../Img/techstack/rct_router.png"
import node from "../Img/techstack/nodeJs.png"
import js from "../Img/techstack/js.png"
import html from "../Img/techstack/html.png"
import css from "../Img/techstack/css.png"
import rct from "../Img/techstack/react.png"
import redux from "../Img/techstack/redux.png"
import firebase from "../Img/techstack/firebase.png"

import rack1 from "../Img/Rack/N_Rack_Navbar.png"
import rack2 from "../Img/Rack/N_Rack_Home.png"
import rack3 from "../Img/Rack/N_Rack_Womens.png"
import rack4 from "../Img/Rack/N_Rack_Product.png"
import rack5 from "../Img/Rack/N_Rack_Cart.png"
import rack6 from "../Img/Rack/N_Rack_Register.png"

import indigogo1 from "../Img/Indigogo/Indigogo_Top_Slider.png"
import indigogo2 from "../Img/Indigogo/Indigogo_4_Big_Box.png"
import indigogo3 from "../Img/Indigogo/Indigogo_Category.png"
import indigogo4 from "../Img/Indigogo/Indigogo_Home.png"

import myHours1 from "../Img/My_Hours/myHours_Navbar&Header.png"
import myHours2 from "../Img/My_Hours/myHours_Organition.png"
import myHours3 from "../Img/My_Hours/myHours_Footer.png"
import myHours4 from "../Img/My_Hours/myHours_Register.png"
import myHours5 from "../Img/My_Hours/myHours_Signup.png"
import myHours6 from "../Img/My_Hours/myHours_Signin.png"



const Projects = () => {


  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  const bg = useColorModeValue('#2B547E', 'black')
  const color = useColorModeValue('white', 'black')

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Box my={10} name="project">
      <Heading m="auto" color="#F5C32C" textAlign="center">MY PROJECTS</Heading>

        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={bg}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={Apple1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={Apple2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={Apple3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={Apple4} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={Apple5} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={Apple6} />
                </div>
                
              </Carousel>
              <Flex justify="space-between" gap={1} m="auto" mt={5}>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={rct} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={redux} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={chakra} />
                </Box>                             
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image h={["15px", "20px", "20px", "30px"]} src={node} />
                </Box>

              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color="#F5C32C"
                fontWeight='semibold'
                font>
                Apple Tv+.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="#F5C32C">About Project</Text>
              <div>
                <Text color="white">Apple Tv+ is an OTT platform where you can watch Hollywood web series & tv shows.</Text>
              </div>
              <Text fontSize={"large"} color="white">It is a individual project.</Text>
              <Text fontSize={"x-large"} color="#F5C32C">Role</Text>
              <Text fontSize={"large"} color="white">I created HomePage, Signup & Login page , user can play the video. I cloned it in 5 Day's. I named it RiVic Tv & i desined a logo for it</Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://rivik-tv.netlify.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/VK14133M02/-graceful-lunch-5485" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>


        {/* ################### Nordstromrack ###################### */}
        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={bg}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={rack1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={rack2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={rack3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={rack4} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={rack5} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={rack6} />
                </div>                
              </Carousel>
              <Flex justify="center" gap={5} m="auto" my={5}>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>                                            
              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color={'#F5C32C'}
                fontWeight='semibold'
                font>
                nordstromrack.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="#F5C32C">About Project</Text>
              <div>
                <Text color="white">This is an e-commerce website named NORDSTROM rack. Users can search for products, view product details, and add products to the cart.</Text>
              </div>
              <Text fontSize={"large"} color="white">It is an group project.</Text>
              <Text fontSize={"x-large"} color="#F5C32C">Role</Text>
              <Text fontSize={"large"} color="white">I created all category page, such as kids section , womens section , mens section. product page , where you can add to card. </Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://superb-alfajores-ceed5f.netlify.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/gunjankuthe111/Nordstromrack.com" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>


        {/* ######################### Indigogo ########################  */}

        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={bg}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={indigogo1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={indigogo2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={indigogo3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={indigogo4} />
                </div>                
              </Carousel>
              <Flex justify="center" gap={5} m="auto" my={5}>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>                                           
              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color={'#F5C32C'}
                fontWeight='semibold'
                font>
                Netmeds.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="#F5C32C">About Project</Text>
              <div>
                <Text color="white">Indiegogo is an American crowdfunding website. Indiegogo allows people to solicit funds for an idea, charity, or start-up business. </Text>
              </div>
              <Text fontSize={"large"} color="white">It is an indivisual project.</Text>
              <Text fontSize={"x-large"} color="#F5C32C">Role</Text>
              <Text fontSize={"large"} color="white">I created Home Page, slider , text on background image. i cloned it in 4 day's</Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://exquisite-douhua-e9fc71.netlify.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/VK14133M02/daily-wound-486/tree/main/Home_Page" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>

        {/* ################# myHours #####################  */}

        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={bg}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={myHours1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={myHours2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={myHours3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={myHours4} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={myHours5} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={myHours6} />
                </div>
              </Carousel>
              <Flex justify="center" gap={5} m="auto" my={5}>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid #F5C32C" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>                                                
              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color={'#F5C32C'}
                fontWeight='semibold'
                font>
                myhours.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="#F5C32C">About Project</Text>
              <div>
                <Text color="white">myHours is a project tracking website where you can track your group project , what is the work progress , how much time time to complete the project, budget of the project.</Text>
              </div>
              <Text fontSize={"large"} color="white">It is an indivisual project.</Text>
              <Text fontSize={"x-large"} color="#F5C32C">Role</Text>
              <Text fontSize={"large"} color="white">I created Navbar, Home page , Register & Login page , Footer. </Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://taupe-selkie-12eb45.netlify.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/VK14133M02/gold-kick-1985" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>
      </Box>
    </>
  )
}



export default Projects
