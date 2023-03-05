import styled from "styled-components";
import img from "@/public/assets/liquid.jpg";

const StyledHome = styled.div`

    .home__hero {
        height: 100vh;
        width: 100%;
        background-color: var(--pink);
        background-image: url(${img.src});
        background-position: center;
        background-size: cover;
    }


    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,35%);

    }

    .heading {
        padding: 0px 15px;
        margin-top: 100px;
        font-family: var(--clash-light);
        font-size: clamp(26px, 5vw, 60px);
        color: var(--white);
        line-height: 1;

        h1 {
            margin: 0;
        }

        @media (min-width: 768px) {
            padding: 0px 25px;
        }

        @media (min-width: 1024px) {
            padding: 0px 40px;
        }
    }

    .wrapper {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--clash-bold);
        font-size: 120px;
        color: var(--pink);
        margin: 0;
        margin-right: 2rem;
        padding: 0;
        position: relative;

        h2 {
            margin: 0;
            line-height: 0.9;
        }
        
    }
`;

export default StyledHome;