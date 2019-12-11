import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';

describe('App', () => {

  it('Should match the snapshot with the correct data', () => {
    const wrapper = shallow(<App />)

    expect(wrapper).toMatchSnapshot()
  })




})
