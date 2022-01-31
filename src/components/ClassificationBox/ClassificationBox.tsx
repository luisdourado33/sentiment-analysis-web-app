import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Box, Stack, Button, Spinner, Text, Heading } from "@chakra-ui/react";

import TweetQuote from "./../TweetQuote/TweetQuote";

interface TweetProp {
  id: number;
  keyword: string;
  text: string;
  url: string;
}

export default function ClassificationBox() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [preTweets, setPreTweets] = useState<TweetProp[]>([]);
  const [amountVoted, setAmountVoted] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [current, setCurrent] = useState<TweetProp>({
    id: 0,
    keyword: "",
    text: "",
    url: "",
  });

  const getPreTweets = async () => {
    try {
      const request = await api.get("/tweepy/pre_tweets");

      if (request.status === 200) {
        const { data } = request;
        setPreTweets(data.pre_tweets);
        setCurrent(data.pre_tweets[0]);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  enum VoteOption {
    Negative = 0,
    Positive = 1,
    Neutral = 2,
    Pass = 3,
  }

  const pushVote = async (tweet: TweetProp, sentiment: VoteOption) => {
    try {
      const data = { 
        id: tweet.id,
        tweet_text: tweet.text,
        sentiment
      };

      const request = await api.post("/tweepy/post_tweets/new", data);

      if (request.status === 200) {
        console.log({ ...request.data });
      }

      return;
    } catch (error) {
        console.error(error);
    }
  };

  const handleChangeCurrentTweet = (event: any, response: VoteOption) => {
    event.preventDefault();

    if (amountVoted < preTweets.length - 1) {
      if (response !== VoteOption.Pass) {
        /**
         * Save vote to database
         */
        pushVote(current, response);
      }

      setCurrent(preTweets[amountVoted + 1]);
      setAmountVoted((crrt) => crrt + 1);
    } else {
      /**
       * User voted for all tweets
       */
      setIsDone(true);
    }
  };

  useEffect(() => {
    getPreTweets();
  }, []);

  if (isDone) {
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
        <Heading fontWeight="bold" mb={5}>
          Obrigado pela contribuição!
        </Heading>
      </Box>
    );
  }

  if (isLoading) {
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
        <Text fontWeight="bold" mb={5}>
          Carregando tweet...
        </Text>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }

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
      <TweetQuote>{current?.text}</TweetQuote>
      <Text mt={5}>
        {amountVoted} de {preTweets.length}
      </Text>

      <Stack spacing={4} align="center" mt={5} direction="row">
        <Button
          colorScheme="green"
          variant="solid"
          onClick={(e) => handleChangeCurrentTweet(e, VoteOption.Positive)}
        >
          Positivo
        </Button>
        <Button
          colorScheme="gray"
          variant="solid"
          onClick={(e) => handleChangeCurrentTweet(e, VoteOption.Neutral)}
        >
          Neutro
        </Button>
        <Button
          colorScheme="red"
          variant="solid"
          onClick={(e) => handleChangeCurrentTweet(e, VoteOption.Negative)}
        >
          Negativo
        </Button>
      </Stack>
      <Button
        colorScheme="blue"
        variant="link"
        mt={3}
        size="xs"
        onClick={(e) => handleChangeCurrentTweet(e, VoteOption.Pass)}
      >
        Pular Tweet
      </Button>
    </Box>
  );
}
