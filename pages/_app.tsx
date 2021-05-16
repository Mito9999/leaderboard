import {
  Box,
  Button,
  ChakraProvider,
  Container,
  extendTheme,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { ProvideAuth } from "../utils/auth";

const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  styles: {
    global: {
      html: {
        overflowY: "scroll",
      },
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Niceboards</title>
        <meta name="description" content="Real time leaderboards" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ProvideAuth>
        <Container maxW="800px">
          <Flex
            align="center"
            direction={["column", "row"]}
            justify="space-between"
            my="20px"
          >
            <Link href="/">
              <Heading cursor="pointer" mb={["4", "0"]}>
                Niceboards
              </Heading>
            </Link>
            <Box>
              <Button colorScheme="blue" mr="4">
                Create
              </Button>
              <Link href="/signin">
                <Button colorScheme="red">Sign In</Button>
              </Link>
            </Box>
          </Flex>
          <Component {...pageProps} />
        </Container>
      </ProvideAuth>
    </ChakraProvider>
  );
}
