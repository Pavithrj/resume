import { useContext } from 'react';
import './WorkHistory.css';
import ProfileContext from './ProfileContext';

function WorkHistory() {
    const profileData = useContext(ProfileContext);
    const { workHistory } = profileData;
    return (
        <div className='workhistorycontaner'>
            <h3 className="workhistory">Work Experience</h3>
            <div>
                {workHistory.map((work) => {
                    return (
                        <div className="workhistorydetails">
                            <div className='workhistorytimeperiod'>
                                {work.timePeriod}
                            </div>
                            <div className='workdetails'>
                                <div className='position'>
                                    {work.position}
                                    <br />
                                    <div className='place'>
                                        {work.place}
                                    </div>
                                    <br />
                                </div>
                                {work.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkHistory;