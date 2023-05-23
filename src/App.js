import React from 'react';
import HotelForm from './HotelForm';
import HotelList from './HotelList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: []
    };
  }

  addHotel = (newHotel) => {
    const hotel = {
      id: Date.now(),
      ...newHotel
    };
    this.setState((prevState) => ({
      hotels: [...prevState.hotels, hotel]
    }));
  };

  deleteHotel = (id) => {
    this.setState((prevState) => ({
      hotels: prevState.hotels.filter((hotel) => hotel.id !== id)
    }));
  };

  render() {
    const { hotels } = this.state;

    return (
      <div>
        <h1 className='hotelL'>Welcome to hotel Registration</h1>
        <HotelForm addHotel={this.addHotel} />
        <HotelList hotels={hotels} deleteHotel={this.deleteHotel} />
      </div>
    );
  }
}

export default App;
