export interface DataSocialMedia {
    data: { name: string; link: string; logo: string }[];
}

export interface DataSkill {
    name: string;
    icon: string
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
