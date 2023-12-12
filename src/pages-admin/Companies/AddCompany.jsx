import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormLabel, Input, Spinner, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { interviewerService } from '../../Service/interviewer.service'
import { companyService } from '../../Service/company.service'

export const AddCompany = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const accessToken = JSON.parse(localStorage.getItem('data')).access_token
  const [isLoad, setIsLoad] = useState(false)

  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInput((preform) => ({ ...preform, [name]: value }))
  }

  const handleAddClick = () => {
    setIsLoad(true)
    companyService
      .registerReccer(accessToken, input)
      .then((res) => {
        if (res.message === 'Success') {
          toast.success('Success')
        } else {
          toast.error(res.message)
        }
        setIsLoad(false)
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <ToastContainer position='bottom-right' autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme='light' />
      <Button ml={"8%"} color='white' backgroundColor='rgb(3, 201, 215)' onClick={onOpen}>
        + Thêm thành viên
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Add Reccer Account
            </AlertDialogHeader>

            <AlertDialogBody>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input name='email' placeholder='email' value={input.email} onChange={handleInputChange} />
                <FormLabel>Password</FormLabel>
                <Input name='password' placeholder='password' value={input.password} onChange={handleInputChange} />
              </FormControl>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>

              {isLoad ? (
                <Spinner m={4} />
              ) : (
                <>
                  <Button color='white' backgroundColor='rgb(3, 201, 215)' ml={3} onClick={handleAddClick}>
                    Add
                  </Button>
                </>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
