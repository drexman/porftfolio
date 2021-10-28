
import { useState } from 'react'
import {
    Flex,
    Box,
    Text,
    Stack,
    Button,
    Heading,
    IconButton,
    useDisclosure,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

function Navbar() {

    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex align={'center'} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')} p={3}>
            <Flex
                ml={{ base: -2 }}
                display={{ base: 'flex', md: 'none' }}
            >
                <IconButton
                    onClick={onToggle}
                    icon={
                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }

                    variant={'ghost'}
                    aria-label={'Toogle Navigation'}
                />
            </Flex>

            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Text
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    fontFamily={'heading'}

                >
                    Logo
                </Text>
            </Flex>

            <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button
                    as={'a'}
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={'link'}
                    href={'#'}>
                    Sign In
                </Button>
                <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    href={'#'}
                    _hover={{
                        bg: 'pink.300',
                    }}>
                    Sign Up
                </Button>
            </Stack>

        </Flex>

    )
}

export default Navbar;
