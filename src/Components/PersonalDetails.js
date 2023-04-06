import './PersonalDetails.css';
import ProfileContext from './ProfileContext';
import { useContext } from 'react';

function PersonalDetails() {
    const profileData = useContext(ProfileContext);
    console.log('profileData::', profileData);
    const { personalInfo } = profileData;
    const { profilepic, firstName, lastName, designation } = personalInfo;

    return (
        <div className="personalcontainer">
            <div className="detail">Personal details</div>
            <img src={profilepic} alt='img' className='image' />
            <div>{firstName} {lastName}</div>
            <div>{designation}</div>
        </div>
    )
}

export default PersonalDetails;