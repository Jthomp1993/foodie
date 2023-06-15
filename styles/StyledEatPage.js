import styled from "styled-components";
import img from '@/public/assets/liquid.jpg';

const StyledEatPage = styled.div`

    .eat__hero {
        position: relative;
        height: 60vh;
        background-image: url(${img.src});
        background-position: center;
        background-size: cover;
        margin-bottom: 5rem;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,30%);
        display: flex;
        align-items: end;
        padding: 0 15px;

        @media (min-width: 768px) {
            padding: 0px 25px;
        }

        @media (min-width: 1024px) {
            padding: 0px 40px;
        }

        .hero__heading {
            width: 80vw;
            margin-bottom: 2rem;
            
            @media(min-width: 1024px) {
                width: 60vw;
            }
            
            h2 {
                font-family: var(--clash-regular);
                color: var(--white);
                font-size: clamp(30px, 7vw, 96px);
                line-height: 1;
                margin: 0;
            }

            h3 {
                margin: 0;
                font-family: var(--clash-bold);
                color: var(--pink);
                font-size: clamp(32px, 7vw, 96px);
                line-height: 1;
            }
        }
    }
`;

export default StyledEatPage;