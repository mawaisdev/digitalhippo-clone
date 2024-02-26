'use client'
import Link from 'next/link'

import { Button, buttonVariants } from '@/components/ui/button'

import { Icons } from '@/components/icons'
import { ArrowRightIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const SignUpPage = () => {
  return (
    <>
      <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Icons.logo className='h-20 w-20' />
            <h1 className='text-2xl font-bold'>Create an Account</h1>
            <Link
              href='/sign-in'
              className={buttonVariants({
                variant: 'link',
                className: 'gap-1.5',
              })}
            >
              Already have an account? Login here!
              <ArrowRightIcon className='h-4 w-4' />
            </Link>
          </div>

          <div className='grid gap-6'>
            <form onSubmit={() => {}}>
              <div className='grid gap-2'>
                <div className='grid gap-1 py-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    className={cn({ 'focus-visible:ring-red-500': true })}
                    placeholder='user@mail.com'
                  />
                </div>

                <div className='grid gap-1 py-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    className={cn({ 'focus-visible:ring-red-500': true })}
                    placeholder='******'
                  />
                </div>

                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
