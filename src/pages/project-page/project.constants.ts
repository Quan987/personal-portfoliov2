import passwordGenerator from "@/assets/images/projects/project-password-generator.png";
import foodDelivery from "@/assets/images/projects/project-food-delivery.png";
import osMonitor from "@/assets/images/projects/project-os-monitor.png";
import realEstate from "@/assets/images/projects/project-real-estate.png";
import chatApp from "@/assets/images/projects/project-chat-app.png";
import comingSoon from "@/assets/images/projects/project-coming-soon.png";

export const PROJECTS = {
  header: "Selected Projects",
  subheader:
    "My creative sandbox — a mix of individual experiments and group collaborations.",
  carousel: [
    {
      id: "password-generator-web-project",
      isEmpty: false,
      type: "Website",
      title: "Password Generator",
      description:
        "A secure and user-friendly web application that generates strong, unique passwords and features a personal vault for safely storing and managing them.",
      stacks: ["JavaScripts", "PHP", "SQL"],
      link: "https://github.com/Quan987/password-generator",
      illustration: {
        image: passwordGenerator,
        alt: "password-generator-alt",
      },
    },
    {
      id: "food-delivery-app-project",
      isEmpty: false,
      type: "App",
      title: "Food Delivery App",
      description:
        "A Flutter cross-platform mobile app that lets users browse restaurants, place orders, and track deliveries in real-time, with Firebase integration for authentication and live data updates.",
      stacks: ["Dart", "Flutter", "Firebase Cloud"],
      link: "https://github.com/Quan987/restaurant-flutter-app",
      illustration: {
        image: foodDelivery,
        alt: "food-delivery-alt",
      },
    },
    {
      id: "os-system-monitor-project",
      isEmpty: false,
      type: "App",
      title: "OS System Monitor",
      description:
        "A Java-based system resource monitor that uses the OSHI library to provide real-time insights into CPU, memory, disk, and network usage by interfacing directly with the OS.",
      stacks: ["Java", "JavaFX", "OSHI", "JFreeChart"],
      link: "https://github.com/Quan987/os_project",
      illustration: {
        image: osMonitor,
        alt: "os-system-monitor-alt",
      },
    },
    {
      id: "real-estate-web-project",
      isEmpty: false,
      type: "Website",
      title: "Real Estate Platform",
      description:
        "A real estate platform that streamlines property search and engagement through advanced filtering and optimized database performance for reliable, efficient CRUD operations.",
      stacks: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/Quan987/real-estate-web",
      illustration: {
        image: realEstate,
        alt: "real-estate-alt",
      },
    },
    {
      id: "anonymous-chat-app-project",
      isEmpty: false,
      type: "App",
      title: "Anonymous Chat App",
      description:
        "A cross-platform chat app enabling real-time messaging and group chat rooms, powered by Firebase for authentication and fast, reliable data sync.",
      stacks: ["Dart", "Flutter", "Firebase Cloud", "Firebase Auth"],
      link: "https://github.com/Quan987/Anonymous_Chat_App",
      illustration: {
        image: chatApp,
        alt: "chat-app-alt",
      },
    },
    {
      id: "empty-project",
      isEmpty: true,
      type: "N/A",
      title: "",
      description: "New projects currently in development — stay tuned!",
      stacks: ["N/A"],
      link: "N/A",
      illustration: {
        image: comingSoon,
        alt: "coming-soon-alt",
      },
    },
  ],
} as const;
