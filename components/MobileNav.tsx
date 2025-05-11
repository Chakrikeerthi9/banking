'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface MobileNavProps {
    loggedIn: {
        FirstName: string;
        LastName: string;
    }
}
const MobileNav = ({loggedIn}: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
            <Image src="/icons/burger-menu.svg" width={30} height={30} alt="menu icon" />
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-white p-5'>
        <Link
             href="/"
             className="mb-2 cursor-pointer items-center gap-1 flex">
                <img src="/icons/logo.svg" alt="Vaultsy logo" width={32} height={32} />
                <h1 className='text-26 font-bold text-black-1 font-geist-sans'>
                   Vaultsy
                </h1>
            </Link>

            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                    {
                        sidebarLinks.map((item)=>{
                            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                            return(
                                <SheetClose asChild key={item.label}>

                                <Link href={item.route}
                                key={item.label}
                                className={cn('mobilenav-sheet_close w-full', {
                                    'bg-bank-gradient': isActive
                                })}
                                >
                                    <Image 
                                    src={item.imgURL}
                                    alt={item.label} 
                                    width={20}
                                    height={20}
                                    className={
                                        cn({
                                            'brightness-[3] invert-0': isActive
                                        })
                                    }
                                    />
                                    <p className={cn(
                                        'text-16 font-semibold text-black-2',{
                                            'text-white': isActive
                                        }
                                    )}>
                                        {item.label}
                                    </p>
                                </Link>
                                    </SheetClose>
                            )
                        } )
                        }
                        USER
                    </nav>
                </SheetClose>
                FOOTER
            </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileNav
