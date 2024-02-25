import { useEffect, useState } from "react";

type SkillsProps = {
    skills: string[];
}

const FindBy = ({skills}:SkillsProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(true)
        },1000)
    },[])

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
 
export default FindBy;