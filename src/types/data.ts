import {JSX} from "react";

export interface DataSocialMedia {
    socialMedia: { name: string; link: string; icon: JSX.Element }[];
}

export interface DataSkill {
    name: string;
    icon: JSX.Element;
}


export interface DataSkillsList {
    skills: DataSkill[];
}

export interface ProjectCardProps {
    data: {
        isEmpty: boolean;
        title: string;
        description: string;
        stack: string[];
        link: string;
    }
}
