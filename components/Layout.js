import Head from "next/head";
import styled from "styled-components";

const StyledLayout = styled.div`

    padding: 0px 15px;

    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 0px 40px;
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
      
      { children }
    </StyledLayout>
  )
}

Layout.defaultProps = {
    keywords: 'food, drink, eating, dining, travel, reviews, cuisine, restaraunts, destinations'
}

export default Layout;


