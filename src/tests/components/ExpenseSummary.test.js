import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test('should ccorrectly render ExpenseSummaray with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/> );
    expect(wrapper).toMatchSnapshot();
});

test('should ccorrectly render ExpenseSummaray with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={23512342134} />);
    expect(wrapper).toMatchSnapshot();
});