import { useToast } from '@chakra-ui/core'
import { useCallback } from 'react'

export const useAlerts = () => {
  const toast = useToast()
  const alert = useCallback(
    (status, error, title, duration) => {
      toast({
        title,
        status,
        description: error,
        duration,
        isClosable: true,
        position: 'top-right',
      })
    },
    [toast]
  )
  const error = (error: string, title?: string) => {
    alert('error', error, title, 5000)
  }
  const warning = (error: string, title?: string) => {
    alert('warning', error, title, 3000)
  }
  const success = (error: string, title?: string) => {
    alert('success', error, title, 3000)
  }
  const info = (error: string, title?: string) => {
    alert('info', error, title, 3000)
  }
  return { error, warning, success, info }
}
