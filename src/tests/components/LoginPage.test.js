import React from 'react';
import { shallow } from 'enzyme'; 
import { LoginPage } from '../../components/LoginPage';

let startLogin, history, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
  });

test('should render loginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLoogin on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});