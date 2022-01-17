import React from "react";

import { Box, Stack, Button } from "@chakra-ui/react";

import TweetQuote from "./../TweetQuote/TweetQuote";

export default function ClassificationBox() {
  return (
    <Box
      p={5}
      bgColor="white"
      shadow="lg"
      display="flex"
      flexDirection="column"
      w="50%"
      borderRadius={5}
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      alignSelf="center"
    >
      <TweetQuote>
        Irure in in in esse in est do sit aliquip. Occaecat ad amet ex elit
        mollit minim ipsum sint adipisicing nisi. Occaecat elit qui ea ullamco
        magna magna.
      </TweetQuote>

      <Stack spacing={4} align="center" mt={5} direction="row">
        <Button colorScheme="green" variant="solid">
          Positivo
        </Button>
        <Button colorScheme="gray" variant="solid">
          Neutro
        </Button>
        <Button colorScheme="red" variant="solid">
          Negativo
        </Button>
      </Stack>
      <Button colorScheme="blue" variant="link" mt={3} size="xs">
        Pular Tweet
      </Button>
    </Box>
  );
}
