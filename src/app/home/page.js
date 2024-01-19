'use client'


import React from 'react';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HomePage = () => {
    const pathname = usePathname();
    const isActive = pathname.startsWith('/')
  return (
    <>
    <section className='max-container flex justify-center'>
    <div>This is HomePage
    <Button className={`${isActive?'bg-theme':'bg-blue-500'} `}>
        <Link href='/' >Home Link</Link>
    </Button>
    </div>
    </section>
    </>
  )
}

export default HomePage