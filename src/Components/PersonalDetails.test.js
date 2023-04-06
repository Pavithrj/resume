import PersonalDetails from "./PersonalDetails";
import { render } from "@testing-library/react";
import ProfileContext from './ProfileContext';
import profileData from '../Details.json';

describe('PersonalDetails Component', () => {
    const customRender = (ui, { providerProps, ...renderOptions }) => {
        return render(
            <ProfileContext.Provider value={profileData}>{ui}</ProfileContext.Provider>,
            renderOptions,
        )
    }
    it('should print personal details', () => {
        const { asFragment } = customRender(<PersonalDetails />, {
            value: profileData
        });
        expect(asFragment()).toMatchSnapshot();
    })
})