import React, { useState, useEffect } from "react";

import emailjs from "@emailjs/browser";
import { Box, Button, Heading, Image, Input, SimpleGrid, Textarea, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"
    const bg = useColorModeValue('gray.200', '#210070')
    const color = useColorModeValue('black', 'red')

    const [values, setValues] = useState({
        fullName: '',
        email: '',

        message: ''
    });
    const [status, setStatus] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_vd9bcyd', 'template_busulwl', values, 'J7ods_sXFuL8RnKNI')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    fullName: '',
                    email: '',
                    message: ''
                });
                setStatus('SUCCESS');
            }, error => {
                console.log('FAILED...', error);
            });
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 2000);
        }
    }, [status]);

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <Box bg={bg} p={["0px", "30px", "40px"]} name="contact" >
            <Heading my={10} pt={10} color="#F5C32C" textAlign="center">Get in Touch</Heading>

            <SimpleGrid columns={[1, 2]} gap={10} id="contact" width="80%" m="auto" my={14} >

                {/* left side copy and paste from work section */}

                <Box data-aos="zoom-in" >
                    <Image src="https://www.emercury.net/wp-content/themes/emercury-next-gen/assets/img/home/home-3.svg" />
                </Box>

                {/* right side form */}
                <Box bg={isDark ? "grey.100" : "white"} p={10} borderRadius="20px" w={["100%", "90%", "70%"]} m="auto" >
                    {status && renderAlert()}
                    <form onSubmit={handleSubmit}>
                        <Input value={values.fullName} onChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="Employer or Company name" mt={5} />
                        <Input value={values.email} onChange={handleChange} label="E-Mail" name="email" type="email" placeholder="Email" my={5} />
                        <Textarea value={values.message} height="150px" onChange={handleChange} label="Your message here" name="message" placeholder="Your message" />
                        <Button type="submit" value="Send" w="80%" display="block" m="auto" color="white" bg="linear-gradient(135deg, #f34079 40%, #fc894d)" mt={5} _hover={{ transform: "scale(1.125)" }}>Send Email</Button>

                        <Box
                            className="blur c-blur1"
                            style={{ background: "var(--purple)" }}
                        ></Box>
                    </form>
                </Box>
            </SimpleGrid>
        </Box>
    );
};
const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>Your message send successfully</p>
    </div>
)
export default Contact;

