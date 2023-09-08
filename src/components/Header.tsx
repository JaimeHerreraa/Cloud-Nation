import {
  Flex,
  Box,
  Heading,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Container,
  List,
  ListItem,
} from "@chakra-ui/react";

import avatar from "../assets/avatar.jpeg";
import bellIcon from "../assets/bell-icon.svg";
import gridIcon from "../assets/grid-icon.svg";
import lightningIcon from "../assets/lightning-icon.svg";
import lightningSearchIcon from "../assets/lightning-search-icon.svg";
import arrowIcon from "../assets/arrow-icon.svg";
import widgetIcon from "../assets/widget-bold-icon.svg";
import solarWidgetIcon from "../assets/solar-widget-icon.svg";
import databaseIcon from "../assets/database-icon.svg";
import hamburgerMenuIcon from "../assets/hamburger-menu-icon.svg";

const Header = () => {
  return (
    <Flex flexDirection="column" as="nav">
      <TopNav />
      <BottomNav />
    </Flex>
  );
};

const TopNav = () => {
  return (
    <Box
      bgColor="var(--light-surface-sf-primary)"
      borderBottom="0.75px solid var(--light-stroke-stroke-dark)"
    >
      <Container
        maxW="1536px"
        height="70px"
        display="flex"
        paddingX={{ base: "15px", md: "50px" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          fontWeight="600"
          fontFamily="Manrope"
          fontSize="20px"
          color="var(--light-text-text-primary)"
        >
          CloudNation.
        </Heading>
        <QuickSearch width={{ base: "230px", lg: "350px", xl: "450px" }} />
        <Box display="flex" alignItems="center" gap="20px">
          <Image
            display={{ base: "none", md: "inline-block", lg: "none" }}
            width="22px"
            height="22px"
            src={gridIcon}
            alt="grid icon"
          />
          <Image
            display={{ base: "none", md: "inline-block", lg: "none" }}
            width="22px"
            height="22px"
            src={bellIcon}
            alt="bell icon"
          />
          <Box display={{ base: "none", md: "none", lg: "flex" }} gap="20px">
            <CreditsButton />
            <AddButton />
          </Box>
          <Image
            src={avatar}
            alt="user icon"
            width="35px"
            height="35px"
            borderRadius="50%"
          />
        </Box>
      </Container>
    </Box>
  );
};

const BottomNav = () => {
  return (
    <Box bgColor="var(--light-surface-sf-tertiary)">
      <Container
        maxW="1536px"
        height="47px"
        display="flex"
        paddingX={{ base: "15px", md: "50px" }}
        justifyContent="space-between"
      >
        <List display="flex" gap="10px" fontFamily="Manrope" fontWeight="500">
          <ListItem display="flex" gap="6px" alignItems="center">
            <Image src={widgetIcon} alt="widget icon" w="16px" h="16px" />
            <Text color="var(--light-brand-rebecca-100)">Web Apps</Text>
          </ListItem>
          <ListItem display="flex" gap="6px" alignItems="center">
            <Image src={databaseIcon} alt="database icon" w="16px" h="16px" />
            <Text>Datastore</Text>
          </ListItem>
          <ListItem display="flex" gap="6px" alignItems="center">
            <Image
              src={solarWidgetIcon}
              alt="solar widget icon"
              w="16px"
              h="16px"
            />
            <Text>Clusters</Text>
          </ListItem>
        </List>

        <List
          display="flex"
          alignItems="center"
          gap="20px"
          fontFamily="Manrope"
          fontWeight="500"
        >
          <ListItem display={{ base: "inline-block", md: "none" }}>
            <Image
              src={hamburgerMenuIcon}
              alt="widget icon"
              w="20px"
              h="20px"
            />
          </ListItem>
          <ListItem display={{ base: "none", md: "inline-block" }}>
            <Text>Docs</Text>
          </ListItem>
          <ListItem display={{ base: "none", md: "inline-block" }}>
            <Text>Support</Text>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
};

const QuickSearch = ({ width }: { width: any }) => {
  return (
    <InputGroup
      w={width}
      display={{ base: "none", md: "flex" }}
      alignItems="center"
    >
      <Input
        placeholder="Quick Search"
        fontFamily="Manrope"
        fontSize="12.5px"
        fontWeight="500"
        color="var(--light-text-text-secondary)"
        borderRadius="8px"
        border="0.75px solid var(--light-stroke-stroke-light)"
      />
      <InputRightElement>
        <Image src={lightningSearchIcon} alt="lightning search icon" />
      </InputRightElement>
    </InputGroup>
  );
};

const CreditsButton = () => {
  return (
    <Flex
      as="button"
      borderRadius="10px"
      border="0.25px solid var(--light-stroke-stroke-light)"
      bgColor={"var(--light-brand-rebecca-25)"}
      fontFamily="Archivo"
      color="var(--light-brand-rebecca-100)"
      alignItems="center"
      padding="8px 14px"
    >
      <Flex alignItems="center" gap="5px">
        <Image src={lightningIcon} alt="lightning icon" />
        <Text fontWeight="500">350</Text>
        <Text fontSize="14px" fontWeight="500">
          Credits
        </Text>
      </Flex>
    </Flex>
  );
};

const AddButton = () => {
  return (
    <Flex
      as="button"
      gap="10px"
      borderRadius="10px"
      bgColor="var(--light-brand-rebecca-100)"
      padding="10px 14px"
      fontFamily="Archivo"
      color="#ffffff"
      alignItems="center"
    >
      <Text fontSize="14px" fontWeight="normal">
        Add New
      </Text>
      <Image src={arrowIcon} alt="arrow icon" />
    </Flex>
  );
};

export default Header;
