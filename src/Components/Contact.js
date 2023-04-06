import { useContext } from 'react';
import './Contact.css';
import ProfileContext from './ProfileContext';

function ContactDetails() {
    const profileData = useContext(ProfileContext);
    const { contactDetails } = profileData;
    const { address, phoneNumber, email } = contactDetails;
    return (
        <div className='contactcontainer'>
            <div className="contact">Contact</div>
            <div>{address}</div>
            <div>{phoneNumber}</div>
            <div>{email}</div>
        </div>
    )
}

export default ContactDetails;