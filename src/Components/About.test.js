import { render } from "@testing-library/react";
import ProfileContext from './ProfileContext';
import profileData from '../Details.json';
import About from "./About";

describe('Contact Component', () => {
    const customRender = (ui, { providerProps, ...renderOptions }) => {
        return render(
            <ProfileContext.Provider value={profileData}>{ui}</ProfileContext.Provider>,
            renderOptions,
        )
    }
    it('should print contact details', () => {
        const { asFragment } = customRender(<About />, {
            value: profileData
        });
        expect(asFragment()).toMatchSnapshot();
    })
})