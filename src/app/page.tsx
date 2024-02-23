import Link from 'next/link'

import { MaxWidthWrapper } from '@/components/max-width-wrapper'
import { Fragment } from 'react'

import { Button, buttonVariants } from '@/components/ui/button'

import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'

const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description:
      'Get Your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team. Not Happy? We offer 30-Day refund guarantee',
  },
  {
    name: 'For the Plant',
    icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]

export default function Home() {
  return (
    <Fragment>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Your market place for high-quality{'  '}
            <span className='text-orange-500'>Digital Assets</span>.
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to DigitalHippo-Clone. Every Asset on our platform is
            verified by our Experienced Team to ensure our highest{' '}
            <span className='text-orange-500'>Quality</span> Standards.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>
              Browse Trending Products
            </Link>
            <Button variant='ghost'>Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/*  TODO: List Products */}
      </MaxWidthWrapper>
      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map(({ description, icon: Icon, name }) => (
              <div
                key={name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-900'>
                    {<Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </Fragment>
  )
}
