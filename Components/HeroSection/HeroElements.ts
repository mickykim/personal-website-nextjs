import styled from "styled-components";

export const HeroWrapper = styled.div`
    height: 100vh;
    width: 100%;
`;

// -------- Intro Elements ---------
export const IntroContainer = styled.div`
    background: #69b251;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;

export const IntroText = styled.div`
    color: white;
    font-size: 2rem;
    text-align: center;
`;

export const HideText = styled.h1`
    overflow: hidden;
`;

export const SpanText = styled.span`
    transform: translateY(100%);
    display: inline-block;
`;

export const Slider = styled.div`
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
`;

// -------- HeroSection Elements -----
export const HeroContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-content: center;
    background-color: ${(props) => props.theme.trueWhite};
    background-image: /* Background image filter */ linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 100%
        ),
        linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0%, transparent 100%),
        /* Actual Image */ url("images/mickyHero.webp");
    background-position: center;
    background-size: cover;
`;

export const ImageBackground = styled.picture`
    max-width: 100%;
    width: 100vw;
    overflow: hidden;
    z-index: 1;

    @media screen and (max-width: 1024px) {
    }
`;

export const Source = styled.source`
    width: 100vw;
    height: auto;
    max-width: 100%;
`;

export const Image = styled.img`
    width: 100vw;
    height: auto;
    max-width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    /* max-width: 1200px; */
    padding: 3.5rem 2.5rem;
    z-index: 2;
    color: ${(props) => props.theme.primaryTextDark};
`;

export const TextWrapper = styled.div`
    display: flex;
    margin-bottom: 2.5rem;
    margin-left: -6rem;
    margin-top: 12rem;
    @media screen and (max-width: 1024px) {
        margin-left: -2rem;
    }

    @media screen and (max-width: 600px) {
        margin-left: -2rem;
        margin-top: 30rem;
    }
`;

export const H1 = styled.h1`
    font-size: 4rem;
    line-height: 0.7;
    text-align: center;
    font-weight: 900;
    margin: 0;
    margin-bottom: 4rem;
    @media screen and (max-width: 1024px) {
        font-size: 2.5rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const P = styled.p`
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
`;

export const ArrowWrapper = styled.div`
    position: relative;
    font-size: 3.5rem;
    bottom: 0;
    left: 0;
`;
