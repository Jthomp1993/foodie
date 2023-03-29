import { useRef, useState, useEffect } from 'react';
import StyledMenu from "@/styles/StyledMenu";
import Link from 'next/link';
import { gsap } from 'gsap';
import { BsArrowRight } from "react-icons/bs";


const Menu = (props) => {
    const [toggle, setToggle] = useState(false);
    const [d, setD] = useState("M 0 100 L 100 100 100 100 0 100 C 0 0, 0 0, 0 100");
    const animateRef = useRef();
    const menuRef = useRef();
    const elementRef = useRef();
    

    useEffect(() => {
        const button = document.querySelector('.menu__toggle');
        button.addEventListener('click', () => {
            setToggle(!toggle);
        });

    }, []);

    useEffect(() => {
    gsap.set('.menu__link', { yPercent: 100 });
    gsap.set('.copyright__content', { yPercent: 100 });
    const list = document.querySelector('.menu__list');


    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    if(toggle) {
    if (props.isOpen) {
        list.classList.remove('active');
        let y = 100;
        let c = 100;
        function animate() {
        
        y = lerp(y, 0, .055);
        c = lerp(c, 0, 0.075);
        setD(`M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`);
        animateRef.current = requestAnimationFrame(animate);
        }
        animateRef.current = requestAnimationFrame(animate);

        gsap.to('.menu__link', { yPercent: 0, duration: .9, delay: .6, ease: 'expo.out', stagger: .05 });
        gsap.to('.copyright__content', { yPercent: 0, duration: .9, delay: .3, ease: 'expo.out' });

    } else {
        gsap.set('.menu__link', { yPercent: 0 });
        gsap.set('.copyright__content', { yPercent: 0 });
        gsap.to('.menu__link', { yPercent: 100, duration: .9, ease: 'expo.out', stagger: .05 });
        gsap.to('.copyright__content', { yPercent: 100, duration: .9, ease: 'expo.out' });
        
        setTimeout(() => {
            let y = 0;
            let c = 0;
            function animate() {
            y = lerp(y, 100, .055);
            c = lerp(c, 100, 0.075);
            setD(`M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`);
            animateRef.current = requestAnimationFrame(animate);
            }
            animateRef.current = requestAnimationFrame(animate);

        }, 300);
        setTimeout(() => {
            list.classList.add('active');
        }, 500);
    }
    }

    return () => cancelAnimationFrame(animateRef.current);

    }, [props.isOpen]);

    const handleMouseEnter = (e) => {
        const element = e.currentTarget;
        gsap.to(element, {
            xPercent: 5,
            color: '#ffffff',
            duration: .5,
        });
    }

    const handleMouseLeave = (e) => {
        const element = e.currentTarget;
        gsap.to(element, {
            xPercent: 0,
            color: '#131313',
            duration: .6,
        });
    }
    

  return (
    <StyledMenu ref={menuRef}>
        <svg className="transition" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path className="path" fill="#E76D67" vectorEffect="non-scaling-stroke"
            d={d} />
        </svg>
        <div className="menu__wrapper">
        <ul className='menu__list active'>
            <li>
                <Link className='menu__link' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                href='/eat'>
                    <div>
                    EAT <BsArrowRight className='arrow' />
                    </div>
                </Link>
            </li>
            <li>
                <Link ref={elementRef} className='menu__link' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                href='/drink'>DRINK <BsArrowRight className='arrow' /></Link>
            </li>
            <li>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className='menu__link' href='/review'>REVIEW <BsArrowRight className='arrow' /></Link>
            </li>
            <li>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className='menu__link' href='/about'>ABOUT <BsArrowRight className='arrow' /></Link>
            </li>
            <li>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className='menu__link' href='/profile'>PROFILE <BsArrowRight className='arrow' /></Link>
            </li>
            <li>
                <Link onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
                className='menu__link' href='/restaurants'>SIGN OUT <BsArrowRight className='arrow' /></Link>
            </li>
        </ul>
        <div className="copyright__wrapper">
            <h2 className='copyright__content'>Foodie ©2023</h2>
        </div>
        </div>
    </StyledMenu>
  )
}

export default Menu;
