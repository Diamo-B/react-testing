import { useState } from "react";

type SkillsProps = {
    skills: string[];
}


const QueryBy = ({skills}: SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return ( 
        <>
            <ul>
                {
                    skills.map(skill=>(
                        <li key={skill}>{skill}</li>
                    ))
                }
            </ul>
            {
                isLoggedIn?
                <button>
                    start learning
                </button>
                :
                <button onClick={()=>{setIsLoggedIn(true)}}>
                    Login
                </button>
            }
        </>
    );
}
 
export default QueryBy;