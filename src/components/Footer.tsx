import { Container, List, ListItem, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container
      maxW="1536px"
      height="70px"
      display="flex"
      paddingX={{ base: "15px", md: "50px" }}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ md: "space-between" }}
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <List
        display="flex"
        fontFamily="Manrope"
        fontSize="14px"
        color="var(--light-text-text-primary)"
        fontWeight="600"
        gap="25px"
        marginBottom="10px"
      >
        <ListItem>
          <Text>&copy;Cloud Nation 2023</Text>
        </ListItem>
        <ListItem>
          <Text>Support</Text>
        </ListItem>
        <ListItem>
          <Text>Documentation</Text>
        </ListItem>
      </List>
      <List
        display="flex"
        fontFamily="Manrope"
        fontSize="14px"
        color="var(--light-text-text-primary)"
        fontWeight="600"
        gap="25px"
      >
        <ListItem>
          <Text>Privacy</Text>
        </ListItem>
        <ListItem>
          <Text>Terms of Service</Text>
        </ListItem>
      </List>
    </Container>
  );
};

export default Footer;
