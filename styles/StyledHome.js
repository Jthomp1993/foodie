import styled from "styled-components";
import img from "@/public/assets/liquid.jpg";

const StyledHome = styled.div`

    .home__hero {
        position: relative;
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

    .info__wrapper {
        margin-top: 10rem;
        font-family: var(--clash-semibold);
        color: var(--white);

        h2 {
            font-size: clamp(8px, 7vw, 48px);
            line-height: 0.85;
            text-indent: 5rem;
        }

        .info__content {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top: 4rem;

            @media (min-width: 768px) {
                flex-direction: row;
                margin-right: 4rem;
                margin-top: 5rem;
            }

            .info__item:nth-of-type(1) {
                font-size: clamp(8px, 7vw, 32px);
                color: var(--white);
                line-height: 0.9;
                

                @media (min-width: 768px) {
                    margin-right: 2rem;
                    max-width: 250px;
                }

                h4 {
                    margin: 0;
                }
            }

            .info__item:nth-of-type(2) {
                font-family: var(--clash-regular);
                
                
                @media (min-width: 768px) {
                    max-width: 375px;

                    p {
                        margin: 0;
                    }
                }
            }

        } 
    }

    .featured__container {
        margin-top: 5rem;

        @media (min-width: 768px) {
            margin-top: 10rem;
        }

        .featured__flex {
            display: flex;
        }

        .featured__heading {
            color: var(--white);
            font-size: clamp(7px, 7vw, 32px);
        }

        .featured__heading:nth-of-type(1) {
            font-family: var(--clash-bold);
        }

        .featured__heading:nth-of-type(2) {
            font-family: var(--clash-light);
            margin-left: 12px;
        }

        h4 {
            font-family: var(--clash-regular);
            font-size: clamp(8px, 5vw, 18px);
            color: var(--white);

        }

        .featured__link {
            float: right;
            margin-top: 3rem;
        }
    }

    .color {
        color: var(--dark-grey);
        transition: .5s;
    }

    .foodie__item:hover {
        border-bottom: 1px solid var(--white);

        @media (min-width: 768px) {
            padding: 0 2.5rem;
        }

        .color {
            color: var(--white);
        }

        .img__overlay {
            background-color: rgba(0,0,0,0);
        }
    }
`;

export default StyledHome;