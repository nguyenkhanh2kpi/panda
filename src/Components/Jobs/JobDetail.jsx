import { Alert, AlertIcon, Box, Button, Image, Text, useDisclosure, SimpleGrid, Badge } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BsBag, BsFillStarFill } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { loadJobDetail } from '../../redux/JobDetail/Action'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { hostName, webHost } from "../../global";

function JobDetail() {
  const accessToken = JSON.parse(localStorage.getItem('data')) !== null ? JSON.parse(localStorage.getItem('data')).access_token : null
  const submitHandler = async (e) => {
    console.log(e.target.value)
    const jobId = e.target.value
    try {
      const { Data } = await axios.post(`${hostName}/apply-job`, jobId, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })

      toast.success('Apply Job Successfully', {
        position: 'top-center',
      })
    } catch (error) {
      toast.error(error, {
        position: 'top-center',
      })
    }
  }
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadJobDetail(params.id))
  }, [params.id])
  const data = useSelector((store) => store.jobDetail.data)

  console.log(data)
  if (data != null) {
    return (
      <Box mt='100px'>
        <Box display='flex' justifyContent='space-evenly'>
          <Box w='850px'>
            <Box ml='50px' p='20px' boxShadow='rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' color='RGBA(0, 0, 0, 0.76)'>
              <Text fontSize='20px' fontWeight='bold'>
                {data.name}
              </Text>

              <SimpleGrid w='100%' h='80px' mt='50px' mr='10' columns={3} spacing={'10'}>
                <Box>
                  {' '}
                  <Image pl='25%' borderRadius='3px' h='80px' src={`${data.image}`} />
                </Box>

                <Box fontSize='15px' justifyItems='center'>
                  <Text display='flex' alignContent='center'>
                    <Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'>
                      <BsBag />{' '}
                    </Box>
                    Vị trí :{' '}
                    <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px'>
                      {' '}
                      ({data.position}){' '}
                    </Badge>
                  </Text>

                  <Text display='flex' alignContent='center'>
                    <Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'>
                      <BsBag />{' '}
                    </Box>
                    Mức lương :{' '}
                    <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px'>
                      {' '}
                      {data.salary}{' '}
                    </Badge>
                  </Text>
                </Box>

                <Box>
                  <Text display='flex' alignContent='center'>
                    <Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'>
                      <BsBag />{' '}
                    </Box>{' '}
                    Kinh Nghiệm :{' '}
                    <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px'>
                      {' '}
                      {data.experience}
                    </Badge>
                  </Text>

                  <Text display='flex' alignContent='center'>
                    <Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'>
                      {' '}
                      <CiLocationOn />{' '}
                    </Box>{' '}
                    Địa điểm :{' '}
                    <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px'>
                      {' '}
                      {data.location}
                    </Badge>
                  </Text>
                </Box>
              </SimpleGrid>

              <Box w='100%' mt='30px' mb='20px'>
                <Button w='100%' bg='teal' value={data.id} onClick={submitHandler}>
                  Apply
                </Button>
              </Box>

              <hr />
            </Box>

            <Box mt='30px' ml='50px' p='20px' boxShadow='rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' color='RGBA(0, 0, 0, 0.76)'>
              <Text fontSize='20px' fontWeight='bold'>
                Job description
              </Text>
              <Text width='60%' lineHeight='30px'>
                {data.dis}
              </Text>

              <Box>
                <Text mt='30px' color='RGBA(0, 0, 0, 0.50)' fontSize='18px' fontWeight='bold'>
                  Vị trí
                </Text>
                <Text mb='30px'> {data.position} </Text>
                <Text color='RGBA(0, 0, 0, 0.50)' fontSize='18px' fontWeight='bold'>
                  Kỹ năng
                </Text>
                <Text mb='30px'> {data.requirements} </Text>
                <Text color='RGBA(0, 0, 0, 0.50)' fontSize='18px' fontWeight='bold'>
                  Địa chỉ Doanh nghiệp
                </Text>
                <Text mb='30px'> {data.detailLocation} </Text>
                <Text color='RGBA(0, 0, 0, 0.50)' fontSize='18px' fontWeight='bold'>
                  Quyền lợi
                </Text>
                <Text mb='30px'> {data.interest} </Text>
                <Text fontWeight='bold' fontSize='18px'>
                  {' '}
                  Mô tả công việc{' '}
                </Text>
                <Text mb='10px'> {data.workingForm} </Text>
                <Text mb='30px'> {data.detailJob} </Text>
              </Box>
            </Box>
          </Box>
          <Box width='400px' height='400px'>
            <Box p='20px' boxShadow='rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'>
              <Text fontSize='18px' mb='20px' fontWeight='bold'>
                {' '}
                Jobs you might be interested in
              </Text>
              <Text fontSize='15px' fontWeight='bold'>
                {' '}
                DTP Operator
              </Text>

              <Text display='flex' textAlign='center'>
                {' '}
                <Text fontSize='13px' mt='1px' mr='10px'>
                  {' '}
                  Brilliant Prakashan{' '}
                </Text>{' '}
                4.1{' '}
                <Text mt='2.5px' color='orange' ml='2px' mr='10px'>
                  {' '}
                  <BsFillStarFill />{' '}
                </Text>{' '}
                (41 reviews)
              </Text>
              <Text display='flex' alignContent='center'>
                <Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'>
                  {' '}
                  <CiLocationOn />{' '}
                </Box>{' '}
                {data.location}{' '}
              </Text>
              <Text ml='70%' mb='20px'>
                19 days ago
              </Text>
              <hr />

              <Text fontSize='15px' fontWeight='bold'>
                {' '}
                DTP Operator
              </Text>

              <Text display='flex' textAlign='center'>
                {' '}
                <Text fontSize='13px' mt='1px' mr='10px'>
                  {' '}
                  Physicswallah{' '}
                </Text>{' '}
                4.1{' '}
                <Text mt='2.5px' color='orange' ml='2px' mr='10px'>
                  {' '}
                  <BsFillStarFill />{' '}
                </Text>{' '}
                (41 reviews)
              </Text>
              <Text display='flex' alignContent='center'>
                <Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'>
                  {' '}
                  <CiLocationOn />{' '}
                </Box>{' '}
                Siliguri{' '}
              </Text>
              <Text ml='70%' mb='20px'>
                5 days ago
              </Text>
              <hr />

              <Text fontSize='15px' fontWeight='bold'>
                {' '}
                DTP Designer
              </Text>
              <Text display='flex' textAlign='center'>
                {' '}
                <Text fontSize='13px' mt='1px' mr='10px'>
                  {' '}
                  Edwiser Innovation Hub Pvt.{' '}
                </Text>{' '}
                4.1{' '}
                <Text mt='2.5px' color='orange' ml='2px' mr='10px'>
                  {' '}
                  <BsFillStarFill />{' '}
                </Text>{' '}
                (41 reviews)
              </Text>
              <Text display='flex' alignContent='center'>
                <Box mt='4px' mr='15px' color='RGBA(0, 0, 0, 0.36)'>
                  {' '}
                  <CiLocationOn />{' '}
                </Box>{' '}
                Hydrabad{' '}
              </Text>
              <Text ml='70%' mb='20px'>
                1 day ago
              </Text>
              <hr />

              <Text mt='5px' fontWeight='bold' color='blue.500'>
                View All
              </Text>
            </Box>
            <Box p='20px' mt='20px' boxShadow='rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em'>
              <Text fontSize='18px' mb='20px' fontWeight='bold'>
                {' '}
                Reviews
              </Text>
              <Text fontSize='15px' fontWeight='bold'>
                {' '}
                H.O.D Mathematics in Rachi
              </Text>

              <Text display='flex' textAlign='center'>
                {' '}
                <Text fontSize='13px' mt='1px' mr='10px'>
                  {' '}
                  Anonymous{' '}
                </Text>{' '}
                <Text mt='2.5px' color='orange' ml='2px' mr='10px'>
                  {' '}
                </Text>
              </Text>
              <Box display='flex' mt='2' alignItems='center'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <BsFillStarFill key={i} color={i < 3 ? 'orange' : 'yellow'} />
                  ))}
              </Box>

              <Text ml='70%' mb='20px'>
                19 days ago
              </Text>
              <Text fontSize='16px' fontWeight='bold'>
                Likes
              </Text>
              <Text fontSize='16px'>Only Clear envirment</Text>
              <hr />

              <Text mt='5px' fontWeight='bold' color='blue.500'>
                View All
              </Text>
            </Box>
          </Box>
        </Box>
        <ToastContainer />
      </Box>
    )
  }
}

export default JobDetail
