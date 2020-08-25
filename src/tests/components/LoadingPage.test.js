import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/LoadingPage';

test('should rending loading page correctly' , () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});