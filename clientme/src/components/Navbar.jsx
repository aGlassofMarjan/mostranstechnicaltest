import ToggleTheme from "@/components/atoms/ToggleTheme"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <div className="fixed navbar bg-base-100 z-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Mostrans</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="hidden md:flex lg:flex xl:flex"><Link href={"/character-list"}>Character List</Link></li>
            <li className="hidden md:flex lg:flex xl:flex"><Link href={"/character-by-location"}>Location List</Link></li>
            <li><ToggleTheme /> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar