import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import { Nav, NavigationHeader, NavigationLink, NavigationLogoWrapper, NavigationTitle, NavigationWrapper, VideoIcon } from "./styled";

const Navigation = () => {

    return (
        <NavigationHeader>
            <NavigationWrapper>
                <NavigationLogoWrapper>
                    <Link to="/">
                        <VideoIcon />
                    </Link>
                    <NavigationTitle>Movie Browser</NavigationTitle>
                </NavigationLogoWrapper>
                <Nav>
                    <NavigationLink to="/movies">Movies</NavigationLink>
                    <NavigationLink to="/people">People</NavigationLink>
                </Nav>
                <Search />
            </NavigationWrapper>
        </NavigationHeader>
    );
};

export default Navigation;