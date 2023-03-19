import { useState, useRef } from 'react';
import StyledNavbar from "@/styles/StyledNavbar";
import Link from "next/link";
import Menu from './Menu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActive(!active);
    }

  return (
    <>
    <StyledNavbar>
        <div className="brand">
            <Link href='/'>Foodie</Link>
        </div>
        <div onClick={toggleMenu} className={`menu__toggle ${active ? 'active' : ''}`}>
            <span></span>
            <span></span>
        </div>
    </StyledNavbar>
    
        <Menu isOpen={isOpen} />
    </>
  )
}

export default Navbar;
