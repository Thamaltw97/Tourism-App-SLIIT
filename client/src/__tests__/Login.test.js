import React from 'react';
import {shallow} from 'enzyme';
import Login from "../components/user/Login";

describe('Login Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<Login />).find('form.login').exists()).toBe(true)
    })
});