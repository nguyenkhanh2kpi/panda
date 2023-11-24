import { Box, Button, Container, Flex, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'
import JobButton from './JobButton'
import 'swiper/css'
import 'swiper/css/navigation'
import JobInterest from './JobInterest'
import Navbar from '../Navbar/Navbar1'
import JobSlider from './JobSlider'
import FeatureCompony from './FeatureCompony'
import DiscoverJob from './DiscoverJob'
import JobOption from './JobOption'

const HomePage = () => {
  const user = JSON.parse(localStorage.getItem('userInfo'))
  if (user !== null) {
    console.log('thong tin', user.username)
  }
  return (
    <Box>
      <Container mb={'28px'} h={'80px'} maxW={'100%'}>
        <Heading color={'#5bc8de'} textAlign={'center'} fontWeight={'700'} fontSize={'35px'} lineHeight={'50px'} mb={'6px'} mt={'104px'}>
          Tìm việc làm nhanh 24h, việc làm mới nhất
        </Heading>
        <Text textAlign={'center'} fontWeight={'400'} fontSize={'17px'} lineHeight={'24px'} color={'#8292b4'}>
          Tiếp cận 40 tin tuyển dụng việc làm mỗi ngày từ  nghiệp uy tín tại Việt Nam
        </Text>
      </Container>
      <Container h={'70px'} maxW={'100%'}>
        <Flex boxShadow='base' p='6' rounded='md' bg='white' w={'995px'} h={'100%'} m={'auto'} borderRadius={'50px'} pl={'24px'} pr={'9px'} py={'9px'}>
          <Box w={'28px'} display={'flex'} alignItems={'center'}>
            <Image mr={'8px'} w={'20px'} h={'20px'} src='https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg' />
          </Box>
          <Box w={'340px'} h={'100%'} pr={'12px'} py={'4px'} pl={'4px'}>
            <Input border={'none'} color={'#8292b4'} placeholder='vị trí tuyển dụng' />
          </Box>
          <Box w={'223px'} h={'100%'} pr={'0px'} pt={'4px'} pl={'10px'} pb={'6px'}>
            <Select color={'#8292b4'} border={'none'} placeholder='Địa điểm'>
              <option value='option2'>Hồ Chí Minh</option>
              <option value='option3'>Đà Nẵng</option>
              <option value='option3'>Hà Nội</option>
            </Select>
          </Box>
          <Box w={'223px'} h={'100%'} pr={'0px'} pt={'4px'} pl={'10px'} pb={'6px'}>
            <Select color={'#8292b4'} border={'none'} placeholder='Kinh nghiệm'>
              <option value='option2'>chưa có</option>
              <option value='option2'>dưới 1 năm</option>
              <option value='option2'>1 năm</option>
              <option value='option2'>2 năm</option>
              <option value='option2'>3 năm</option>
              <option value='option2'>4 năm</option>
              <option value='option2'>5 năm</option>
              <option value='option2'>trên 5 năm</option>
            </Select>
          </Box>
          <Box w={'223px'} h={'100%'} pr={'0px'} pt={'4px'} pl={'10px'} pb={'6px'}>
            <Select color={'#8292b4'} border={'none'} placeholder='Mức lương'>
              <option value='option2'>Dưới 10 triệu</option>
              <option value='option2'>10 -15 triệu</option>
              <option value='option2'>15 -20 triệu</option>
              <option value='option2'>20 -25 triệu</option>
              <option value='option2'>25 -30 triệu</option>
              <option value='option2'>30 -50 triệu</option>
              <option value='option2'>trên 50 triệu</option>
              <option value='option2'>thỏa thuận</option>
            </Select>
          </Box>
          <Button color={'white'} fontWeight={'600'} fontSize={'19px'} bgColor={'#457eff'} borderRadius={'50px'} h={'48px'} w={'120px'} px={'28px'} py={'11px'}>
            Search
          </Button>
        </Flex>
      </Container>
      <JobInterest />
      <JobButton />
      <JobSlider />
      <FeatureCompony />
      <DiscoverJob />
      <JobOption />
    </Box>
  )
}

export default HomePage
