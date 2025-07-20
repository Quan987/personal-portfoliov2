import profile from "@/assets/images/banner/profile.png";
import {
  HTMLIcon,
  JavaScriptIcon,
  DartIcon,
  PythonIcon,
  JavaIcon,
  PhpIcon,
  TypeScriptIcon,
  ExpressIcon,
  FirebaseIcon,
  FlutterIcon,
  MySqlIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  SqliteIcon,
  TailwindIcon,
  ViteIcon,
  CSSIcon,
} from "@/components/icons";

export const ABOUT = {
  header: "About Me",
  subheader1:
    "I craft modern digital solutions that blend elegant code with intuitive design.",
  subheader2:
    "As an aspiring Full-Stack Developer, I'm driven by the challenge of building scalable, impactful applications that solve real-world problems. I enjoy continuously learning new technologies and strive to write clean, efficient code. Whether working independently or collaborating in a team, I take pride in writing maintainable code and shipping features that matter.",
  subheader3:
    "Looking forward, my focus remains on deepening my expertise in modern, accessible, and programmatic skills—enhancing both front-end and back-end capabilities to deliver seamless user experiences.",
  illustration: {
    image: profile,
    alt: "profile-alt",
  },
  skillIcons: [
    { id: "html-icon", name: "HTML", icon: HTMLIcon },
    { id: "css-icon", name: "CSS", icon: CSSIcon },
    { id: "javascript-icon", name: "JavaScript", icon: JavaScriptIcon },
    { id: "dart-icon", name: "Dart", icon: DartIcon },
    { id: "python-icon", name: "Python", icon: PythonIcon },
    { id: "java-icon", name: "Java", icon: JavaIcon },
    { id: "typescript-icon", name: "TypeScript", icon: TypeScriptIcon },
    { id: "vite-icon", name: "Vite", icon: ViteIcon },
    { id: "tailwind-icon", name: "Tailwind", icon: TailwindIcon },
    { id: "firebase-icon", name: "Firebase", icon: FirebaseIcon },
    { id: "flutter-icon", name: "Flutter", icon: FlutterIcon },
    { id: "mysql-icon", name: "MySQL", icon: MySqlIcon },
    { id: "node-icon", name: "Node.js", icon: NodeIcon },
    { id: "react-icon", name: "React", icon: ReactIcon },
    { id: "redux-icon", name: "Redux", icon: ReduxIcon },
    { id: "sqlite-icon", name: "SQLite", icon: SqliteIcon },
    { id: "express-icon", name: "Express", icon: ExpressIcon },
    { id: "php-icon", name: "PHP", icon: PhpIcon },
  ],
} as const;
