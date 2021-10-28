import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Flex,
    Text,
    Heading,
    Stack,
    Link,
    Image,
    Box,
    Button,
    Square,
    Center,
    Spacer,
    Grid,
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
    useDisclosure,

} from '@chakra-ui/react';

const Login = () => {
    return (
        <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Text fontSize={'4xl'}>Sign in to your account</Text>
                </Stack>

                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadown={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default Login;


