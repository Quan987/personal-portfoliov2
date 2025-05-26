import actionFigure from '@/assets/images/action-figure.png';
import {skillsIcons} from "@/data/icons/skillsIcons.tsx";
import {headerIcons} from "@/data/icons/headerIcons.tsx";


const data = {
    heroHeadline: "Welcome to my portfolio — I'm Quan Tran, a software developer passionate about building accessible, user-centered web applications that are both intuitive and impactful. Got a project in mind or just want to chat?",
    aboutP1: "Hey! My name is Quan, and I'm a Computer Science graduate from Georgia State University. As an aspiring Full-Stack Developer, I'm driven by the challenge of building scalable, impactful applications that solve real-world problems. I enjoy continuously learning new technologies, and striving to write clean, efficient code.",
    aboutP2: "Beyond the screen, I dedicate time to weightlifting in the gym, which keeps me focused, energized, and mentally sharp. Photography is another creative outlet for me—I enjoy capturing scenic landscapes that inspire reflection and appreciation for the world around me.",
    aboutP3: "I'm seeking opportunities to grow as a developer and help build meaningful products.",

    socialMedia: [
        {name: "Github", link: "https://github.com/Quan987", icon: headerIcons.github},
        {name: "Linkedin", link: "https://www.linkedin.com/in/qtrann1379", icon: headerIcons.linkedin},
        {name: "Twitter", link: "https://x.com/qtrann1379", icon: headerIcons.twitter},
        {name: "Pinterest", link: "https://www.pinterest.com/qtrann1379/", icon: headerIcons.pinterest},
        {name: "Instagram", link: "https://www.instagram.com/tquan_13", icon: headerIcons.instagram},
    ],

    skills: [
        {name: "HTML", icon: skillsIcons.html},
        {name: "CSS", icon: skillsIcons.css},
        {name: "JavaScript", icon: skillsIcons.javascript},
        {name: "TypeScript", icon: skillsIcons.typescript},
        {name: "PHP", icon: skillsIcons.php},
        {name: "Node", icon: skillsIcons.node},
        {name: "Express", icon: skillsIcons.express},
        {name: "React", icon: skillsIcons.react},
        {name: "Redux", icon: skillsIcons.redux},
        {name: "Tailwind", icon: skillsIcons.tailwind},
        {name: "SQLite", icon: skillsIcons.sqlite},
        {name: "MySQL", icon: skillsIcons.mysql},
        {name: "Firebase", icon: skillsIcons.firebase},
        {name: "Dart", icon: skillsIcons.dart},
        {name: "Flutter", icon: skillsIcons.flutter},
        {name: "Java", icon: skillsIcons.java},
        {name: "Python", icon: skillsIcons.python},
        {name: "Vite", icon: skillsIcons.vite},
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
