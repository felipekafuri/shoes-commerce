import type { NextPage } from 'next'
import { Flex, Box, Text, Button, Image, Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import { session, signOut, useSession } from 'next-auth/client'
import React, { useEffect, useState } from 'react'

interface User {
  id: string
  name: string
  email: string
  image: string
  created: string
}

const Dashboard: NextPage = () => {
  const [session, loading] = useSession()
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    if (!loading && !session) {
      window.location.href = '/'
    } else {
      setUser(session?.user)
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
          {loading ? (
            <Spinner color="white" />
          ) : (
            <Box w="full" align="center" mb="10">
              <Image src={user.image} rounded="full" />
              <Text as="h1" color="white" fontSize="2xl" fontWeight="bold">
                Olá {user.name}
              </Text>
              <Text as="h2" color="white" fontSize="2xl" fontWeight="bold">
                Seu e-mail é: {user.email}
              </Text>
              <Button colorScheme="blue" onClick={() => signOut()}>
                SignOut
              </Button>
            </Box>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default Dashboard
