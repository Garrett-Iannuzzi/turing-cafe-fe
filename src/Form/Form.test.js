import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form/Form';

describe('Form', () => {

  it('Should match the snapshot with the correct data', () => {
    const wrapper = shallow(<Form />)

    expect(wrapper).toMatchSnapshot()
  });

  it('Should update state when handleChange is called', () => {
    const wrapper = shallow(<Form />);
    const mockEvent = { target: { name: 'name', value: 'Nick' } };
    wrapper.setState({ name: '', date: '', time: '', number: 0 });
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual({ name: 'Nick', date: '', time: '', number: 0 });
  });

  it('Should call mockHandleAddReservation when button is clicked', () => {
    const mockHandleAddReservation = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };
    const wrapper = shallow(<Form handleAddReservation={mockHandleAddReservation} />);
    wrapper.find('button').simulate('click', mockEvent);

    expect(mockHandleAddReservation).toHaveBeenCalledTimes(1);
  });

  it('Should call resetInputs when button is clicked', () => {
    const mockHandleAddReservation = jest.fn();
    const mockResetInputs = jest.fn()
    const mockEvent = { preventDefault: jest.fn() };
    const wrapper = shallow(<Form handleAddReservation={mockHandleAddReservation} />);

    wrapper.find('button').simulate('click', mockEvent);
    expect(mockResetInputs).toHaveBeenCalledTimes(1);
  });
});
