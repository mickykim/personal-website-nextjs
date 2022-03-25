import React, { useEffect, useRef, useState } from "react";
import {
    HeroWrapper,
    HeroContainer,
    H1,
    ImageBackground,
    TextWrapper,
    Content,
    P,
    IntroContainer,
    IntroText,
    HideText,
    SpanText,
    Slider,
    ArrowWrapper,
    Source,
    Image,
} from "./HeroElements";
import { CgArrowDownR } from "react-icons/cg";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

interface Props {
    id: string;
}

const HeroSection: React.FC<Props> = ({ id }) => {
    gsap.registerPlugin(ScrollToPlugin);

    const intro = useRef<HTMLDivElement>(null);
    const introText = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    const hideText = gsap.utils.selector(introText);
    const textWrapper = useRef<HTMLDivElement>(null);
    const name = gsap.utils.selector(textWrapper);
    const arrowWrapper = useRef<HTMLDivElement>(null);
    const tl = useRef<GSAPTimeline>();

    useEffect(() => {
        tl.current = gsap.timeline({ defaults: { ease: "power1.out" } });

        // --------- Intro Animations -------------
        tl.current.to(hideText(".text"), {
            y: "0%",
            duration: 1,
            stagger: 0.8,
        });
        tl.current.to(slider.current, {
            y: "-100%",
            duration: 1.5,
            delay: 1,
        });
        tl.current.to(window, { scrollTo: 0 }, "-=1.5");

        // ---------- Hero Animations --------------
        tl.current.to(intro.current, { y: "-100%", duration: 1 }, "-=1");
        tl.current.fromTo(
            name(".nickName"),
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        );
        tl.current.fromTo(
            name(".fullName"),
            { opacity: 0 },
            { opacity: 1, delay: 0.5, duration: 1.5 }
        );
        tl.current.fromTo(
            arrowWrapper.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 },
            "-=.5"
        );
    }, []);

    return (
        <>
            <HeroWrapper>
                <IntroContainer ref={intro}>
                    <IntroText ref={introText}>
                        <HideText>
                            <SpanText className="text">Hey there I'm</SpanText>
                        </HideText>
                        <HideText>
                            <SpanText className="text">Miqueas Kim,</SpanText>
                        </HideText>
                        <HideText>
                            <SpanText className="text">
                                but you can call me
                            </SpanText>
                        </HideText>
                    </IntroText>
                    <Slider ref={slider}></Slider>
                </IntroContainer>
                <HeroContainer id={id}>
                    {/* <ImageBackground>
                        <Source
                            srcSet="../../public/assets/images/mickyHero-l.png"
                            media="(min-width:1025px)"
                        />
                        <Source
                            srcSet="../../public/assets/images/mickyHero-m.png"
                            media="(min-width:600px)"
                        />
                        <Image
                            src="../../public/assets/images/mickyHero-sm.png"
                            alt="Micky image"
                        />
                    </ImageBackground> */}
                    <Content>
                        <TextWrapper ref={textWrapper}>
                            <H1 className="fullName">Miqueas '</H1>
                            <H1 className="nickName">Micky</H1>
                            <H1 className="fullName">' Kim</H1>
                        </TextWrapper>
                        <ArrowWrapper ref={arrowWrapper}>
                            <CgArrowDownR />
                        </ArrowWrapper>
                    </Content>
                </HeroContainer>
            </HeroWrapper>
        </>
    );
};

export default HeroSection;
