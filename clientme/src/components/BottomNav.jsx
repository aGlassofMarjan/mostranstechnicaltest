"use client";

import { ScrollText, MapPinned } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNav = () => {
  const router = usePathname();

  return (
    <div className="btm-nav md:hidden lg:hidden xl:hidden">
      <Link href="/character-list">
        <button className={router.pathname === '/character-list' ? 'active' : ''}>
          <ScrollText />
        </button>
      </Link>

      <Link href="/character-by-location">
        <button className={router.pathname === '/character-by-location' ? 'active' : ''}>
          <MapPinned />
        </button>
      </Link>
    </div>
  );
};

export default BottomNav;
