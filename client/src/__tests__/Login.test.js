import React from 'react';
import {shallow} from 'enzyme';
import Login from "../components/user/Login";

describe('Login Component', () => {
    it('Login form render without any error', () => {
        expect(shallow(<Login />).find('form.login').exists()).toBe(true)
    })
});

it('Email renders successfully', () => {
    expect(shallow(<Login />).find('#email').length).toEqual(1)
});

it('Password renders successfully', () => {
    expect(shallow(<Login />).find('#password').length).toEqual(1)
});
