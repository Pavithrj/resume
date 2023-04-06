import { render } from "@testing-library/react";
import ProfileContext from './ProfileContext';
import profileData from '../Details.json';
import Education from "./Education";

describe('Contact Component', () => {
    const customRender = (ui, { providerProps, ...renderOptions }) => {
        return render(
            <ProfileContext.Provider value={profileData}>{ui}</ProfileContext.Provider>,
            renderOptions,
        )
    }
    it('should print contact details', () => {
        const { asFragment } = customRender(<Education />, {
            value: profileData
        });
        expect(asFragment()).toMatchSnapshot();
    })
})