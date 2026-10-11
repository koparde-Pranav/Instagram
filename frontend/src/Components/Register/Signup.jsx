import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { signupAction } from '../../Redux/Auth/Action'
import { useToast } from '@chakra-ui/react'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
})


const Signup = () => {
  const initialValues = { email: '', username: '', name: '', password: '' }
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/login')
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);
  const toast = useToast();

  const handleSubmit = (values, actions) => {
    console.log('values', values);
    dispatch(signupAction(values));
    actions.setSubmitting(false);
  }

  useEffect(() => {
    if (auth.signup?.username) {
      navigate('/login')
      toast({
        title: `Account created. ${auth.signup?.username}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    }
  }, [auth.signup])

  return (
    <div>
      <div className='border'>
        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <img className='mb-5' src='https://i.imgur.com/zqpwkLQ.png' alt='' />
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {(formikProps) => (
              <Form className='space-y-8'>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input className='w-full' {...field} id='email' placeholder='Mobile number or Email' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='username'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.username && form.touched.username}>
                      <Input className='w-full' {...field} id='username' placeholder='Username' />
                      <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <Input className='w-full' {...field} id='name' placeholder='Full name' />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <Input className='w-full' {...field} id='password' type='password' placeholder='Password' />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <p className='text-center text-sm'>People who use our service may have uploaded your contact information to Instagram. Learn more</p>
                <p className='text-center text-sm'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy</p>
                <Button type='submit' className='w-full' mt={4} colorScheme='blue' isLoading={formikProps.isSubmitting}>Sign up</Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className='border w-full border-slate-300 mt-5 '>
        <p className='text-center py-2 text-sm'>If you already have an account<span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer'>Sign in</span></p>
      </div>
    </div>
  )
}

export default Signup
