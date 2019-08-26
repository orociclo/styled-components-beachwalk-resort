import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";

const Header = () => {
    return (
        <Hero img={homeImg}>
            <h1>Hello World</h1>
        </Hero>
    );
};

export default Header;
