import React from 'react';
import { createClient, Provider } from "urql";
import {ChakraProvider, theme} from "@chakra-ui/react";
import {Home} from "../home";

const client = createClient({
  url: "http://localhost:4000/graphql",
});

export const App = () => {
  return (
      <ChakraProvider theme={theme}>
        <Provider value={client}>
          <Home />
        </Provider>
      </ChakraProvider>
  );
};
