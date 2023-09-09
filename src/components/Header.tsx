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
  Fade,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  ButtonGroup,
  PopoverFooter,
} from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";

import {
  avatar,
  bellIcon,
  gridIcon,
  lightningIcon,
  lightningSearchIcon,
  arrowIcon,
  widgetIcon,
  solarWidgetIcon,
  databaseIcon,
  hamburgerMenuIcon,
  sunIcon,
  switchIcon,
  moonIcon,
  settingsIcon,
  billingIcon,
  signOutIcon,
  laptopIcon,
  serverIcon,
} from "../assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useBoolean();
  const [isProfileOpen, setIsProfileOpen] = useBoolean();
  const hideNav = !isProfileOpen && (!isMenuOpen || isMenuOpen);

  return (
    <Flex flexDirection="column" as="nav">
      <TopNav setIsProfileOpen={setIsProfileOpen} isMenuOpen={isMenuOpen} />
      {hideNav && <BottomNav setIsMenuOpen={setIsMenuOpen} />}
      <Fade in={isProfileOpen}>
        {isProfileOpen && isMenuOpen === false && <ProfileMenu />}
      </Fade>
      <Fade in={isMenuOpen}>{isMenuOpen && <HamburgerMenu />}</Fade>
    </Flex>
  );
};

const TopNav = ({
  setIsProfileOpen,
  isMenuOpen,
}: {
  setIsProfileOpen: any;
  isMenuOpen: boolean;
}) => {
  return (
    <Box
      bgColor="var(--light-surface-sf-primary)"
      borderBottom="0.75px solid var(--light-stroke-stroke-dark)"
      position="relative"
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
        <QuickSearch
          width={{ base: "230px", lg: "350px", xl: "450px" }}
          display={{ base: "none", md: "flex" }}
        />
        <Box display="flex" alignItems="center" gap="20px">
          <Image
            display={{ base: "none", md: "inline-block", lg: "none" }}
            width="22px"
            height="22px"
            src={gridIcon}
            alt="grid icon"
          />
          <Box display={{ base: "none", md: "none", lg: "flex" }} gap="20px">
            <CreditsButton />
            <HamburgerMenuDesktop />
          </Box>
          <Image
            display={{ base: "none", md: "inline-block", lg: "inline-block" }}
            width="22px"
            height="22px"
            src={bellIcon}
            alt="bell icon"
          />
          <Image
            src={avatar}
            alt="user icon"
            width="35px"
            height="35px"
            borderRadius="50%"
            display={{ base: "inline-block", md: "none" }}
            onClick={
              isMenuOpen ? setIsProfileOpen.off : setIsProfileOpen.toggle
            }
          />
          <ProfileMenuDesktop />
        </Box>
      </Container>
    </Box>
  );
};

const BottomNav = ({ setIsMenuOpen }: { setIsMenuOpen: any }) => {
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
              cursor="pointer"
              onClick={setIsMenuOpen.toggle}
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

const HamburgerMenu = () => {
  return (
    <Flex
      flexDirection="column"
      padding="15px"
      gap="10px"
      borderBottom="0.25px solid var(--light-stroke-stroke-dark)"
      bgColor="var(--light-surface-sf-primary)"
    >
      <QuickSearch width="100%" display="flex" />
      <List
        display="flex"
        flexDirection="column"
        gap="10px"
        fontFamily="Manrope"
        fontWeight="500"
        fontSize="18px"
      >
        <ListItem>
          <Text>Docs</Text>
        </ListItem>
        <ListItem>
          <Text>Support</Text>
        </ListItem>
        <ListItem>
          <Text>Notifications</Text>
        </ListItem>
      </List>
      <Box display="flex" gap="15px" justifyContent="center">
        <CreditsButton />
        <AddButton />
      </Box>
    </Flex>
  );
};

const ProfileMenu = () => {
  return (
    <List
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="10px"
      fontFamily="Manrope"
      fontWeight="600"
      fontSize="18px"
      padding="15px"
      borderBottom="0.25px solid var(--light-stroke-stroke-dark)"
      bgColor="var(--light-surface-sf-primary)"
    >
      <ListItem display="flex" flexDirection="column" alignItems="center">
        <Text>Account</Text>
        <Text
          fontWeight="500"
          fontSize="15px"
          color="var(--light-text-text-secondary)"
        >
          prathyushk@gmail.com
        </Text>
      </ListItem>
      <ListItem>
        <Text>Docs</Text>
      </ListItem>
      <ListItem>
        <Text>Support</Text>
      </ListItem>
      <ListItem>
        <Text>Notifications</Text>
      </ListItem>
      <ListItem display="flex" gap="9px">
        <Image src={sunIcon} alt="sun icon" />
        <Image src={switchIcon} alt="switch icon" />
        <Image src={moonIcon} alt="moon icon" />
      </ListItem>
    </List>
  );
};

const ProfileMenuDesktop = () => {
  return (
    <Popover autoFocus={false}>
      <PopoverTrigger>
        <Image
          src={avatar}
          alt="user icon"
          w="35px"
          h="35px"
          borderRadius="50%"
          cursor="pointer"
          display={{ base: "none", md: "inline-block" }}
        />
      </PopoverTrigger>
      <PopoverContent
        bg="var(--light-surface-sf-primary)"
        border=" 0.75px solid var(--light-stroke-stroke-light)"
        borderRadius="0px 0px 10px 10px"
        w="155px"
        p="15px"
      >
        <PopoverArrow />
        <List
          display="flex"
          flexDirection="column"
          fontFamily="Manrope"
          fontWeight="500"
          fontSize="12px"
          alignItems="center"
          gap="12px"
        >
          <ListItem display="flex" alignItems="center" flexDirection="column">
            <Text>Account</Text>
            <Text>prathyushk@gmail.com</Text>
          </ListItem>
          <ListItem display="flex" gap="5px" cursor="pointer">
            <Image src={settingsIcon} alt="setting icon" />
            <Text>Settings</Text>
          </ListItem>
          <ListItem display="flex" gap="5px" cursor="pointer">
            <Image src={billingIcon} alt="billing icon" />
            <Text>Billing</Text>
          </ListItem>
          <ListItem display="flex" gap="5px" cursor="pointer">
            <Image src={signOutIcon} alt="signout icon" />
            <Text>Sign Out</Text>
          </ListItem>
          <ListItem display="flex" gap="4px" cursor="pointer">
            <Image src={sunIcon} alt="sun icon" w="16px" h="16px" />
            <Image src={switchIcon} alt="switch icon" w="16px" h="16px" />
            <Image src={moonIcon} alt="moon icon" w="16px" h="16px" />
          </ListItem>
        </List>
      </PopoverContent>
    </Popover>
  );
};

const HamburgerMenuDesktop = () => {
  return (
    <Popover autoFocus={false}>
      <PopoverTrigger>
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
      </PopoverTrigger>
      <PopoverContent
        bg="var(--light-surface-sf-primary)"
        border=" 0.75px solid var(--light-stroke-stroke-light)"
        borderRadius="0px 0px 10px 10px"
        w="auto"
      >
        <PopoverArrow />
        <List
          display="flex"
          flexDirection="column"
          fontFamily="Archivo"
          fontWeight="500"
          fontSize="12px"
          gap="12px"
          padding="15px 25px"
        >
          <ListItem
            display="flex"
            gap="4px"
            cursor="pointer"
            borderRadius=" 5px"
            border=" 0.25px solid var(--light-stroke-stroke-light)"
            padding="5px 8px"
            w="120px"
          >
            <Image src={laptopIcon} alt="laptop icon" w="16px" h="16px" />
            <Text>New App</Text>
          </ListItem>
          <ListItem
            display="flex"
            gap="4px"
            cursor="pointer"
            borderRadius=" 5px"
            border=" 0.25px solid var(--light-stroke-stroke-light)"
            padding="5px 8px"
            alignItems="center"
            w="120px"
          >
            <Image src={serverIcon} alt="server icon" w="16px" h="16px" />
            <Text>New Datastore</Text>
          </ListItem>
          <ListItem
            display="flex"
            gap="4px"
            cursor="pointer"
            borderRadius=" 5px"
            border=" 0.25px solid var(--light-stroke-stroke-light)"
            padding="5px 8px"
            w="120px"
          >
            <Image src={solarWidgetIcon} alt="widget icon" w="16px" h="16px" />
            <Text>New Cluster</Text>
          </ListItem>
        </List>
      </PopoverContent>
    </Popover>
  );
};

const QuickSearch = ({ width, display }: { width: any; display: any }) => {
  return (
    <InputGroup w={width} display={display} alignItems="center">
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
