import React from "react";
import { Link } from "react-router-dom";
import { toPeople, toPopularMovies } from "../../routes";
import Search from "./Search";
import {
    Nav,
    NavigationHeader,
    NavigationLink,
    NavigationLogoWrapper,
    NavigationTitle,
    NavigationWrapper,
    VideoIcon
} from "./styled";

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
                    <NavigationLink to={toPopularMovies}>Movies</NavigationLink>
                    <NavigationLink to={toPeople}>People</NavigationLink>
                </Nav>
                <Search />
            </NavigationWrapper>
        </NavigationHeader>
    );
};

export default Navigation;