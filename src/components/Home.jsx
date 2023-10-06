import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { Carousel } from 'react-responsive-carousel';

//  * Importing an css file for carousel;
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// *Importing an images from assests;

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  p: '4',
  size: '3xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          borderBottom={'2px solid'}
          w={'fit-content'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          py={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={[4, 16]}
            textAlign={'center'}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi
            aliquam, suscipit ad saepe culpa numquam modi odio dolor
            exercitationem labore illo ipsum at ullam enim quo reprehenderit
            eligendi in iste facilis tempora veniam adipisci dolorum officiis!
            Eos quae, esse necessitatibus assumenda saepe quaerat nemo
            accusantium maiores at? Hic, aspernatur aliquid labore quidem omnis
            natus modi incidunt voluptatem beatae nostrum ut! Quidem dicta nemo
            corrupti odit culpa. Voluptates reprehenderit tenetur est dolore
            blanditiis
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    height={'90vh'}
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Gaming Is Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
