import React from 'react';

class HotelList extends React.Component {
  handleDelete = (id) => {
    this.props.deleteHotel(id);
  };
  
  render() {
    const { hotels } = this.props;

    return (
      <div className='resultado'>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <div>Name: {hotel.name}</div>
            <div>Address: {hotel.address}</div>
            <div>Phone: {hotel.phone}</div>
            <button onClick={() => this.handleDelete(hotel.id)}>Delete</button>
          </li>
        ))}
      </div>
    );
  }
}

export default HotelList;
