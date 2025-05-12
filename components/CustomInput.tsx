import React from 'react'
import { FormMessage, FormControl, FormLabel, FormField } from './ui/form'
import { Input } from './ui/input'
import { useForm, UseFormReturn, Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface CustomInputProps {
    control: Control<z.infer<ReturnType<typeof authFormSchema>>>
    name:"email" | "password" | "firstName" | "lastName" | "address1" | "city" | "state" | "postalCode" | "dateOfBirth" | "ssn"
    label: string
    placeholder: string
}

const CustomInput = ({control, name, label, placeholder}: CustomInputProps) => {
  return (
    <div>
                    <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <div>
                        <div className='form-item'>
                            <FormLabel className='form-label'>
                                {label}
                            </FormLabel>
                        </div>
                        <div className='flex w-full flex-col'>
                            <FormControl>
                                <Input
                                    placeholder={placeholder}
                                    className='input-class'
                                    id={name}
                                    type={name === "password" ? "password" : name === "email" ? "email" : name}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className='form-message' />
                        </div>
                        </div>
                    )}
                    />
    </div>
  )
}

export default CustomInput
