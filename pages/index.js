import { useEffect } from 'react';
import Layout from "@/components/Layout"
import StyledHome from "@/styles/StyledHome";
import horizontalLoop from '@/lib/utils/horizontalLoop';
import { gsap } from 'gsap';

export default function Home() {

    useEffect(() => {
        const boxes = gsap.utils.toArray(".loop__one");
        const loop = horizontalLoop(boxes, {paused: true, draggable: true });

        let progressWrap = gsap.utils.wrap(0, 1);

        document.addEventListener("wheel", e => {
        
  
        gsap.to(loop, {
            progress: `+=${e.deltaY * 0.0005}`,
            overwrite: true,
            modifiers: {
            progress: progressWrap
            }
        })
    });

    },[]);

    useEffect(() => {
        const boxes = gsap.utils.toArray(".loop__two");
        const loop = horizontalLoop(boxes, {paused: true, draggable: true });

        let progressWrap = gsap.utils.wrap(0, 1);

        document.addEventListener("wheel", e => {
        
  
        gsap.to(loop, {
            progress: `-=${e.deltaY * 0.0005}`,
            overwrite: true,
            modifiers: {
            progress: progressWrap
            }
        })
    });

    },[]);


  return (
    <>
        
    <StyledHome>
        <Layout title='Foodie | Home' description='Home page for the Foodie web app.'>
        <div className="home__hero"></div>
        <div className="overlay">
            <div className="heading">
                <h1>THE PLACE TO BE WHEN YOU'RE A...</h1>
            </div>
            <div className="wrapper">
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>
                <div className="item loop__one"><h2>FOODIE.</h2></div>   
            </div>
            <div className="wrapper">
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>
                <div className="item loop__two"><h2>FOODIE.</h2></div>   
            </div>
        </div>
        
        <div className="layout__container">
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium aut minima doloribus, tempore voluptatem. Expedita sint nam maxime facere facilis asperiores accusamus libero ab, nesciunt ipsam. Nulla, neque veritatis.</h1>
        </div>
        </Layout>
    </StyledHome>
    </>
  )
}
