import { Box, BoxProps, Button } from '@chakra-ui/core'
import React, { FC, forwardRef } from 'react'
import { useAlerts } from './useAlerts'

export const MyBox: FC<BoxProps> = forwardRef(({ children, ...rest }, ref) => {
  const Alert = useAlerts()
  return (
    <Box ref={ref} {...rest}>
      <Button onClick={() => Alert.success('hello')}>{children}</Button>
    </Box>
  )
})
