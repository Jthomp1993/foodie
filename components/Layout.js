import Head from "next/head";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledLayout = styled.div`

    .layout__container {
        padding: 100px 15px;

        @media (min-width: 768px) {
            padding: 100px 25px;
        }

        @media (min-width: 1024px) {
            padding: 100px 40px;
        }
    }

`;

const Layout = ({ title, keywords, description, children }) => {
  return (
    <StyledLayout>
        <Head>
            <title>{title}</title>
            <meta name='keywords' keywords={keywords} />
            <meta name='description' keywords={description} />
        </Head>

        <Navbar />
        
        <div className="layout__container">
            { children }
        </div>
    </StyledLayout>
  )
}

Layout.defaultProps = {
    keywords: 'food, drink, eating, dining, travel, reviews, cuisine, restaraunts, destinations'
}

export default Layout;


