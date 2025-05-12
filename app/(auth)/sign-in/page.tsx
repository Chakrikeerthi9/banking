import AuthForm from '@/components/AuthForm'
import React from 'react'

const signIn = () => {
  return (
    <section className='flex-center w0full h-full mx-sm:px-6'>
      <AuthForm type="sign-in" />
    </section>
  )
}

export default signIn
