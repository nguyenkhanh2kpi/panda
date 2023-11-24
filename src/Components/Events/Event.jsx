import React from 'react'
import { Heading, HStack, SlideFade, VStack } from '@chakra-ui/react'
import { EventContainer } from './EventContainer'
import { ToastContainer, toast } from 'react-toastify'

export const Events = () => {
  return (
    <VStack backgroundColor='#e9f3f5'>
      <SlideFade in={true} offsetY={20}>
        <Heading size={'lg'} m={'6'} mt={24} ml={2} textAlign={'left'} marginRight='auto'></Heading>
      </SlideFade>
      <HStack align={'flex-start'} w={'70vw'}>
        <EventContainer />
      </HStack>
    </VStack>
  )
}
