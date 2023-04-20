import './PersonalDetails.css';
import ProfileContext from './ProfileContext';
import { useContext, useEffect, useState } from 'react';
import jsonData from '../Details.json';

function PersonalDetails() {
    const [imageData, setImageData] = useState(null);
    const profileData = useContext(ProfileContext);
    const { personalInfo } = profileData;
    const { firstName, lastName, designation } = personalInfo;
    console.log('imageData::', imageData);

    useEffect(() => {
        setImageData(jsonData.personalInfo.prifilePic);
    }, []);

    return (
        <div className="personalcontainer">
            <div className="detail">Personal details</div>
            <img src={imageData} alt='img' className='image' />
            <div>{firstName} {lastName}</div>
            <div>{designation}</div>
        </div>
    )
}

export default PersonalDetails;