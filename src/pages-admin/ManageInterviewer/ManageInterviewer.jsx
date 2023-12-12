import { Avatar, Box, Button, HStack, Img, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AddInterviewer } from './AddInterviewer'
import { interviewerService } from '../../Service/interviewer.service'

export const ManageInterviewer = () => {
  const accessToken = JSON.parse(localStorage.getItem('data')).access_token
  const [hrs, sethrs] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    interviewerService
      .getMyInterviewer(accessToken)
      .then((res) => {
        sethrs(res)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }, [])
  if (loading) {
    return (
      <Box backgroundColor={'#e9f3f5'} p={30} overflow='hidden'>
        <VStack>
          <Box w={'100%'}>
            <AddInterviewer />
          </Box>
          <Text pt='20px' fontWeight='black' w='100%'>
            Danh sách đội tuyển dụng
          </Text>
          <Box w='100%' backgroundColor='#ffffff' p='2%' borderRadius={20}>
            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl' />
          </Box>
        </VStack>
      </Box>
    )
  } else if (hrs.length === 0 && loading === false) {
    return (
      <Box backgroundColor={'#e9f3f5'} p={30} overflow='hidden'>
        <VStack>
          <Box w={'100%'}>
            <AddInterviewer />
          </Box>
          <Text pt='20px' fontWeight='black' w='100%'>
            Danh sách đội tuyển dụng
          </Text>
          <Box w='100%' backgroundColor='#ffffff' p='2%' borderRadius={20}>
            You dont have any hr
          </Box>
        </VStack>
      </Box>
    )
  } else
    return (
      <Box backgroundColor={'#e9f3f5'} p={30} overflow='hidden'>
        <VStack>
          <Box w={'100%'}>
            <AddInterviewer />
          </Box>
          <Text pt='20px' fontWeight='black' w='100%'>
            Danh sách đội tuyển dụng
          </Text>
          <Box w='100%' backgroundColor='#ffffff' p='2%' borderRadius={20}>
            <VStack w='100%'>
              {hrs.map((hr) => (
                <Box p={2} borderRadius={20} w='100%' transition='transform 0.3s ease-in-out' _hover={{ borderWidth: '2px', transform: 'scale(1.006)' }}>
                  <HStack>
                    <Avatar size='xl' name={hr.fullName? hr.fullName : hr.email } src={hr.avatar} />
                    <VStack>
                      <Text w='100%' fontWeight={'black'}>
                        Full Name: {hr.fullName}
                      </Text>
                      <Text w='100%'>Email: {hr.email}</Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Box>
    )
}
