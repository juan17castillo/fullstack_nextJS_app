import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import NavItems from './NavItems';

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-mid">
          <Image
            className="cursor-pointer"
            src="assets/icons/menu.svg"
            width={24}
            height={24}
            alt="Menu"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently Logo"
          />
          <Separator className='border border-gray-50' />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
