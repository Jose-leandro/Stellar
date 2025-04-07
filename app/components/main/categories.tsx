import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Categories(categories) {
  return (
    <>
   <h1>Categories</h1>

  <div className='flex-col justify-end'>
    <Link>
      <button className='text-white border border-white bg-transparent py-2 px-3'>
        See All categories
      </button>
    </Link>

    <p className='mt-1'>One click away from everything Stellar has to offer.</p>
    </div>

    <div className='flex justify-evenly'>
      {categories.forEach(element => {
        <div>
          <Image src={element.src} alt={element.alt} width={100} height={100}/>

          <span>{element.title}</span>
        </div>
      })
      }
    </div>
    </>
  )
}
