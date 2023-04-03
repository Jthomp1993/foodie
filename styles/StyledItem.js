import styled from "styled-components";

const StyledItem = styled.div`

    .featured__container {
        
        .featured__heading {
            color: var(--white);
            font-family: var(--clash-light);
            font-size: clamp(7px, 7vw, 32px);
        }

        h4 {
            font-family: var(--clash-regular);
            font-size: clamp(8px, 5vw, 18px);
            color: var(--white);

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

export default StyledItem;