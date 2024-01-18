'use client'
const navLinks = [
  {
    name:'HOME',
    href:'/',
  },
  {
    name:'DASHBOARD',
    href:'/dashboard',
  },
  {
    name:'RESOURCE',
    dropdown:true,
    dropdownLinks:[
      {
        name:'Weekly Highlighs',
        href:'/resources/weekly_highlights'
      },
      {
        name:'Publication',
        href:'/resources/publication',
      },
      {
        name:'Statements',
        href:'/resources/statements',
      },
      {
        name:'Advocacy',
        href:'/resources/advocacy',
      }

    ]
  },
  {
    name:'ABOUT US',
    href:'/aboutus',
  }
]

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/nltLogo.png';
import { usePathname } from 'next/navigation';

import { Dropdown,Button } from 'flowbite-react';

const NavItems = () => {
  const pathname = usePathname();
  
  return (
    <nav className='bg-red-300 max-container h-[80px] border-b-2 flex justify-between items-center px-6'>
      <Link href='/'>
        <Image src={Logo} alt='Logo' width={80} height={80} />
      </Link>
      <div className=' flex flex-row items-center '>
      {navLinks.map((link,index) => {
        
        
        if (link.dropdown) {
          return (
            <div className='text-base'>
            <Dropdown
              key={index}
              label={link.name}
              arrowIcon={true}
              inline={true}
              dismissOnClick={false}
              
              
            >
              {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
                <Dropdown.Item key={dropdownIndex}>
                  <Link href={dropdownLink.href}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
                    
                      {dropdownLink.name}
                    
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown>
            </div>
          
          );
        } else {
          return(
           <Button className={pathname.startsWith(link.href)?  'bg-white text-[#193967]' : 'bg-[#193967] text-white'} >
            <Link href={link.href} key={index}
            
             

           >
               
              {link.name}
              
            </Link>
            </Button>
          )
        }
      }
      

      )

      
      }
      </div>
      
    <Link href='/'>
        <Image src={Logo} alt='Logo' width={80} height={80} />
      </Link>

    </nav>
  )
}

export default NavItems