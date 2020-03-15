import { Box, BoxProps, Button, useToast } from '@chakra-ui/core'
import React, { FC, forwardRef } from 'react'

export const MyBox: FC<BoxProps> = forwardRef(({ children, ...rest }, ref) => {
  const toast = useToast()
  const sendToast = () => {
    toast({
      status: 'success',
      description: 'hello',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    })
  }
  return (
    <Box ref={ref} {...rest}>
      <Button onClick={sendToast}>{children}</Button>
    </Box>
  )
})
