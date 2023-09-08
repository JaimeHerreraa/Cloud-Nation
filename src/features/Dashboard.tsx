import {
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  GridItem,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  Image,
  Divider,
} from "@chakra-ui/react";

import Header from "../components/Header";
import laptopIcon from "../assets/laptop-icon.svg";
import solarWidgetIcon from "../assets/solar-widget-icon.svg";
import databaseIcon from "../assets/database-icon.svg";
import folderIcon from "../assets/folder-icon.svg";
import notebookIcon from "../assets/notebook-icon.svg";
import Footer from "../components/Footer";

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
  cardColor: string;
};

const data: CardProps[] = [
  {
    title: "New App",
    description:
      "Get started on building your app! Provide the details to begin the creation process. Our platform will generate the structure for your functional app aligned with your vision.",
    buttonText: "Create App",
    icon: laptopIcon,
    cardColor: "#FFFEED",
  },
  {
    title: "New Cluster",
    description:
      "Set up a scalable computing environment! Create a cluster for optimal performance, availability, and scalability. Handle traffic, respond faster, and scale effortlessly.",
    buttonText: "Create Cluster",
    icon: solarWidgetIcon,
    cardColor: "#FFEEED",
  },
  {
    title: "New Datastore",
    description:
      "Establish secure storage for your app's data. Create a datastore for managing critical information. Ensure integrity and accessibility for reliable app services.",
    buttonText: "Create Datastore",
    icon: databaseIcon,
    cardColor: "#EDFFFA",
  },
  {
    title: "Connect",
    description: "Connect to your favourite Repositories wherever they are.",
    buttonText: "Create App",
    icon: folderIcon,
    cardColor: "#FFF6EC",
  },
  {
    title: "Documentation",
    description:
      "Establish secure storage for your app's data. Create a datastore for managing critical information. Ensure integrity and accessibility for reliable app services.",
    buttonText: "Create App",
    icon: notebookIcon,
    cardColor: "#F3EDFF",
  },
];

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth="1150px"
        paddingX={{ base: "15px", md: "50px" }}
        marginY="30px"
      >
        <Main />
      </Container>
      <Footer />
    </>
  );
};

const Main = () => {
  return (
    <Flex flexDirection="column">
      <Heading fontFamily="Manrope" fontSize="24px" marginBottom="10px">
        Get Started
      </Heading>
      <Text fontFamily="Manrope" marginBottom="25px">
        Choose what you want to deploy and we&apos;ll get it done in seconds
      </Text>
      <Grid
        templateColumns="repeat(12, 1fr)"
        gap={{ sm: "10px", md: "16px" }}
        templateRows={{ lg: "auto 374px" }}
      >
        {data.map((item, index) => {
          return (
            <GridItem
              colSpan={
                index === 3
                  ? { base: 12, sm: 6, lg: 8 }
                  : { base: 12, sm: 6, lg: 4 }
              }
              marginBottom="20px"
              key={index}
            >
              <CardApp {...item} />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

const CardApp = ({
  title,
  description,
  buttonText,
  icon,
  cardColor,
}: CardProps) => {
  return (
    <Card
      padding="20px"
      bgColor={cardColor}
      border=" 0.75px solid var(--light-stroke-stroke-light)"
      boxShadow="none"
      height="100%"
    >
      <CardHeader
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        padding="0px"
        marginBottom="10px"
      >
        <Heading
          fontFamily="Archivo"
          fontSize="22px"
          color="var(--light-text-text-primary)"
          fontWeight="500"
        >
          {title}
        </Heading>
        <Image src={icon} alt="icon" w="25px" h="25px" />
        <Divider w="100%" marginTop="10px" />
      </CardHeader>

      <CardBody padding="0px" marginBottom="10px">
        <Text
          fontFamily="Manrope"
          fontSize="14px"
          fontWeight="400"
          lineHeight="normal"
          color="var(--light-text-text-secondary)"
        >
          {description}
        </Text>
      </CardBody>

      <CardFooter padding="0px" justifyContent="flex-end">
        <Flex
          as="button"
          bgColor="var(--light-brand-rebecca-100)"
          padding="8px 12px"
          borderRadius="10px"
        >
          <Text color="#ffffff" fontFamily="Manrope" fontWeight="600">
            {buttonText}
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Dashboard;
