import { Box, Button, Image, Text, Badge, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { loadJobDetail } from '../../redux/JobDetail/Action'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { hostName } from '../../global'

function JobDetailRecruiter() {
  const params = useParams()
  const cancelRef = React.useRef()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadJobDetail(params.id))
  }, [params.id])
  const data = useSelector((store) => store.jobDetail.data)

  const accessToken = JSON.parse(localStorage.getItem('data')).access_token
  const [name, setName] = useState(data.name)
  const [position, setPosition] = useState(data.position)
  const [requirements, setRequirements] = useState(data.requirements)
  const [location, setLocation] = useState(data.location)
  const [salary, setSalary] = useState(data.salary)
  const [number, setNumber] = useState(data.number)
  const [workingForm, setWorkingForm] = useState(data.workingForm)
  const [sex, setSex] = useState(data.sex)
  const [experience, setExperience] = useState(data.experience)
  const [detailLocation, setDetailLocation] = useState(data.detailLocation)
  const [detailJob, setDetailJob] = useState(data.detailJob)
  const [interest, setInterest] = useState(data.interest)
  const [testImage, setTestImage] = useState()
  const [status, setStatus] = useState(data.status)
  const [language, setLanguage] = useState(data.language)

  let img = []
  const onOpen = async (e) => {
    if (testImage !== null) {
      const formData = new FormData()
      formData.append('file', testImage)

      const imageResponse = await axios.post(`${hostName}/file/upload`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      img.push(imageResponse.data.data)
    }

    let data = JSON.stringify({
      name: name,
      position: position,
      language: language,
      location: location,
      salary: salary,
      number: number,
      workingForm: workingForm,
      sex: sex,
      experience: experience,
      detailLocation: detailLocation,
      detailJob: detailJob,
      requirements: requirements,
      interest: interest,
      image: img.at(0),
      status: status,
    })

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${hostName}/job-posting/${params.id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    }

    console.log(config)

    axios
      .request(config)
      .then((response) => {
        console.log('haha')
      })
      .catch((error) => {
        console.log(error)
        toast.error('Update Job Failed', {
          position: 'top-center',
        })
      })

    toast.success('Update Job Successfuly', {
      position: 'top-center',
    })
    setTimeout(() => {
      navigate('/allJob_Recruiter')
    }, 2000)
  }
  if (data != null)
    return (
      <Box>
        <Box display='flex' justifyContent='space-evenly'>
          <Box w='950px'>
            <Box mt='30px' p='20px' pr='0' boxShadow='rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' color='RGBA(0, 0, 0, 0.76)'>
              <Text fontSize='30px' ml='15%' fontWeight='bold'>
                Thông tin chỉ tiết công việc
              </Text>
              <Text width='60%' lineHeight='30px'>
                {data.dis}
              </Text>

              <Box mt='30px' ml='15%'>
                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  Tên công việc
                </Badge>

                <div className='form_input'>
                  <div className='two'>
                    <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={name} onChange={(e) => setName(e.target.value)} type='text' name='detailJob' id='detailJob' />
                  </div>
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  Hình ảnh
                </Badge>
                <Image style={{ padding: '5px', width: '200px' }} src={`${data.image}`} />

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  Chọn hình ảnh
                </Badge>

                <div className='two'>
                  <input style={{ padding: '5px', borderRadius: '20px', marginRight: '20px', marginTop: '10px', marginBottom: '10px' }} type='file' onChange={(e) => setTestImage(e.target.files[0])} name='avatar' id='avatar' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  Địa điểm
                </Badge>
                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={location} onChange={(e) => setLocation(e.target.value)} type='text' name='location' id='location' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  {' '}
                  Vị trí
                </Badge>

                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={position} onChange={(e) => setPosition(e.target.value)} type='text' name='position' id='position' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  {' '}
                  Số lượng{' '}
                </Badge>
                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={number} onChange={(e) => setNumber(e.target.value)} type='text' name='number' id='number' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  {' '}
                  Giới tính{' '}
                </Badge>
                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={sex} onChange={(e) => setSex(e.target.value)} type='text' name='sex' id='sex' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  {' '}
                  Kỹ năng{' '}
                </Badge>
                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={requirements} onChange={(e) => setRequirements(e.target.value)} type='text' name='requirements' id='requirements' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  {' '}
                  Địa chỉ doanh nghiệp{' '}
                </Badge>
                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={detailLocation} onChange={(e) => setDetailLocation(e.target.value)} type='text' name='detailLocation' id='detailLocation' />
                </div>
                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  Hình thưc công việc{' '}
                </Badge>

                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={workingForm} onChange={(e) => setWorkingForm(e.target.value)} type='text' name='workingForm' id='workingForm' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  Chi tiết công việc
                </Badge>

                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={detailJob} onChange={(e) => setDetailJob(e.target.value)} type='text' name='detailJob' id='detailJob' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  Kinh nghiệm{' '}
                </Badge>
                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={experience} onChange={(e) => setExperience(e.target.value)} type='text' name='experience' id='experience' />
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  {' '}
                  Mức lương{' '}
                </Badge>
                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={salary} onChange={(e) => setSalary(e.target.value)} type='text' name='salary' id='salary' />
                  <Select mt={6} onChange={(e) => setSalary(e.target.value)} border={'none'} defaultValue='all' value={salary} type='text' name='salary' id='salary'>
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
                </div>

                <Badge borderRadius='full' fontSize='14px' px='2' colorScheme='teal' ml='2px' mt='20px' mb='10px'>
                  {' '}
                  Lợi ích{' '}
                </Badge>

                <div className='two'>
                  <input style={{ padding: '5px', width: '80%', borderRadius: '10px', fontSize: '20px' }} value={interest} onChange={(e) => setInterest(e.target.value)} type='text' name='interest' id='interest' />
                </div>

                <Button width='80%' bg='blue.400' mt='30px' onClick={onOpen}>
                  Đăng bài
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <ToastContainer />
      </Box>
    )
}

export default JobDetailRecruiter
