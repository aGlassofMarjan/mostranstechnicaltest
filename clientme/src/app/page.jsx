import Image from "next/image";

import { ScrollText, MapPinned } from 'lucide-react';
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto p-4 pt-28">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card bg-base-100 rounded-md border border-primary">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Rick</h2>
              <p>Status: Alive</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Detail</button>
              </div>
            </div>

          </div>
          <div className="bg-gray-300 h-40">
          </div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
          <div className="bg-gray-300 h-40"></div>
        </div>
      </div>

      <BottomNav />
    </>


  );
}
