import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import InfoSection from "../Components/InfoSection";
import {
    experienceData,
    projectsData,
    websiteData,
    educationData,
    construlitaData,
} from "../Components/InfoSection/Data";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Micky Kim</title>
                <meta name="description" content="Miqueas Kim Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeroSection id="main" />
            <InfoSection {...construlitaData} />
            <InfoSection {...websiteData} />
            <InfoSection {...projectsData} />
            <InfoSection {...educationData} />
            <InfoSection {...experienceData} />
            <Footer />
        </div>
    );
};

export default Home;
