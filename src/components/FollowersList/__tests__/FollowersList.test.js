import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {

    beforeEach(() => {
        jest.mock("../../../__mocks__/axios");
        console.log('RUNNING BEFORE EACH TEST');
    })

    beforeAll(() => {
        console.log('RUNNING ONCE BEFORE EACH TESTS');
    })

    afterEach(() => {
        console.log('RUNNING AFTER EACH TEST');
    })

    afterAll(() => {
        console.log('RUNNING ONCE AFTER EACH TESTS');
    })

    it('should fetch and render follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();
    });

    it('should fetch and render mutiple follower items', async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findByTestId(/follower-item/i)
        expect(followerDivElements.length).toBe(5);
    });
})