import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} p={'16'} h={'100vh'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m="auto"
          my={'16'}
        >
          <Heading> VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'90'} />
          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button colorScheme={'purple'} variant={'link'}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
