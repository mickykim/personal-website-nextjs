import React from "react";
import { TextWrapper } from "../HeroSection/HeroElements";
import {
    Column1,
    Column2,
    Row,
    InfoContainer,
    InfoWrapper,
    Subtitle,
    TopText,
    TitleWrapper,
    Heading,
    ImgWrap,
    Img,
    Subtext,
} from "./InfoElements";

export interface Props {
    id?: string;
    topText?: string;
    heading?: string;
    subtext?: string;
    subtitle?: string;
    img?: string;
    altImg?: string;
    reverse?: boolean;
    colorTheme?: boolean;
    link?: string;
}

const InfoSection: React.FC<Props> = ({
    id,
    topText,
    heading,
    subtext,
    subtitle,
    img,
    altImg,
    reverse = false,
    colorTheme = false,
    link,
}) => {
    return (
        <InfoContainer colorTheme={colorTheme} id={id}>
            {topText && (
                <TitleWrapper>
                    <TopText colorTheme={colorTheme}>{topText}</TopText>
                </TitleWrapper>
            )}
            <InfoWrapper topText={topText}>
                <Row reverse={reverse}>
                    <Column1>
                        {link ? (
                            <a href={link} target="_blank">
                                {" "}
                                <Heading colorTheme={colorTheme}>
                                    {heading}
                                </Heading>{" "}
                            </a>
                        ) : (
                            <Heading colorTheme={colorTheme}>{heading}</Heading>
                        )}
                        <Subtext>{subtext}</Subtext>
                        <Subtitle colorTheme={colorTheme}>{subtitle}</Subtitle>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            {link ? (
                                <a href={link} target="_blank">
                                    <Img src={img} alt={altImg} />{" "}
                                </a>
                            ) : (
                                <Img src={img} alt={altImg} />
                            )}
                        </ImgWrap>
                    </Column2>
                </Row>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;
