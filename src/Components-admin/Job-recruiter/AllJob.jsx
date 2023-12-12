import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { BsFillStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadJob } from '../../redux/Job-posting/Action'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { hostName, webHost } from '../../global'
const AllJob = () => {
  const navigate = useNavigate()
  const accessToken = JSON.parse(localStorage.getItem('data')).access_token
  const submitHandler = async (e) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('data-value')

    console.log('bam dung r', accessToken)

    try {
      let data = ''
      let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${hostName}/job-posting/${id}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        data: data,
      }

      axios
        .request(config)
        .then((response) => {})
        .catch((error) => {
          console.log(error)
          toast.error('Delete Failed', {
            position: 'top-center',
          })
        })

      toast.success('Delete Successfully', {
        position: 'top-center',
      })
      navigate('/allJob_Recruiter')
    } catch (error) {}
  }
  const dispatch = useDispatch()
  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(loadJob())
  }, [])
  const userId = JSON.parse(localStorage.getItem('data')).data.userInfo.id
  const jobData = useSelector((store) => store.job.data)
  const jobdatas = jobData.map((job) => {
    return (job.status === true && job.user_id===userId)  ? (
      <Box key={job.id} mt='50px' boxShadow='rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' mb='30px' p='20px'>
        <Link to={`/jobDetail_Recruiter/${job.id}`}>
          <Text fontSize='20px'>{job.name}</Text>
          <Image style={{ width: '200px' }} src={`${job.image}`} />
          <Flex>
            <Box display='flex' mr='20px'>
              <BsBag />
              <h1> {job.experience}</h1>
            </Box>
            <Box mr='20px' color='blue.400'>
              {' '}
              ₹ Not closed
            </Box>
            <Box display='flex' mr='20px'>
              <Box mt='2px' color='blue'>
                {' '}
                <CiLocationOn />
              </Box>

              <h2> {job.exeprience} years</h2>
            </Box>
          </Flex>
          <Text> Skill : {job.requirements}</Text>
        </Link>
        <Button data-value={job.id} onClick={submitHandler}>
          delete
        </Button>
        <ToastContainer />
      </Box>
    ) : (
      <div></div>
    )
  })

  return (
    <>
      <h1></h1>
      <Box ml='10' mt='20px' fontWeight='bold' width='60%' fontSize='20px' mb='-35px'>
        {jobData.length} Jobs Based on your interest
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <Box ml='10' width='60%'>
          {jobdatas}
        </Box>
      </Box>
    </>
  )
}

export default AllJob
