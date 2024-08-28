import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <BottomNav />
    </>
  )
}