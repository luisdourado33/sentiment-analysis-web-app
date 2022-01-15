import React from "react";
import "./styles.css";

import { Text } from "@chakra-ui/react";

const TweetQuote: React.FC = ({ children }) => {
  return (
    <Text className="paragraph" fontSize="lg">
      "{children}"
    </Text>
  );
};

export default TweetQuote;
