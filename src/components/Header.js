import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <>
      <div className=' flex  '>
        <Link href="/article">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu1oEoJ3q55LnA_8cV_hAlqbamc6IHcf-kTARxt-qnvenPhABCuNQ5pKSUJGBSELEgY0&usqp=CAU" className="md:h-24 sm:h-20 block cursor-pointer" />
        </Link>
        <div className='flex'>
          <ul className=' flex mt-9 ml-1 mb-6 md:ml-14 space-x-8 md:space-x-28 text-2xl text-blue-950 font-bold underline'>
            <li ><Link href="/">Home</Link></li>
            <li ><Link href="/about">About</Link></li>
            <li ><Link href="/article">Blogs</Link></li>
            <li ><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
