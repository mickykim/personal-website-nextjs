import React from "react";
import { NavbarItem, NavbarLink, NavbarMenu } from "./NavbarElements";

export interface Props {
    headerOffset: number;
}

const NavigationLinks: React.FC<Props> = ({ headerOffset }) => {
    return (
        <NavbarMenu>
            <NavbarItem>
                <NavbarLink
                    to="main"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    offset={headerOffset}
                >
                    Home
                </NavbarLink>
            </NavbarItem>
            <NavbarItem>
                <NavbarLink
                    to="section1"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={headerOffset}
                >
                    Explore
                </NavbarLink>
            </NavbarItem>
            <NavbarItem>
                <NavbarLink
                    to="section2"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={headerOffset}
                >
                    Analyze
                </NavbarLink>
            </NavbarItem>
            <NavbarItem>
                <NavbarLink
                    to="section3"
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={headerOffset}
                >
                    Enjoy
                </NavbarLink>
            </NavbarItem>
        </NavbarMenu>
    );
};

export default NavigationLinks;
