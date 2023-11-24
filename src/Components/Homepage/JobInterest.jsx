import React from 'react'
import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadJob } from '../../redux/Job-posting/Action'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'

const JobInterest = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadJob())
  }, [])

  const jobList = useSelector((store) => store.job.data)
  console.log('job list', jobList)
  if(jobList!==null)
  return (
    <>
      <Container h={'356px'} maxW={'75%'} m={'auto'} pt={'32px'} pb={'12px'}>
        <Heading textAlign={'center'} fontWeight={'700'} fontSize={'27px'} lineHeight={'40px'} mb={'6px'}>
          Việc làm tốt nhất
        </Heading>
        <Box h={'272px'} maxW={'100%'} py={'20px'}>
          <Swiper slidesPerView={4} navigation={true} modules={[Navigation]} className='mySwiper'>
            {jobList.map((i) => {
              return i.status === true ? (
                <Box key={uuid()}>
                  <SwiperSlide>
                    <Link to={`/jobDetail/${i.id}`}>
                      <Box
                        cursor={'pointer'}
                        display={'flex'}
                        flexDirection={'column'}
                        w={'265px'}
                        h={'232px'}
                        border={'1px'}
                        borderColor={'gray.100'}
                        _hover={{
                          background: 'white',
                          boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        }}
                        borderRadius={'15px'}
                        pl={'24px'}
                        pr={'20px'}
                        py={'20px'}
                        mr={'16px'}>
                        <Box w={'100%'} h={'72px'} pr={'145px'}>
                          <Image src={`${i.image}`} borderRadius={10} />
                        </Box>
                        <Text pt={'10px'} fontWeight={'600'} fontSize={'17px'} lineHeight={'23px'}>
                          {i.name}
                        </Text>
                        <Flex direction={'row'} pt={'4px'} h={'18px'} w={'100%'}>
                          <Text fontSize={'15px'} pr={'7px'} lineHeight={'18px'}>
                            {i.salary}
                          </Text>
                          {/* <Image src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/star-icon.c892ce05.svg' />
                          <Text fontSize={'15px'} lineHeight={'18px'}>
                          </Text> */}
                        </Flex>
                        <Box display={'flex'} alignItems={'center'} flexDirection={'row'} mt={'48px'} h={'18px'} w={'100%'}>
                          <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/location-icon.f29c9d1c.svg' />
                          <Text mr={'4px'} color={'#445578'} fontSize={'13px'} fontWeight={'400'} lineHeight={'18px'}>
                            {i.location}
                          </Text>
                          <Image mr={'4px'} src='https://static.naukimg.com/s/7/0/assets/images/src/widgets/popular-jobs-wdgt/v5/resources/experience-icon.b3552352.svg' />
                          <Text mr={'4px'} color={'#445578'} fontSize={'13px'} fontWeight={'400'} lineHeight={'18px'}>
                            {i.experience}
                          </Text>
                        </Box>
                      </Box>
                    </Link>
                  </SwiperSlide>
                </Box>
              ) : (
                <div></div>
              )
            })}
          </Swiper>
        </Box>
      </Container>
    </>
  )
}

export default JobInterest
