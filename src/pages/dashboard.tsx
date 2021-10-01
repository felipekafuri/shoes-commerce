import type { NextPage } from 'next'
import { Flex, Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { useEffect } from 'react'

const Dashboard: NextPage = () => {
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session) {
      window.location.href = '/'
    }
  }, [session, loading])

  return (
    <>
      <Head>
        <title>Shoes Commerce | Dashboard</title>
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
              Olá {session?.user?.name}
            </Text>
            <Text as="h2" color="white" fontSize="2xl" fontWeight="bold">
              Seu e-mail é: {session?.user?.email}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Dashboard
