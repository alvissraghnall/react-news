import React, { useState, Dispatch } from 'react';
import {HamburgerIcon, XIcon} from "./icons";
import Sidebar from "./Sidebar";

type NavbarProps = {
  selectedChannel: string,
  setSelectedChannel: Dispatch<React.SetStateAction<string>>
}

const Navbar = ({ selectedChannel, setSelectedChannel }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);
  const changeToggle = () => setToggle(!toggle);
  
  return (
    <>
    <header className='fixed h-14 w-full text-base font-bold bg-purple-600 flex justify-start items-center'>
        <div onClick={changeToggle} className="cursor-pointer w-[50px] h-[50px]">
            { !toggle ? <HamburgerIcon /> : <XIcon /> }
        </div>
        <span>Xe-News</span>
    </header>
    <Sidebar toggle={toggle} setToggle={setToggle} selectedChannel={selectedChannel} setSelectedChannel={setSelectedChannel} />
    </>
  )
}

export default Navbar;