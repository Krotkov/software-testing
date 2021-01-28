import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import '@testing-library/react';

describe('<App />', () => {
    test('App function testing', () => {

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