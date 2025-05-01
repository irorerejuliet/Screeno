import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Menu from "./Menu";
import { NavLink } from "react-router";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState (false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className="bg-black relative text-white">
      <nav className=" flex justify-between items-center py-10  container mx-auto px-4 lg:px-0">
        <NavLink to="/">
          <img src="/images/logo.png" alt="logo" />
        </NavLink>
        <div className="hidden md:block">
          <Menu menuStyle={"flex  items-center space-x-6 uppercase"} />
        </div>
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-blue-600  rounded-[50px]">
            Create Account
          </button>
        </div>
        <button className="md:hidden block">
          <IoMdMenu fontSize={30} onClick={toggleMenu} />
        </button>
      </nav>

      {isOpen && (
        <nav className="fixed inset-0 z-50 h-full w-full bg-black text-white p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold" onClick={toggleMenu}>
              <NavLink to="/">
                <img src="/images/logo.png" alt="logo" />
              </NavLink>
            </h1>
            <button>
              <FaTimes fontSize={30} onClick={toggleMenu} />
            </button>
          </div>
          <Menu menuStyle="space-y-6 gap-6 uppercase" toggleMenu={toggleMenu} />
        </nav>
      )}
    </header>
  );
};

export default Navbar;
