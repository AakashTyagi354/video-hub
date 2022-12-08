import { Box, Container, Heading, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const headingOp = {
  pos: "absolute",
  left: "50%",
  right: "50%",
  tranform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};
const Home = () => {
  return (
    <>
      <Box>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <Box w={"full"} h={"100vh"}>
            <Img h={'full'} w={'full'} objectFit={'cover'} src="https://static.vecteezy.com/system/resources/previews/004/828/224/large_2x/woman-wearing-vr-glasses-global-internet-connection-virtual-metaverse-document-management-system-metaverse-technology-concept-icon-efficient-file-management-future-technology-virtual-world-meta-photo.jpg" />
            <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
              Watch the Future
            </Heading>
          </Box>
          <Box w={"full"} h={"100vh"}>
            <Img h={'full'} w={'full'} objectFit={'cover'} src="https://www.immobilisantandrea.it/media2/news/EN/metaverse_fashion_week_report.jpg" />
            <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
              Watch the Future gaming
            </Heading>
          </Box>

          <Box w={"full"} h={"100vh"}>
            <Img h={'full'} w={'full'} objectFit={'cover'} src="http://image.coinpedia.org/wp-content/uploads/2022/04/29132804/Metaverse.jpeg" />
            <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
              Watch the Future gaming
            </Heading>
          </Box>

          <Box w={"full"} h={"100vh"}>
            <Img h={'full'} w={'full'} objectFit={'cover'} src="https://coindcx.com/blog/wp-content/uploads/2022/01/Metaverse.png" />
            <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
              Watch the Future gaming
            </Heading>
          </Box>
        </Carousel>
        <Container maxW={"container.xl"} minH={"100vh"} p="16">
          <Heading
            textTransform={"uppercase"}
            m="auto"
            py="2"
            w={"fit-content"}
            borderBottom={"2px solid"}
          >
            Services
          </Heading>

          <Stack
            h="full"
            p={"4"}
            alignItems={"center"}
            direction={["column", "row"]}
          >
            <Img src="" h={["40", "400"]} />
            
            <Text letterSpacing={"widest"} lineHeight={"190%"}  paddingTop={'20'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              distinctio enim accusantium consectetur voluptatem nisi obcaecati
              maxime magni. Possimus harum voluptates nemo accusantium
              reprehenderit autem dicta blanditiis debitis obcaecati quod.
              Adipisci accusantium eaque quod!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              distinctio enim accusantium consectetur voluptatem nisi obcaecati
              maxime magni. Possimus harum voluptates nemo accusantium
              reprehenderit autem dicta blanditiis debitis obcaecati quod.
              Adipisci accusantium eaque quod!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              distinctio enim accusantium consectetur voluptatem nisi obcaecati
              maxime magni. Possimus harum voluptates nemo accusantium
              reprehenderit autem dicta blanditiis debitis obcaecati quod.
              Adipisci accusantium eaque quod!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              distinctio enim accusantium consectetur voluptatem nisi obcaecati
              maxime magni. Possimus harum voluptates nemo accusantium
              reprehenderit autem dicta blanditiis debitis obcaecati quod.
              Adipisci accusantium eaque quod!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              distinctio enim accusantium consectetur voluptatem nisi obcaecati
              maxime magni. Possimus harum voluptates nemo accusantium
              reprehenderit autem dicta blanditiis debitis obcaecati quod.
              Adipisci accusantium eaque quod!
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const MyCarousel = () => {
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={"full"} h={"100vh"}>
      <Img src="https://static.vecteezy.com/system/resources/previews/004/828/224/large_2x/woman-wearing-vr-glasses-global-internet-connection-virtual-metaverse-document-management-system-metaverse-technology-concept-icon-efficient-file-management-future-technology-virtual-world-meta-photo.jpg" />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
        Watch the Future
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Img src="https://www.immobilisantandrea.it/media2/news/EN/metaverse_fashion_week_report.jpg" />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
        Watch the Future gaming
      </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
      <Img src="http://image.coinpedia.org/wp-content/uploads/2022/04/29132804/Metaverse.jpeg" />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
        Watch the Future gaming
      </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
      <Img src="https://coindcx.com/blog/wp-content/uploads/2022/01/Metaverse.png" />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOp}>
        Watch the Future gaming
      </Heading>
    </Box>
  </Carousel>;
};

export default Home;
