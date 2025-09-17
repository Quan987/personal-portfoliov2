import profile from "@/assets/images/banner/profile.png";
import { ChatGPTIcon } from "@/pages/about-page/components/icons/ChatGPTIcon";
import { CSSIcon } from "@/pages/about-page/components/icons/CSSIcon";
import { DartIcon } from "@/pages/about-page/components/icons/DartIcon";
import { ExpressIcon } from "@/pages/about-page/components/icons/ExpressIcon";
import { FirebaseIcon } from "@/pages/about-page/components/icons/FirebaseIcon";
import { FlutterIcon } from "@/pages/about-page/components/icons/FlutterIcon";
import { HTMLIcon } from "@/pages/about-page/components/icons/HTMLIcon";
import { JavaIcon } from "@/pages/about-page/components/icons/JavaIcon";
import { JavaScriptIcon } from "@/pages/about-page/components/icons/JavaScriptIcon";
import { MySqlIcon } from "@/pages/about-page/components/icons/MySqlIcon";
import { NodeIcon } from "@/pages/about-page/components/icons/NodeIcon";
import { PhpIcon } from "@/pages/about-page/components/icons/PhpIcon";
import { PythonIcon } from "@/pages/about-page/components/icons/PythonIcon";
import { ReactIcon } from "@/pages/about-page/components/icons/ReactIcon";
import { ReduxIcon } from "@/pages/about-page/components/icons/ReduxIcon";
import Shadcn from "@/pages/about-page/components/icons/Shadcn";
import { SqliteIcon } from "@/pages/about-page/components/icons/SqliteIcon";
import { TailwindIcon } from "@/pages/about-page/components/icons/TailwindIcon";
import { TypeScriptIcon } from "@/pages/about-page/components/icons/TypeScriptIcon";
import { ViteIcon } from "@/pages/about-page/components/icons/ViteIcon";

export const ABOUT = {
  header: "About Me",
  subheader: [
    {
      id: "subheader-1",
      description:
        "I craft modern digital solutions that blend elegant code with intuitive design.",
    },
    {
      id: "subheader-2",
      description:
        "As an aspiring Full-Stack Developer, I'm driven by the challenge of building scalable, impactful applications that solve real-world problems. I enjoy continuously learning new technologies and strive to write clean, efficient code. Whether working independently or collaborating in a team, I take pride in writing maintainable code and shipping features that matter.",
    },
    {
      id: "subheader-3",
      description:
        "Looking forward, my focus remains on deepening my expertise in modern, accessible, and programmatic skills—enhancing both front-end and back-end capabilities to deliver seamless user experiences.",
    },
  ],
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
    { id: "chatgpt-icon", name: "ChatGPT", icon: ChatGPTIcon },
    { id: "shadcn-icon", name: "Shadcn", icon: Shadcn },
  ],
} as const;
