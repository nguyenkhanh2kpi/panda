import React from 'react'
import { Badge, Box, Center, Container, Flex, Grid, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadJob } from '../../redux/Job-posting/Action'
import uuid from 'react-uuid'
import { Link, useNavigate } from 'react-router-dom'
import { StarIcon } from '@chakra-ui/icons'
import { BsCalendar2DayFill, BsCurrencyDollar } from 'react-icons/bs'
import { BiDollar, BiLocationPlus } from 'react-icons/bi'

const JobInterest = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadJob())
  }, [])
  const navigate = useNavigate()

  const jobList = useSelector((store) => store.job.data)
  if (jobList !== null)
    return (
      <>
        <Heading mt={5} textAlign={'center'} fontWeight={'700'} fontSize={'27px'} lineHeight={'40px'} mb={'6px'}>
          Việc làm mới nhất
        </Heading>
        <Box className='container py-4 px-4 justify-conten-center '>
          <Swiper display='flex' slidesPerView={4} navigation={true} modules={[Navigation]} className='mySwiper'>
            {jobList !== null ? (
              jobList
                .map((i) => {
                  return i.status === true ? (
                    <SwiperSlide>
                      <Box
                        _hover={{
                          boxShadow: 'xl',
                          transition: 'all 0.2s ease-in-out',
                          transform: 'translate(2px, -5px)',
                        }}
                        m={5}
                        onClick={() => navigate(`/jobDetail/${i.id}`)}
                        key={uuid()}
                        maxW='sm'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'>
                        <Image w={277} h={164} src={i.image} alt='image' />

                        <Box p='6'>
                          <Box display='flex' alignItems='baseline'>
                            <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                              {i.name}
                            </Box>
                          </Box>

                          <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                            {i.title}
                          </Box>

                          <Box display='flex'>
                            <BiDollar />
                            <Box as='span' color='gray.600' fontSize='sm'>
                              {i.salary}
                            </Box>
                          </Box>

                          <Box display='flex' mt='2' alignItems='center'>
                            <BiLocationPlus />
                            <Box as='span' color='gray.600' fontSize='sm'>
                              {i.location}
                            </Box>
                          </Box>

                          <Box display='flex' mt='2' alignItems='center'>
                            <BsCalendar2DayFill />
                            <Box as='span' color='gray.600' fontSize='sm'>
                              {i.workingForm}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  ) : (
                    <div></div>
                  )
                })
                .slice(-8)
            ) : (
              <Center direction='row' spacing={4} w={'80vw'} h={'20vw'}>
                <Spinner color='blue.500' size='xl' />
              </Center>
            )}
          </Swiper>
        </Box>
      </>
    )
}

export default JobInterest
