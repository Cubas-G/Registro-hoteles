import React from "react";

class HotelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newHotel: {
        name: "",
        address: "",
        phone: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newHotel: {
        ...prevState.newHotel,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newHotel } = this.state;
    if (newHotel.name.trim() !== "") {
      this.props.addHotel(newHotel);
      this.setState({
        newHotel: {
          name: "",
          address: "",
          phone: "",
        },
      });
    }
  };

  render() {
    const { newHotel } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Container-principal">
          <div className="form-input">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={newHotel.name}
              onChange={this.handleChange}
              placeholder="Enter hotel name"
            />
          </div>

          <div className="form-input">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={newHotel.address}
              onChange={this.handleChange}
              placeholder="Enter hotel address"
            />
          </div>
          <div className="form-input">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={newHotel.phone}
              onChange={this.handleChange}
              placeholder="Enter hotel phone"
            />
          </div>
          <button type="submit">Add Hotel</button>
        </div>
      </form>
    );
  }
}

export default HotelForm;
