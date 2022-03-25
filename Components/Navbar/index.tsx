import React, { useState, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";
import {
    HeaderContainer,
    Logo,
    Header,
    MobileIcon,
    MobileLogo,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

export interface Props {
    toggleSidebar?: () => void;
    small?: boolean;
    logoLink?: string;
}

const Navbar: React.FC<Props> = ({ toggleSidebar, logoLink = "main" }) => {
    const [scrollNav, setScrollNav] = useState<boolean>(false);

    const toggleScrollNav = () => {
        // Amount scrolled vertically
        if (window.scrollY > 300) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", toggleScrollNav);
    }, []);

    return (
        <Header scrollNav={scrollNav}>
            <HeaderContainer>
                <Logo to={logoLink}>HikingWeather</Logo>
                <MobileLogo to={logoLink}>HW</MobileLogo>
                <NavigationLinks headerOffset={70} />
                <MobileIcon>
                    <FaBars onClick={toggleSidebar} />
                </MobileIcon>
            </HeaderContainer>
        </Header>
    );
};

export default Navbar;
