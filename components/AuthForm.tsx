'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { signIn, signUp } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'



const AuthForm = ({ type }: {type: string}) => {
    const router = useRouter()
    const [user, setUser] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)

    // 1. Define your form.
  const form = useForm<z.infer<ReturnType<typeof authFormSchema>>>({
    resolver: zodResolver(authFormSchema(type)),
    defaultValues: {
      email: "",
      password: "",
      lastName: "",
      firstName: "",
      ssn: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<ReturnType<typeof authFormSchema>>) => {
    setIsLoading(true)

    try{

      // sign up with appwrite & create plaid token

      if(type === 'sign-up'){
        const newUser = await signUp(data);
        setUser([...user, newUser])
        setIsLoading(false)
        console.log(user)
      }
      if(type === 'sign-in'){
        // const response = await signIn({
        //   email: data.email,
        //   password: data.password
        // })

        // if(response) router.push('/')
      }

    } catch(error){
      console.log(error)
    } finally {

    }
    
  }


  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
      <Link
            href="/"
             className="mb-2 cursor-pointer items-center gap-1 flex">
             <img src="/icons/logo.svg" alt="Vaultsy logo" width={32} height={32} />
             <h1 className='text-26 font-bold text-black-1 font-geist-sans'>
               Vaultsy
            </h1>
        </Link>

        <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lh:text-36 font-semibold text-gray-900'>
                {
                    user 
                      ? 'Link Account'
                      :type === 'sign-in'
                        ? 'Sign In'
                        : 'Sign Up'
                }
                <p className='text-16 font-normal text-gray-600'>
                    {
                        user ? 'Link your account to get Started' : 'Please enter your details'
                    }
                </p>
            </h1>
        </div>
      </header>

      {
        user ? (
            <div className='flex flex-col gap-4'>
                {/* PLaid account */}
            </div>
        ) : (
            <>
              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                  {
                    type === 'sign-up' && (
                      <>
                        <div className='flex gap-4'>
                          <CustomInput control={form.control} name="firstName" label="First Name" placeholder={"Enter your first name..."} />
                          <CustomInput control={form.control} name="lastName" label="Last Name" placeholder={"Enter your last name..."} />
                        </div>
                        <CustomInput control={form.control} name="address1" label="Address" placeholder={"Enter your address..."} />
                        <CustomInput control={form.control} name="city" label="City" placeholder={"Enter your city..."} />
                        <div className='flex gap-4'>
                          <CustomInput control={form.control} name="state" label="State" placeholder={"Ex: NY"} />
                          <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder={"Ex: 11101"} />
                        </div>
                        <div className='flex gap-4'>
                          <CustomInput control={form.control} name="dateOfBirth" label="Date of Birth" placeholder={"Enter your date of birth..."} />
                          <CustomInput control={form.control} name="ssn" label="SSN" placeholder={"Enter your SSN..."} />
                        </div>
                      </>
                    )
                  }

                    <CustomInput control={form.control} name="email" label="Email" placeholder={"Enter your email..."} />
                    <CustomInput control={form.control} name="password" label="Password" placeholder={"Enter your password..."} />
                    <div className='flex flex-col gap-4'>
                      <Button type="submit" className='form-btn' disabled={isLoading}>
                        
                        {
                          isLoading ? (
                            <>
                            <Loader2 size={20} className='animate-spin' />&nbsp;Loading...
                            </>
                          ) : (
                            type === 'sign-in' ? 'Sign In' : 'Sign Up'
                          )
                        }
                      </Button>
                      </div>
                </form>
                <footer className='flex items-center justify-center gap-2'>
                  <p className='text-16 font-normal text-gray-600'>
                    {
                      type === 'sign-in' ? (
                        "Don't have an account? "
                      ) : (
                        "Already have an account? "
                      )
                    }
                  </p>
                  <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                    {
                      type === 'sign-in' ? 'Sign Up' : 'Sign In'
                    }
                  </Link>
                </footer>
                </Form>
            </>
        )
      }
    </section>  
  )
}

export default AuthForm
