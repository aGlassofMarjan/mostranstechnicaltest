import Image from "next/image";

import { ScrollText, MapPinned } from 'lucide-react';
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-mono">Mostrans <br /> Technical <br /> Test</p>
          <Link href={'/character-list'}>
            <button className="btn btn-secondary">Start App</button>
          </Link>
        </div>
      </div>
    </>


  );
}
