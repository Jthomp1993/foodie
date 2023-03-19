import { useEffect } from 'react';
import Head from "next/head";
import styled from "styled-components";
import Navbar from "./Navbar";
import Lenis from "@studio-freight/lenis";

const StyledLayout = styled.div`

    .layout__container {
        padding: 0px 15px;

        @media (min-width: 768px) {
            padding: 0px 25px;
        }

        @media (min-width: 1024px) {
            padding: 0px 40px;
        }
    }

`;

const Layout = ({ title, keywords, description, children }) => {

    useEffect(() => {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    },[]);

  return (
    <StyledLayout>
        <Head>
            <title>{title}</title>
            <meta name='keywords' keywords={keywords} />
            <meta name='description' keywords={description} />
        </Head>

        <Navbar />
        
        { children }
        
    </StyledLayout>
  )
}

Layout.defaultProps = {
    keywords: 'food, drink, eating, dining, travel, reviews, cuisine, restaraunts, destinations'
}

export default Layout;


