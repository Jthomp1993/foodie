import { useEffect } from 'react';
import Layout from "@/components/Layout"
import FoodieItem from '@/components/FoodieItem';
import StyledHome from "@/styles/StyledHome";
import horizontalLoop from '@/lib/utils/horizontalLoop';
import { gsap } from 'gsap';
import { API_URL } from '@/config';

export default function Home({ eatData }) {

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
        <div className="home__hero">
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
        </div>
        
        <div className="layout__container">
            <div className="info__wrapper">
                <h2>Whether you're a seasoned foodie or simply looking for a great place to grab a bite, Foodie has got you covered. Our easy-to-use website features in-depth reviews, ratings, and recommendations that will help you make the most out of your culinary adventures.

                So why wait? Start exploring Europe's vibrant food scene with Foodie today!</h2>

                <div className="info__content">
                    <div className="info__item">
                        <h4>A place for food lovers.</h4>
                    </div>
                    <div className="info__item">
                        <p>Foodie is your go-to destination for discovering the best food and drinks across Europe. We are a team of passionate food lovers who believe that eating and drinking should be an experience that is savored and enjoyed. Our mission is to help food enthusiasts find new and exciting culinary destinations, and to share our love for great food with the world. With Foodie, you can explore Europe's rich culinary heritage and discover new and exciting flavors. Whether you're a seasoned foodie or simply looking for a great meal, we've got you covered. So join us on a journey of culinary discovery, and start exploring Europe's vibrant food scene with Foodie today!</p>
                    </div>
                </div>
            </div>

            <div className="featured__container">
                <h2 className='featured__heading'>EAT: FEATURED</h2>

                {eatData.length === 0 && (
                    <h4 className='featured__msg'>Sorry, no places to eat at the moment.</h4>
                )}

                {eatData.map((eat) => (
                    <FoodieItem key={eat.id} data={eat} />
                ))}
            </div>
        </div>

        </Layout>
    </StyledHome>
    </>
  )
}


export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/eat`);
    const eatData = await res.json();

    return {
        props: { eatData },
        revalidate: 1
    }
}