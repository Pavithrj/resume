import { useContext } from 'react';
import './Education.css';
import ProfileContext from './ProfileContext';

function Education() {
    const profileData = useContext(ProfileContext);
    const { education } = profileData;
    return (
        <div className='educationcontainer'>
            <h3 className="education">Education</h3>
            <div>
                <div className='educationstyle'>
                    {education.map(item => {
                        return (
                            <div className='educationdetails'>
                                <div className='educationtimeperiod'>
                                    {item.timePeriod}
                                </div>
                                <div className='stream'>
                                    {item.stream}
                                    <div className='educationplacegrade'>
                                        {item.place}
                                        <br />
                                        {item.grade}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education;