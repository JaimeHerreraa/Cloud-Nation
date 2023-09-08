import { Container, Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container maxWidth="1150px" paddingX="15px" marginY="30px">
        <Main />
      </Container>
    </>
  );
};

const Main = () => {
  return (
    <Flex flexDirection="column">
      <Heading fontFamily="Manrope" fontSize="24px">
        Get Started
      </Heading>
    </Flex>
  );
};

export default Dashboard;
