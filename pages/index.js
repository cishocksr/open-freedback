import { Button, Code, Heading, Text } from '@chakra-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Open Feedback</title>
      </Head>

      <main>
        <Heading>Open Feedback</Heading>

        <Text>
          Current User: <Code>{auth?.user?.email}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Signout</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Signin</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
