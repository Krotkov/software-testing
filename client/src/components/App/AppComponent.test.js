import {render, fireEvent, screen} from "@testing-library/react";
import React from "react";
import App from './App';
import fetchMock from "fetch-mock";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(""),
    })
);

function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

describe('all elements are rendered correctly', () => {
    beforeEach(() => {
        fetch.mockClear();
        render(<App/>);
        // fireEvent.click(screen.getByText('Sign In'))
    })

    it('renders sign in page', () => {
        fireEvent.click(screen.getByText('Sign In'));
        expect(screen.getAllByText('Sign In').length).toBe(2);
        expect(screen.getAllByText('Sign in').length).toBe(1);
    })

    it('renders sign up page', () => {
        fireEvent.click(screen.getByText('Sign Up'));
        expect(screen.getAllByText('Sign Up').length).toBe(2);
    })

    it('renders info page', () => {
        fireEvent.click(screen.getByText("About"));
        expect(screen.getByText("Привет!")).not.toBe(null);
    })
})