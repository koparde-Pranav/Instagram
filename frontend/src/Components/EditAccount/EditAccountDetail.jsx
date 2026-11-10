import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { uploadToCloudinary } from '../../Config/UploadToCloudnary'
import { editUserAction } from '../../Redux/User/Action'

const EditAccountDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((store) => store)
  const jwt = localStorage.getItem('token')
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    if (!jwt) {
      navigate('/signin')
    }
  }, [jwt, navigate])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: user.reqUser?.id || '',
      username: user.reqUser?.username || '',
      name: user.reqUser?.name || '',
      bio: user.reqUser?.bio || '',
      email: user.reqUser?.email || '',
      mobile: user.reqUser?.mobile || '',
      gender: user.reqUser?.gender || '',
      image: user.reqUser?.image || '',
    },
    onSubmit: (values) => {
      if (!jwt) {
        navigate('/signin')
        return
      }

      dispatch(editUserAction({ jwt, data: values }))
      navigate(`/login`)
    },
  })

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    try {
      const imageUrl = await uploadToCloudinary(file)
      formik.setFieldValue('image', imageUrl)
    } catch (error) {
      console.error('Image upload failed', error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className='min-h-screen bg-white px-6 py-10 md:px-10'>
      <div className='mx-auto max-w-[1050px]'>
        <h1 className='mb-8 text-xl font-semibold text-neutral-900'>Settings</h1>

        <div className='grid min-h-[680px] grid-cols-1 border border-neutral-200 md:grid-cols-[260px_minmax(0,1fr)]'>
          <aside className='border-b border-neutral-200 py-5 md:border-b-0 md:border-r'>
            <nav aria-label='Settings'>
              <button type='button' className='w-full border-l-2 border-neutral-900 bg-neutral-100 px-6 py-3 text-left text-sm font-semibold text-neutral-900'>
                Edit profile
              </button>
              <div className='my-4 border-t border-neutral-200' />
              <p className='px-6 py-3 text-sm font-semibold text-neutral-900'>How you use Instagram</p>
              <p className='px-6 py-3 text-sm text-neutral-700'>Who can see your content</p>
              <p className='px-6 py-3 text-sm text-neutral-700'>How others can interact with you</p>
              <div className='my-4 border-t border-neutral-200' />
              <p className='px-6 py-3 text-sm font-semibold text-neutral-900'>For professionals</p>
              <p className='px-6 py-3 text-sm text-neutral-700'>Your app and media</p>
              <p className='px-6 py-3 text-sm text-neutral-700'>More info and support</p>
            </nav>
          </aside>

          <main className='px-5 py-8 sm:px-10 md:px-14'>
            <h2 className='mb-8 text-xl font-semibold text-neutral-900'>Edit profile</h2>

            <form id='edit-profile-form' onSubmit={formik.handleSubmit} className='space-y-6'>
              <div className='mb-8 flex items-center justify-between rounded-2xl bg-neutral-100 px-5 py-4 sm:px-6'>
                <div className='flex min-w-0 items-center gap-4'>
                  <Avatar
                    size='lg'
                    src={formik.values.image || 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg'}
                    name={formik.values.username}
                  />
                  <div className='min-w-0'>
                    <p className='truncate text-base font-semibold text-neutral-900'>{formik.values.username || 'Profile'}</p>
                    <p className='truncate text-sm text-neutral-500'>{formik.values.name}</p>
                  </div>
                </div>
                <label htmlFor='profile-image' className='ml-3 shrink-0 cursor-pointer rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-600'>
                  Change photo
                </label>
                <input id='profile-image' type='file' accept='image/*' onChange={handleImageUpload} className='hidden' />
              </div>

              <div className='grid grid-cols-1 gap-2 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6'>
                <FormLabel htmlFor='name' className='pt-2 text-sm font-semibold text-neutral-900'>Name</FormLabel>
                <FormControl>
                  <Input id='name' name='name' value={formik.values.name} onChange={formik.handleChange} placeholder='Name' className='rounded-md border-neutral-300 text-sm' />
                </FormControl>

                <FormLabel htmlFor='username' className='pt-2 text-sm font-semibold text-neutral-900'>Username</FormLabel>
                <FormControl>
                  <Input id='username' name='username' value={formik.values.username} onChange={formik.handleChange} placeholder='Username' className='rounded-md border-neutral-300 text-sm' />
                  <p className='mt-2 text-xs leading-5 text-neutral-500'>In most cases, you'll be able to change your username back to {user.reqUser?.username || 'your previous username'} for another 14 days.</p>
                </FormControl>

                <FormLabel htmlFor='bio' className='pt-2 text-sm font-semibold text-neutral-900'>Bio</FormLabel>
                <FormControl>
                  <Textarea id='bio' name='bio' value={formik.values.bio} onChange={formik.handleChange} placeholder='Bio' rows={3} resize='vertical' className='rounded-md border-neutral-300 text-sm' />
                  <p className='mt-2 text-right text-xs text-neutral-400'>{formik.values.bio.length} / 150</p>
                </FormControl>

                <div className='sm:col-start-2'>
                  <p className='text-sm font-semibold text-neutral-900'>Personal information</p>
                  <p className='mt-1 text-xs leading-5 text-neutral-500'>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
                </div>

                <FormLabel htmlFor='email' className='pt-2 text-sm font-semibold text-neutral-900'>Email</FormLabel>
                <FormControl>
                  <Input id='email' name='email' type='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Email' className='rounded-md border-neutral-300 text-sm' />
                </FormControl>

                <FormLabel htmlFor='mobile' className='pt-2 text-sm font-semibold text-neutral-900'>Phone number</FormLabel>
                <FormControl>
                  <Input id='mobile' name='mobile' value={formik.values.mobile} onChange={formik.handleChange} placeholder='Phone number' className='rounded-md border-neutral-300 text-sm' />
                </FormControl>

                <FormLabel htmlFor='gender' className='pt-2 text-sm font-semibold text-neutral-900'>Gender</FormLabel>
                <FormControl>
                  <Input id='gender' name='gender' value={formik.values.gender} onChange={formik.handleChange} placeholder='Gender' className='rounded-md border-neutral-300 text-sm' />
                </FormControl>

                <div className='sm:col-start-2'>
                  <Button type='submit' colorScheme='blue' size='sm' isLoading={formik.isSubmitting || isUploading} isDisabled={isUploading} className='rounded-lg font-semibold'>
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

export default EditAccountDetail