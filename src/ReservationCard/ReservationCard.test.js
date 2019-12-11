import React from 'react';
import { shallow } from 'enzyme';
import ReservationCard from '../ReservationCard/ReservationCard';

describe('ReservationCard', () => {

  it('Should match the snapshot with the correct data', () => {
    const wrapper = shallow(<ReservationCard />)

    expect(wrapper).toMatchSnapshot()
  });
});