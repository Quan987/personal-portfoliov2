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