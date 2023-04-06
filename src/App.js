import './App.css';
import About from './Components/About';
import Certifications from './Components/Certifications';
import ContactDetails from './Components/Contact';
import Education from './Components/Education';
import PersonalDetails from './Components/PersonalDetails';
import Skills from './Components/Skills';
import { ProfileProvider } from './Components/ProfileContext';
import WorkHistory from './Components/WorkHistory';
import profileData from './Details.json';


function App() {
  return (
    <ProfileProvider value={profileData}>
      <div className='appcontainer'>
        <div className='sidenav'>
          <PersonalDetails />
          <ContactDetails />
          <Skills />
        </div>
        <div className='rightsidenav'>
          <About />
          <WorkHistory />
          <Education />
          <Certifications />
        </div>
      </div>
    </ProfileProvider>
  );
}

export default App;