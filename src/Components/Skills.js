import { useContext } from 'react';
import ProfileContext from './ProfileContext';
import Rating from './Rating';
import './Skills.css';

function Skills() {
    const profileData = useContext(ProfileContext);
    const { skillDetails } = profileData;
    return (
        <div className='skillcontainer'>
            <div className="skills">Skills</div>
            <div>
                {skillDetails.map((skill) => {
                    return (
                        <div className='skillstyle'>
                            <br />
                            <div className='skillname'>
                                {skill.name}
                            </div>
                            <Rating rating={skill.rating}></Rating>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;