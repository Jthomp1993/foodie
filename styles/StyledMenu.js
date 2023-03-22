import styled from "styled-components";

const StyledMenu = styled.div.attrs({
    className: 'menu__container',
})`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    min-width: 100%;
    width: 100%;
    z-index: 9;
    padding: 100px 15px 0px 15px;

    @media (min-width: 768px) {
        padding: 100px 25px 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 100px 40px 0px 40px;
    }

    .transition {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .menu__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        height: 100%;
    }

    ul {
        position: relative;
        list-style: none;
        padding: 0;
    }

    li {
        margin: 0;
        line-height: 0.8;
        overflow: hidden;
    }

    .menu__link {
        display: flex;
        align-items: center;
        font-family: var(--clash-semibold);
        font-size: clamp(8px, 15vw, 90px);
        color: var(--dark);
        cursor: pointer;
        text-decoration: none;
        padding-right: 2rem;
    }

    .arrow {
        font-size: clamp(8px, 10vw, 72px);
    }

    .copyright__wrapper {
        overflow: hidden;
        padding: 0;
        margin-bottom: 1rem;

        h2 {
            font-family: var(--clash-semibold);
            font-size: clamp(8px, 10vw, 72px);
            color: var(--white);
            float: right;
            margin: 0;
            padding: 0;
        
        }
    }

    .active {
        display: none;
    }

`;

export default StyledMenu;