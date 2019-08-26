import React from "react";
import styled, { css, keyframes } from "styled-components";
import { setColor } from "../../styles";
const Banner = ({ className, title, text, children, greeting }) => {
    return (
        <div className={className}>
            <h1>
                {greeting} <span>{title}</span>{" "}
            </h1>
            <div className="info">
                <p>{text}</p>
                {children}
            </div>
        </div>
    );
};
const BannerWrapper = styled(Banner)`
    color: red;
`;
export default BannerWrapper;
