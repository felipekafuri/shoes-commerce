import type { NextPage } from 'next'
import { Flex, Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { GoogleLoginButton } from '../components/GoogleLoginButton'
import { signIn, useSession } from 'next-auth/client'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const [session] = useSession()

  async function handleGoogleLogin() {
    await signIn()
  }

  useEffect(() => {
    if (session) {
      window.location.href = '/dashboard'
    }
  }, [session])

  return (
    <>
      <Head>
        <title>Shoes Commerce | Login</title>
      </Head>
      <Flex w="full" h="100vh" align="center" justify="center">
        <Flex
          w="500px"
          h="300px"
          bg="gray.700"
          borderRadius="lg"
          align="center"
          justify="center"
          flexDir="column"
        >
          <Box w="full" align="center" mb="10">
            <Text as="h1" color="white" fontSize="2xl" fontWeight="bold">
              Faça seu{' '}
              <Text as="span" color="red">
                login
              </Text>{' '}
              para acessar a loja
            </Text>
          </Box>
          <GoogleLoginButton handleGoogleLogin={handleGoogleLogin} />
        </Flex>
      </Flex>
    </>
  )
}

export default Home
