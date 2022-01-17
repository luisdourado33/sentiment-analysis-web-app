import React from "react";

import { Box } from "@chakra-ui/react";

export default function UserMetrics() {
  const firstName: string = "John";

  return (
    <Box
      bgColor="blue.100"
      p={5}
      w="50%"
      alignSelf="center"
      borderRadius={5}
      mb={3}
    >
      Logado como: {firstName}
    </Box>
  );
}
