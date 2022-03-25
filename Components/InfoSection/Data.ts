type Data = {
    id: string;
    topText?: string;
    heading: string;
    subtext?: string;
    subtitle: string;
    colorTheme: boolean;
    reverse: boolean;
    img?: string;
    link?: string;
};

export const construlitaData: Data = {
    id: "section1",
    topText: "Websites",
    heading: "Construlita",
    subtext: "Next.js/React, Tailwindcss, TypeScript / 2022",
    subtitle: `Construlita landing page features a mobile first design where users can see the services provided through a responsive carousel. This page was created with a focus on high pagespeed scores on both desktop and mobile. This was achieved with the use of highly optimized images, 
    lazy loading, css minification and static page generation. The use of both tailwindcss and Next.js helped greatly to streamline the speed optimizations the page needed to be able to raise the pagespeed scores to 90 on mobile and 100 on desktop. 
    `,
    colorTheme: false,
    reverse: false,
    img: "images/construlita.webp",
    link: "https://construlita.vercel.app/",
};

export const websiteData: Data = {
    id: "section1",
    heading: "HikingWeather",
    subtext: "React, Styled-Components, TypeScript / 2021",
    subtitle: `HikingWeather is built to practice modern design implementations in a mockup project. 
    Created using styled-components and React, HikingWeather features a mobile-friendly design, reactive elements, and smooth scrolling animations.
    `,
    colorTheme: false,
    reverse: false,
    img: "images/HikingWeather.webp",
    link: "https://hikingweather.vercel.app/",
};

// export const websiteData2: Data = {
//     id: "section1",
//     heading: "Organizer App (Backend Focus)",
//     subtext: "MongoDB, Express, React, Nodejs / 2021",
//     subtitle: `
//     Application developed to understand backend technologies.
//     Includes features such as login authentication, JWT authorization, dark theme toggle, and a REST API.
//     Developed using the MERN (Mongoose, Express, React, Nodejs) stack.
//     Frontend development was made using material-ui.
//     Webapp may take time to load as backend is hosted on Heroku which shuts down after 30 minutes of inactivity.
//     `,
//     colorTheme: false,
//     reverse: false,
//     img: require("../../assets/images/Organizer.webp").default,
//     link: "https://organizer-mern.vercel.app/",
// };

export const projectsData: Data = {
    id: "section2",
    topText: "Projects",
    heading: "Champaign-Urbana Mass Transit District Passenger Route Tracking",
    subtext: "Python, C++, OpenCV / 2019",
    subtitle: `
    Developed a system to track passenger's routes to determine which routes are commonly used with OpenCV, Python, and C++.
    Initially the project was presented to us with the idea of using MAC address sniffing to identify passengers with the use of the onboard wifi.
    While this approach used to be widely employed in shopping malls to track customers through their different stores, Apple and Google have both since implemented MAC randomization to protect its users from being identified without first connecting to a network. 
    As such, we presented the idea to opt into using Computer Vision to achieve a similar result as tracking through MAC was deemed too difficult after considerable testing.
    `,
    colorTheme: false,
    reverse: false,
    img: "images/MTD.webp",
};

export const educationData: Data = {
    id: "section3",
    topText: "Education",
    heading: "University of Illinois at Urbana-Champaign",
    subtext: "B.S. in Computer Science / Winter 2019",
    subtitle: `
    During my years studying at the University of Illinois at Urbana-Champaign, I took a wide arrange of courses of varying subjects that represented my interests in the field.
    Courses I took include: Computer Graphics, Computer Security, Virtual Reality, Computational Advertising, UI/UX Design, and Data Structures and Algorithms.
    `,
    colorTheme: false,
    reverse: false,
    img: "images/uiuc.webp",
};

export const experienceData: Data = {
    id: "section",
    topText: "Experience",
    heading: "Illini Esports",
    subtext: "President, Co-Founder, Tournament Director / 2016-2018",
    subtitle: `
    Founded in 2016, we came with the idea of having an overarching esports organization that would help manage larger scale activities of the then existing small game communities. 
    Now with over 1000+ members, Illini Esports grew to be the largest Tespa student chapter in North America and one of the biggest organizations at UIUC.
    Events would be regularly hosted in a weekly schedule revolving around competitive games such as League of Legends, Counter-Strike, DotA 2, Overwatch, and others. 
    In order to help with the large scale events, we mananged to secure several partnerships from large organizations such as Riot Games, Lootcrate, Activision Blizzard, Alienware, HyperX, and Tespa.
    `,
    colorTheme: false,
    reverse: false,
    img: "images/IlliniEsports.webp",
    link: "https://esports.illinois.edu/",
};
