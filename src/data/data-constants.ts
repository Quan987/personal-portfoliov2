import htmlIcon from '@/assets/images/svg/icon/html5-icon.svg';
import cssIcon from '@/assets/images/svg/icon/css-icon.svg';
import javascriptIcon from '@/assets/images/svg/icon/javascript-icon.svg';
import typescriptIcon from '@/assets/images/svg/icon/typescript-icon.svg';
import phpIcon from '@/assets/images/svg/icon/php-icon.svg';
import nodejsIcon from '@/assets/images/svg/icon/nodejs-icon.svg';
import expressjsIcon from '@/assets/images/svg/icon/expressjs-icon.svg';
import reactjsIcon from '@/assets/images/svg/icon/reactjs-icon.svg';
import reduxjsIcon from '@/assets/images/svg/icon/redux-icon.svg';
import tailwindcssIcon from '@/assets/images/svg/icon/tailwindcss-icon.svg';
import sqliteIcon from '@/assets/images/svg/icon/sqlite-icon.svg';
import mysqlIcon from '@/assets/images/svg/icon/mysql-icon.svg';
import firebaseIcon from '@/assets/images/svg/icon/firebase-icon.svg';
import dartIcon from '@/assets/images/svg/icon/dart-icon.svg';
import flutterIcon from '@/assets/images/svg/icon/flutter-icon.svg';
import javaIcon from '@/assets/images/svg/icon/java-icon.svg';
import pythonIcon from '@/assets/images/svg/icon/python-icon.svg';
import viteIcon from '@/assets/images/svg/icon/vite-icon.svg';
import actionFigure from '@/assets/images/png/action-figure.png';
import githubLogo from '@/assets/images/svg/logo/github-logo.svg';
import instagramLogo from '@/assets/images/svg/logo/instagram-logo.svg';
import linkedinLogo from '@/assets/images/svg/logo/linkedin-logo.svg';
import twitterLogo from '@/assets/images/svg/logo/twitter-logo.svg';
import pinterestLogo from '@/assets/images/svg/logo/pinterest-logo.svg';
import linkIcon from '@/assets/images/svg/link-icon.svg';
import stackIcon from '@/assets/images/svg/stack-icon.svg';


const data = {
    heroHeadline: "Welcome to my portfolio — I'm Quan Tran, a software developer passionate about building accessible, user-centered web applications that are both intuitive and impactful. Got a project in mind or just want to chat?",
    aboutP1: "Hey! My name is Quan, and I'm a Computer Science graduate from Georgia State University. As an aspiring Full-Stack Developer, I'm driven by the challenge of building scalable, impactful applications that solve real-world problems. I enjoy continuously learning new technologies, and striving to write clean, efficient code.",
    aboutP2: "Beyond the screen, I dedicate time to weightlifting in the gym, which keeps me focused, energized, and mentally sharp. Photography is another creative outlet for me—I enjoy capturing scenic landscapes that inspire reflection and appreciation for the world around me.",
    aboutP3: "I'm seeking opportunities to grow as a developer and help build meaningful products.",

    socialMedia: [
        {name: "Github", link: "https://github.com/Quan987", logo: githubLogo},
        {name: "Linkedin", link: "https://www.linkedin.com/in/qtrann1379", logo: linkedinLogo},
        {name: "Twitter", link: "https://x.com/qtrann1379", logo: twitterLogo},
        {name: "Pinterest", link: "https://www.pinterest.com/qtrann1379/", logo: pinterestLogo},
        {name: "Instagram", link: "https://www.instagram.com/tquan_13", logo: instagramLogo},
    ],

    skills: [
        {name: "HTML", icon: htmlIcon},
        {name: "CSS", icon: cssIcon},
        {name: "JavaScript", icon: javascriptIcon},
        {name: "TypeScript", icon: typescriptIcon},
        {name: "PHP", icon: phpIcon},
        {name: "Node", icon: nodejsIcon},
        {name: "Express", icon: expressjsIcon},
        {name: "React", icon: reactjsIcon},
        {name: "Redux", icon: reduxjsIcon},
        {name: "Tailwind", icon: tailwindcssIcon},
        {name: "SQLite", icon: sqliteIcon},
        {name: "MySQL", icon: mysqlIcon},
        {name: "Firebase", icon: firebaseIcon},
        {name: "Dart", icon: dartIcon},
        {name: "Flutter", icon: flutterIcon},
        {name: "Java", icon: javaIcon},
        {name: "Python", icon: pythonIcon},
        {name: "Vite", icon: viteIcon},
    ],
    projects: [
        {
            isEmpty: false,
            title: "Password Generator App",
            description: "A secure web application that generates strong, unique passwords and features a personal vault for safely storing and managing them.",
            stack: [
                "JavaScripts",
                "PHP",
                "SQL"
            ],
            link: "https://github.com/Quan987/password-generator"
        },
        {
            isEmpty: false,
            title: "Food Delivery App",
            description: "A Flutter cross-platform mobile app that lets users browse restaurants, place orders, and track deliveries in real-time, with Firebase integration for authentication and live data updates.",
            stack: [
                "Dart",
                "Flutter",
                "Firebase Cloud"
            ],
            link: "https://github.com/Quan987/restaurant-flutter-app"
        },
        {
            isEmpty: false,
            title: "OS System Monitor",
            description: "A Java-based system resource monitor that uses the OSHI library to provide real-time insights into CPU, memory, disk, and network usage by interfacing directly with the OS.",
            stack: [
                "Java",
                "JavaFX/Swing",
                "OSHI",
                "JFreeChart",
            ],
            link: "https://github.com/Quan987/os_project"
        },
        {
            isEmpty: false,
            title: "Real Estate Web",
            description: "A real estate platform that streamlines property search and engagement through advanced filtering and optimized database performance for reliable, efficient CRUD operations.",
            stack: [
                "HTML/CSS",
                "JavaScript",
                "PHP",
                "MySQL"
            ],
            link: "https://github.com/Quan987/real-estate-web"
        },
        {
            isEmpty: false,
            title: "Anonymous Chat App",
            description: "A cross-platform chat app enabling real-time messaging and group chat rooms, powered by Firebase for authentication and fast, reliable data sync.",
            stack: [
                "Dart",
                "Flutter",
                "Firebase Cloud",
                "Firebase Auth"
            ],
            link: "https://github.com/Quan987/Anonymous_Chat_App"
        },
        {
            isEmpty: true,
            title: "Coming Soon...",
            description: "New projects currently in development — stay tuned!",
            stack: ["N/A"],
            link: "N/A"
        }
    ],
    actionFigure
}

export default data;
