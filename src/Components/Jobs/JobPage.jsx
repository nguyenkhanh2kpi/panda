import { Box, Badge, Image, SimpleGrid, Center, Spinner, VStack, InputGroup, InputLeftElement, Input, Flex, Select, Container, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadJob } from '../../redux/Job-posting/Action'
import { BsCalendar2DayFill } from 'react-icons/bs'
import { BiDollar, BiDollarCircle, BiLocationPlus } from 'react-icons/bi'
import { SearchIcon } from '@chakra-ui/icons'
import ReactPaginate from 'react-paginate'

const JobPage = () => {
  const dispatch = useDispatch()
  const params = useParams()
  useEffect(() => {
    dispatch(loadJob())
  }, [])
  const navigate = useNavigate()
  const jobList = useSelector((store) => store.job.data)
  const [jobFiltered, setFilteredJobList] = useState([])

  const [search, setSearch] = useState({
    keyword: params.keyword || '',
    location: params.location || 'all',
    experience: params.experience || 'all',
    salary: params.salary || 'all',
  })

  const handleChangeSearch = (e) => {
    const { name, value } = e.target
    setSearch((search) => ({ ...search, [name]: value }))
  }

  const handleSearch = () => {
    console.log(search)
    const filteredJobs = jobList.filter((job) => {
      const keywordMatch = job.name.toLowerCase().includes(search.keyword.toLowerCase())
      const locationMatch = search.location === 'all' || job.location === search.location
      const experienceMatch = search.experience === 'all' || job.experience === search.experience
      const salaryMatch = search.salary === 'all' || job.salary === search.salary

      return keywordMatch && locationMatch && experienceMatch && salaryMatch
    })
    setFilteredJobList(filteredJobs)
  }

  useEffect(() => {
    handleSearch()
  }, [])

  // panigate
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const pageCount = Math.ceil(jobFiltered.length / itemsPerPage)
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const displayItems = jobFiltered.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const jobdatas =
    displayItems !== null ? (
      displayItems.map((job) => {
        return job.status === true ? (
          <Box
            _hover={{
              boxShadow: 'xl',
              transition: 'all 0.2s ease-in-out',
              transform: 'translate(2px, -5px)',
            }}
            m={5}
            onClick={() => navigate(`/jobDetail/${job.id}`)}
            key={job.id}
            maxW='sm'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'>
            <Image w={'100%'} h={164} src={job.image} fallbackSrc='https://static.tintuc.com.vn/images/ver3/2020/02/06/1580924892844-screenshot-135.png' />

            <Box p='6'>
              <Box display='flex' alignItems='baseline'>
                <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase'>
                  {job.name}
                </Box>
              </Box>

              <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                {job.title}
              </Box>

              <Box display='flex'>
                <BiDollarCircle />
                <Box as='span' color='gray.600' fontSize='sm'>
                  {job.salary}
                </Box>
              </Box>

              <Box display='flex' mt='2' alignItems='center'>
                <BiLocationPlus />
                <Box as='span' color='gray.600' fontSize='sm'>
                  {job.location}
                </Box>
              </Box>

              <Box display='flex' mt='2' alignItems='center'>
                <BsCalendar2DayFill />
                <Box as='span' color='gray.600' fontSize='sm'>
                  {job.workingForm}
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
        )
      })
    ) : (
      <Center direction='row' spacing={4} w={'80vw'} h={'20vw'}>
        <Spinner color='blue.500' size='xl' />
      </Center>
    )

  return (
    <>
      <Box alignItems={'center'} w={'100%'}>
        <VStack>
          <Box mt='120px' fontWeight='bold' width='80%' fontSize='20px'>
            <Container h={'70px'} maxW={'100%'}>
              <Flex boxShadow='base' p='6' rounded='md' bg='white' w={'995px'} h={'100%'} m={'auto'} borderRadius={'50px'} pl={'24px'} pr={'9px'} py={'9px'}>
                <Box w={'28px'} display={'flex'} alignItems={'center'}>
                  <Image mr={'8px'} w={'20px'} h={'20px'} src='https://static.naukimg.com/s/7/103/i/search.9ec0e1ac.svg' />
                </Box>
                <Box w={'340px'} h={'100%'} pr={'12px'} py={'4px'} pl={'4px'}>
                  <Input value={search.keyword} name='keyword' onChange={handleChangeSearch} border={'none'} color={'#8292b4'} placeholder='vị trí tuyển dụng' defaultValue={search.keyword} />
                </Box>
                <Box w={'223px'} h={'100%'} pr={'0px'} pt={'4px'} pl={'10px'} pb={'6px'}>
                  <Select onChange={handleChangeSearch} name='location' color={'#8292b4'} border={'none'} defaultValue={search.location}>
                    <option value='all'>Địa điểm</option>
                    <option value='Hồ Chí Minh'>Hồ Chí Minh</option>
                    <option value='Đà Nẵng'>Đà Nẵng</option>
                    <option value='Hà Nội'>Hà Nội</option>
                  </Select>
                </Box>
                <Box w={'223px'} h={'100%'} pr={'0px'} pt={'4px'} pl={'10px'} pb={'6px'}>
                  <Select onChange={handleChangeSearch} name='experience' color={'#8292b4'} border={'none'} defaultValue={search.experience}>
                    <option value='all'>Kinh nghiệm</option>
                    <option value='chưa có'>chưa có</option>
                    <option value='dưới 1 năm'>dưới 1 năm</option>
                    <option value='1 năm'>1 năm</option>
                    <option value='2 năm'>2 năm</option>
                    <option value='3 năm'>3 năm</option>
                    <option value='4 năm'>4 năm</option>
                    <option value='5 năm'>5 năm</option>
                    <option value='trên 5 năm'>trên 5 năm</option>
                  </Select>
                </Box>
                <Box w={'223px'} h={'100%'} pr={'0px'} pt={'4px'} pl={'10px'} pb={'6px'}>
                  <Select onChange={handleChangeSearch} name='salary' color={'#8292b4'} border={'none'} defaultValue={search.salary}>
                    <option value='all'>Mức lương</option>
                    <option value='Dưới 10 triệu'>Dưới 10 triệu</option>
                    <option value='10 -15 triệu'>10 -15 triệu</option>
                    <option value='15 -20 triệu'>15 -20 triệu</option>
                    <option value='20 -25 triệu'>20 -25 triệu</option>
                    <option value='25 -30 triệu'>25 -30 triệu</option>
                    <option value='30 -50 triệu'>30 -50 triệu</option>
                    <option value='trên 50 triệu'>trên 50 triệu</option>
                    <option value='thỏa thuận'>thỏa thuận</option>
                  </Select>
                </Box>
                <Button onClick={handleSearch} color={'white'} fontWeight={'600'} fontSize={'19px'} bgColor={'#457eff'} borderRadius={'50px'} h={'48px'} w={'120px'} px={'28px'} py={'11px'}>
                  Search
                </Button>
              </Flex>
            </Container>
          </Box>
          <Box w={'80%'} display='flex' justifyContent='space-between'>
            <SimpleGrid w='100%' top='50' left='50' ml='10' mt='50px' mr='10' columns={3} spacing={'5'}>
              {jobdatas}
            </SimpleGrid>
          </Box>
          <ReactPaginate
            className='question-panigate'
            pageCount={pageCount}
            onPageChange={handlePageChange}
            previousLabel='<'
            nextLabel='>'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            activeClassName='active'
          />
        </VStack>
      </Box>
    </>
  )
}

export default JobPage
