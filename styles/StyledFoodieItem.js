import styled from "styled-components";

const StyledFoodieItem = styled.div.attrs({
    className: 'foodie__item'
})`
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--dark-grey);
    padding: 0 10px;
    transition: .5s;

    @media (min-width: 768px) {
        padding: 0 2rem;
    }

    .item__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 2rem 0;
    }

    .content {
        display: flex;
    }

    .img__wrapper {
        position: relative;

        img {
            border-radius: 10px;
        }

        @media(max-width: 768px) {
            display: none;
        }
    }

    .img__overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,40%);
        border-radius: 10px;
        transition: .5s;
    }

    .info {
        width: 100%;

        @media (min-width: 768px) {
            margin-left: 3rem;
        }

        .name {
            font-family: var(--clash-bold);
            font-size: clamp(7px, 7vw, 40px);
            margin: 0;
        }

        .info__item {
            display: flex;
            align-items: center;

            h5 {
                font-family: var(--clash-light);
                font-size: clamp(7px, 5vw, 24px);
                margin: 0;

            }

            p {
                font-family: var(--clash-light);
                font-size: clamp(7px, 5vw, 18px);
                margin: 0px 0px 0px 1rem;
                font-size: 18px;
            }
        }
        
    }

    .arrow {
        svg {
            font-size: clamp(24px, 10vw, 78px);
        }
    }

    a {
        text-decoration: none;
    }
`;

export default StyledFoodieItem;