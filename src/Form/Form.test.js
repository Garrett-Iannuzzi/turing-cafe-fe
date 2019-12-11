import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form/Form';

describe('Form', () => {

  it('Should match the snapshot with the correct data', () => {
    const wrapper = shallow(<Form />)

    expect(wrapper).toMatchSnapshot()
  });

  it('Should update state when handleChange is called', () => {
    const wrapper = shallow(<Form />)
    const mockEvent = { target: { name: 'name', value: 'Nick' } }
    wrapper.setState({ name: '', date: '', time: '', number: 0 });
    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual({ name: 'Nick', date: '', time: '', number: 0 })
  });
});