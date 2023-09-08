import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./features/Dashboard";

const App = () => {
  return (
    <ChakraProvider>
      <Dashboard></Dashboard>
    </ChakraProvider>
  );
};

export default App;
