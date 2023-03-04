import styled from "styled-components";

const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    height: 100px;
    padding: 0px 15px;

    @media (min-width: 768px) {
        padding: 0px 25px;
    }

    @media (min-width: 1024px) {
        padding: 0px 40px;
    }

    a {
        text-decoration: none;
        color: var(--white);
    }

    .brand {
        a {
            font-family: var(--clash-bold);
            font-size: 40px;
            color: var(--pink);
        }
    }

    .nav__links {

        ul {
            display: flex;
            list-style: none;
        }

        li {
            display: flex;
            align-items: center;
            font-family: var(--clash-regular);
            color: var(--white);
            font-size: 18px;
            margin-left: 2rem;
        }

        .user {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            height: 40px;
            width: 40px;
            border: 2px solid var(--white);

            .icon {
                font-size: 22px;
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    .menu__toggle {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 40px;
        height: 15px;
        cursor: pointer;

        span {
            height: 2px;
            background-color: var(--white);
            transition: .6s;
            transform-origin: center;
        }

        @media (min-width: 768px) {
            display: none;
        }
    }

    .menu__toggle span:nth-child(1) {
        width: 100%;
    }

    .menu__toggle span:nth-child(2) {
        width: 80%;
    }

    .menu__toggle.active span {
        position: absolute;
        left: 0;
        width: 100%;

    }

    .menu__toggle.active span:nth-child(1) {
        top: 43%;
        transform: rotate(45deg);

    }

    .menu__toggle.active span:nth-child(2) {
        bottom: 43%;
        transform: rotate(-45deg);
    }
    
    
`;

export default StyledNavbar;