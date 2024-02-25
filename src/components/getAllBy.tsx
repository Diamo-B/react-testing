type SkillsProps = {
    skills: string[];
}


const GetAllBy = ({skills}: SkillsProps) => {
    return ( 
        <>
            <ul>
                {
                    skills.map(skill=>(
                        <li key={skill}>{skill}</li>
                    ))
                }
            </ul>
        </>
    );
}
 
export default GetAllBy;