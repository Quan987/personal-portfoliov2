import {DataSkill} from "@/types/data.ts";
import {useMemo} from "react";


const useShuffleSkills = (skills: DataSkill[], count: number): DataSkill[][] => {
    return useMemo(() => {
        const generateShuffle = () => {
            return [...skills].sort(() => Math.random() - 0.50);
        }
        return Array.from({ length: count }, () => generateShuffle());
    }, [skills, count]);
}

export default useShuffleSkills;