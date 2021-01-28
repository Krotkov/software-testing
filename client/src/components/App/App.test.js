import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {render, fireEvent, screen} from "@testing-library/react";

describe('check app state', () => {
    it('App function testing', () => {

        const login = "testlogin"

        const AppComponent = shallow(<App/>);
        const instance = AppComponent.instance();
        expect(AppComponent.state()).toHaveProperty('login', '');
        instance.changeLogin(login);
        expect(AppComponent.state()).toHaveProperty('login', login);
        instance.dropState();
        expect(AppComponent.state()).toHaveProperty('login', '');
    });
});

