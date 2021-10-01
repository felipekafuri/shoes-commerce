import { Button, Center, Text } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

interface Props {
  handleGoogleLogin: () => void
}

export function GoogleLoginButton({ handleGoogleLogin }: Props) {
  return (
    <Button w="1/2" leftIcon={<FcGoogle />} onClick={handleGoogleLogin}>
      <Center>
        <Text>Sign in with Google</Text>
      </Center>
    </Button>
  )
}
