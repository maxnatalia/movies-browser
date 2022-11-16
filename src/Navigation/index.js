import React from "react";
import Search from "./Search";
import { Nav, NavigationHeader, NavigationLink, NavigationLogoWrapper, NavigationTitle, NavigationWrapper, VideoIcon } from "./styled";

const Navigation = () => {

    return (
        <NavigationHeader>
            <NavigationWrapper>
                <NavigationLogoWrapper>
                    <VideoIcon />
                    <NavigationTitle>Movie Browser</NavigationTitle>
                </NavigationLogoWrapper>
                <Nav>
                    <NavigationLink>Movies</NavigationLink>
                    <NavigationLink>People</NavigationLink>
                </Nav>
                <Search />
            </NavigationWrapper>
        </NavigationHeader>
    );
};

export default Navigation;