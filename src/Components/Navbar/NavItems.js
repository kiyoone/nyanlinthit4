'use client'
const navLinks = [
  {
    name:'HOME',
    href:'/' || '/home',
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
import Headroom from 'react-headroom';
import { usePathname } from 'next/navigation';

import { Dropdown } from 'flowbite-react';

const NavItems = () => {
  const pathname = usePathname();
  
  return (
    <Headroom style={{zIndex:100,backgroundColor:'white'}}>
    <nav className='max-container h-[80px] border-b-2 flex justify-between items-center px-6'>
      <Link href='/'>
        <Image src={Logo} alt='Logo' width={80} height={80} />
      </Link>

      <div className=' w-auto h-full  flex   items-center space-x-4 '>
      {
        navLinks.map((link,index) => {

          if (link.dropdown) {
            return (
              <div className=' text-base font-semibold text-theme'>
              <Dropdown
                key={index}
                label={link.name}
                arrowIcon={true}
                inline={true}
                dismissOnClick={false}
                
              >
                {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
                  <Dropdown.Item key={dropdownIndex}
                  className={` rounded-lg px-4 py-2 text-center `}>
                    <Link href={dropdownLink.href}
                      className= {` text-base font-semibold text-theme  `} >
                      
                        {dropdownLink.name}
                      
                    </Link>
                  </Dropdown.Item>
                ))}
              </Dropdown>
              </div>
            );
          } else {
          
          return(
            <div className={`${pathname === link.href ? 'bg-theme border-theme ' : 'bg-white border-white hover:bg-gray-100' }  border-2  rounded-lg text-base font-semibold px-4 py-2  transition-all duration-300`}>
            <Link href={link.href} key={index}
            className={`${pathname === link.href ? 'text-white' : 'text-theme' }  `}
            >
            {link.name}
            </Link>
            </div>
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
    </Headroom>
  )
}

export default NavItems;




