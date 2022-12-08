import React from "react";
import { toPeople, toPopularMovies } from "../../core/routes";
import Search from "./Search";
import {
    Nav,
    NavigationHeader,
    NavigationLink,
    NavigationLogoWrapper,
    NavigationTitle,
    NavigationWrapper,
    VideoIcon,
    StyledLink,
} from "./styled";

const Navigation = () => {

    return (
        <NavigationHeader>
            <NavigationWrapper>
                <NavigationLogoWrapper>
                    <StyledLink to="/">
                        <VideoIcon />
                        <NavigationTitle>Movie Browser</NavigationTitle>
                    </StyledLink>
                </NavigationLogoWrapper>
                <Nav>
                    <NavigationLink to={toPopularMovies}>Movies</NavigationLink>
                    <NavigationLink to={toPeople}>People</NavigationLink>
                </Nav>
                <Search />
            </NavigationWrapper>
        </NavigationHeader>
    );
};

export default Navigation;