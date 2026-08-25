import { Box, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
})

const Signin = () => {
  const initialValues = { email: '', password: '' }

  const handleSubmit = (values) => {
    console.log('values', values)
  }

  return (
    <div>
      <div>
        <Box p={8} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <img src='https://i.imgur.com/zqpwkLQ.png' alt='' />
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {() => (
              <Form>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                      <Input className='w-full' {...field} id='email' placeholder='Mobile number or Email' />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
              </Form>
            )}
          </Formik>
        </Box>
      </div>
    </div>
  )
}

export default Signin

