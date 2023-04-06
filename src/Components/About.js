import { useContext } from 'react';
import './About.css';
import ProfileContext from './ProfileContext';

function About() {
    const profileData = useContext(ProfileContext);
    const { details } = profileData.about;
    return (
        <div className='aboutcontaner'>
            <h3>About</h3>
            <div>{details}</div>
        </div>
    )
}

export default About;