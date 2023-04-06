import { render } from "@testing-library/react";
import ProfileContext from './ProfileContext';
import profileData from '../Details.json';
import WorkHistory from "./WorkHistory";

describe('Contact Component', () => {
    const customRender = (ui, { providerProps, ...renderOptions }) => {
        return render(
            <ProfileContext.Provider value={profileData}>{ui}</ProfileContext.Provider>,
            renderOptions,
        )
    }
    it('should print contact details', () => {
        const { asFragment } = customRender(<WorkHistory />, {
            value: profileData
        });
        expect(asFragment()).toMatchSnapshot();
    })
})