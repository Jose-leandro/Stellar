import React from 'react'
import Separator from '../ui/separator'

export default function Main(): React.JSX.Element {
    return (
        <div className='flex justify-around w-full'>
            <section className='mt-5 mb-2 w-2/5 flex justify-center flex-col'>
                <h1 className='text-6xl font-medium ml-2 mt-2 w-auto'>Discover Stellar: Connecting You to a World of Opportunities</h1>
                <p className=' ml-3 mt-2 w-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet consectetur, adipisicing elit.</p>
            </section>

            <section className='mt-5 mb-2 w-2/5 flex justify-center flex-col'>
                <h1 className='text-4xl font-medium w-auto ml-2 mt-2'>Discover Good Stellar</h1>
                <Separator />

                <div className='flex justify-between'>
                    <p className='w-1/2 1 ml-2 mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet consectetur, adipisicing elit.</p>
                    <p className='w-1/2 1 ml-2 mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. amet consectetur, adipisicing elit.</p>
                </div>
            </section>
        </div>
    )
}
