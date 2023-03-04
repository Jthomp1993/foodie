import { useState } from 'react';
import StyledNavbar from "@/styles/StyledNavbar";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    }

  return (
    <StyledNavbar>
        <div className="brand">
            <Link href='/'>Foodie</Link>
        </div>
        <div className="nav__links">
            <ul>
                <li>
                    <Link href='/restaraunts'>Restaraunts</Link>
                </li>
                <li>
                    <Link href='/reviews'>Review</Link>
                </li>
                <li>
                    <div className="user">
                        <AiOutlineUser className="icon" />
                    </div>
                </li>
            </ul>
        </div>
        <div onClick={toggleActive} className={`menu__toggle ${active ? 'active' : ''}`}>
            <span></span>
            <span></span>
        </div>
      
    </StyledNavbar>
  )
}

export default Navbar;
