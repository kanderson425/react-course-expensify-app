import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
// import { removeExpense, editExpense } from '../../actions/expenses';

let startEditExpense, startRemoveExpense, wrapper, history;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        startEditExpense={startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history}
        expense={expenses[2]}
        />
    );
});

test('should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id 
    });
});