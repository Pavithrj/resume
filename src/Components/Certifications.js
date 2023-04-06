import { useContext } from 'react';
import './Certifications.css';
import ProfileContext from './ProfileContext';

function Certifications() {
    const profileData = useContext(ProfileContext);
    const { certification } = profileData;
    return (
        <div className="certificationcontainer">
            <h3 className="certification">Certifications</h3>
            <div>
                {certification.map((certified) => {
                    return (
                        <div className='certificationdetails'>{certified.timePeriod} {certified.type}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Certifications;