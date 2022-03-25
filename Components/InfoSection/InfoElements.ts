import styled from "styled-components";

import { Props } from "./index";

export const InfoContainer = styled.div<Props>`
    color: #000;
    background: ${(props) =>
        props.colorTheme ? props.theme.trueWhite : props.theme.trueWhite};
`;

export const InfoWrapper = styled.div<Props>`
    padding: ${(props) => (props.topText ? "2rem 0rem" : "0rem")};
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;

    @media screen and (max-width: 1024px) {
        max-width: 700px;
    }
    @media screen and (max-width: 600px) {
        max-width: 450px;
    }
`;

export const TitleWrapper = styled.div`
    position: relative;
    left: 12.5%;
    border-bottom: 2px solid #ccc;
    width: 75%;
    margin-top: 5rem;
    margin-bottom: 3rem;
`;

export const TopText = styled.p<Props>`
    color: ${(props) => props.theme.secondaryText};
    font-size: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    background-color: #fff;
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid #ccc;
    padding: 5px;

    @media screen and (max-width: 1024px) {
        margin-left: -0.5rem;
    }
`;

export const Row = styled.div<Props>`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-auto-rows: minmax(auto, 1fr);

    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-template-areas: ${(props) =>
        props.reverse ? `"col1 col2"` : `"col2 col1"`};

    grid-column-gap: 5rem;
    @media screen and (max-width: 1024px) {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas: "col1" "col2";

        padding-top: 1rem;
    }
`;

export const Column1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    grid-area: col1;
    height: 100%;
    width: 600px;
    @media screen and (max-width: 1024px) {
        align-items: center;
        max-width: 100vw;
    }
    @media screen and (max-width: 600px) {
        align-items: center;
        max-width: 100vw;
    }
`;

export const Column2 = styled.div`
    display: flex;
    margin-bottom: 1rem;
    height: 100%;
    grid-area: col2;
    margin-top: 2rem;
    width: 600px;
    @media screen and (max-width: 1024px) {
        padding-bottom: 1.5rem;
        max-width: 100vw;
        justify-content: center;
    }
    @media screen and (max-width: 600px) {
        align-items: center;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
        padding-bottom: 1.5rem;
    }
`;

export const Heading = styled.h1<Props>`
    display: inline-block;
    color: #3377cc;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.2rem;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 1.8rem;
        margin-bottom: 1.2rem;
        width: 300px;
        text-align: center;
    }

    @media screen and (max-width: 1024px) {
        text-align: center;
    }
`;
export const Subtext = styled.h2`
    width: 100%;
    font-weight: 500;
    color: #5e9516;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
        text-align: center;
        padding: 0 1.3rem;
    }
    @media screen and (max-width: 600px) {
        font-size: 1.3rem;
    }
`;

export const Subtitle = styled.h3<Props>`
    display: inline-block;
    color: ${(props) => props.theme.primaryText};
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0 auto;
    text-indent: 1.3rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
        padding: 0 1.3rem;
    }
`;

export const ImgWrap = styled.div`
    height: 100%;
    max-width: 550px;

    @media screen and (max-width: 1024px) {
        padding: 0 1.3rem;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
`;
