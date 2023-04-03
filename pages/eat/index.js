import Layout from "@/components/Layout";
import FoodieItem from "@/components/FoodieItem";
import StyledItem from "@/styles/StyledItem";
import StyledEatPage from "@/styles/StyledEatPage";
import { API_URL } from '@/config';

function EatPage({ eatData }) {
  return (
    <Layout>
        <StyledEatPage>
            <div className="eat__hero">
                <div className="overlay">
                    <div className="hero__heading">
                        <h2>FIND PLACES TO EAT, FIT FOR A...</h2>
                        <h3>FOODIE.</h3>
                    </div>
                </div>
            </div>
        <div className="layout__container">
            <StyledItem>
            <div className="featured__container">

                {eatData.length === 0 && (
                    <h4 className='featured__msg'>Sorry, we have no restaurants to show you at the moment.</h4>
                )}

                {eatData.map((eat) => (
                    <FoodieItem key={eat.id} data={eat} />
                ))}
            </div>
            </StyledItem>
        </div>
        </StyledEatPage>
    </Layout>
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

export default EatPage;
