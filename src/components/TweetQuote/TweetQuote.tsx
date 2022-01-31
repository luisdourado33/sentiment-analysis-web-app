import React from "react";
import "./styles.css";

import { Heading, Text } from "@chakra-ui/react";

const TweetQuote: React.FC = ({ children }) => {
  return (
    <>
      <Heading mb={5} textAlign="center">
        Como você classificaria este texto?
      </Heading>
      <Text className="paragraph" fontSize="lg" textAlign="center">
        "{children}"
      </Text>
    </>
  );
};

export default TweetQuote;
