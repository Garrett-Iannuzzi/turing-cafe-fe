import React from 'react';
import { shallow } from 'enzyme';
import App from '../App/App';

describe('App', () => {

  it('Should match the snapshot with the correct data', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Should update state when handleAddReservation is called', () => {
    const wrapper = shallow(<App />)
    const mockReservation = { id: 20, name: 'Nick', date: '01/01', time: '7:00', number: 2 }
    wrapper.setState({ reservations: [] });
    wrapper.instance().handleAddReservation(mockReservation);

    expect(wrapper.state('reservations')).toEqual([ mockReservation ])
  });
});
