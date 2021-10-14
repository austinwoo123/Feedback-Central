import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import "./Email.css";
import { useColorMode } from "@chakra-ui/color-mode";
import { Container, Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";



const Email = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    {
        /* --- handleOnSubmit method --- */
    }
    return (
        <>
            <Box className="Dev1" boxSize="200px">
                <Image
                    src="https://avatars.githubusercontent.com/u/61285870?v=4"
                    alt="Segun Adebayo"
                    borderRadius="full"
                />
            </Box>
            <Box className="Dev2" boxSize="200px">
                <Image
                    src="https://avatars.githubusercontent.com/u/75281688?v=4"
                    alt="Segun Adebayo"
                    borderRadius="full"
                />
            </Box>
            <Box className="Dev3" boxSize="200px">
                <Image
                    src="https://avatars.githubusercontent.com/u/31683155?v=4"
                    alt="Segun Adebayo"
                    borderRadius="full"
                />
            </Box>
            <Box className="Dev4" boxSize="200px">
                <Image
                    src="https://avatars.githubusercontent.com/u/71038018?v=4"
                    alt="Segun Adebayo"
                    borderRadius="full"
                />
            </Box>
            <div className="App">
                <Form>
                    <Form.Field
                        color={isDark ? "gray.50" : "blue.700"}
                        id="form-input-control-email"
                        control={Input}
                        label="Email"
                        name="user_email"
                        placeholder="Email…"
                        required
                        icon="mail"
                        iconPosition="left"
                    />
                    <Form.Field
                        color={isDark ? "gray.50" : "blue.700"}
                        id="form-input-control-last-name"
                        control={Input}
                        label="Name"
                        name="user_name"
                        placeholder="Name…"
                        required
                        icon="user circle"
                        iconPosition="left"
                    />
                    <Form.Field
                        color={isDark ? "gray.50" : "blue.700"}
                        id="form-textarea-control-opinion"
                        control={TextArea}
                        label="Message"
                        name="user_message"
                        placeholder="Message…"
                        required
                    />
                    <Button type="submit" color="green">
                        Submit
                    </Button>
                </Form>
                <Container className="Developers">
                    <div className="DevHeader">From the Team</div>
                    <Box>
                        Our developer team consists of four hard working and dedicated
                        individuals. We are are committed to making any and every feedback
                        process better. Engagement begins with feedback. With that being
                        said please give us YOUR feedback and let us know how we can further
                        assist you!
                    </Box>
                </Container>
                <Container className="Developers2">
                    <div className="DevHeader2">On Another Note</div>
                    <Box>
                        Our developer team consists of four hard working and dedicated
                        individuals. We are are committed to making any and every feedback
                        process better. Engagement begins with feedback. With that being
                        said please give us YOUR feedback and let us know how we can further
                        assist you!
                    </Box>
                </Container>
            </div>
        </>
    );
};
export default Email;