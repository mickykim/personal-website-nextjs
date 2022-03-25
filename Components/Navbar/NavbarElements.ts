import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { Props } from "./index";

interface PropsStyled extends Props {
    scrollNav?: boolean;
}

export const Header = styled.header<PropsStyled>`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    background-color: ${(props) =>
        props.scrollNav ? props.theme.primaryNavbar : "transparent"};
    /* background-color: transparent; */

    z-index: 10;
    margin-top: -66px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* max-width: 1100px; */
    height: 66px;
`;

export const Logo = styled(Link)`
    display: inline-block;
    border: 3px solid ${(props) => props.theme.primaryTextDark};
    padding: 0rem 0.25rem 0.25rem 0.25rem;
    text-decoration: none;
    font-weight: 900;
    font-size: 1.5rem;
    color: ${(props) => props.theme.primaryTextDark};
    margin-left: 1.6rem;

    @media screen and (max-width: 768px) {
        display: none;
    }

    &:hover {
        color: ${(props) => props.theme.primaryTextDarkHover};
        border: 3px solid ${(props) => props.theme.primaryTextDarkHover};
    }
`;

export const MobileLogo = styled(Link)`
    display: none;
    border: 3px solid ${(props) => props.theme.primaryTextDark};
    padding: 0.2rem 0.5rem;
    text-decoration: none;
    font-weight: 900;
    font-size: 1rem;
    margin-left: 0.8rem;
    color: ${(props) => props.theme.primaryTextDark};
    @media screen and (max-width: 768px) {
        display: inline-block;
    }

    &:hover {
        color: ${(props) => props.theme.primaryTextDarkHover};
        border: 3px solid ${(props) => props.theme.primaryTextDarkHover};
    }
`;

export const NavbarMenu = styled.ul`
    list-style-type: none;
    display: flex;
    margin-right: 1.6rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavbarItem = styled.li`
    height: 63px;
`;

export const NavbarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1.2rem;
    color: ${(props) => props.theme.primaryTextDark};
    border-bottom: 3px solid transparent;

    cursor: pointer;
    &.active {
        border-bottom: 3px solid ${(props) => props.theme.primaryTextDark};
    }
    &:visited {
        color: black;
    }
    &:hover {
        color: ${(props) => props.theme.primaryTextDarkHover};
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        margin-right: 1rem;
        cursor: pointer;
        font-size: 1.2rem;
        color: ${(props) => props.theme.primaryTextDark};
    }
`;
