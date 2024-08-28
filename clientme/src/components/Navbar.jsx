import ToggleTheme from "@/components/atoms/ToggleTheme"

const Navbar = () => {
  return (
    <>
      <div className="fixed navbar bg-base-100 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Mostrans</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="hidden md:flex lg:flex xl:flex"><a>Character List</a></li>
            <li className="hidden md:flex lg:flex xl:flex"><a>Location List</a></li>
            <li><ToggleTheme /> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar