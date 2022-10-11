import React, { useState } from "react";
import { Link } from "react-router-dom";

function Booking(props) {

  const [user, setUser] = useState({
    userName: "",
    phoneNumber: "",
    age: "",
    movie: "",
  });

  const handleFormChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(
      `Thank you ${user.userName}! Your booking for ${props.name} is successfull. Have a nice day`
    );
  };

  return (
    <div className="d-flex align-items-center justify-content-center my-4 p-3">
      <form action="" onSubmit={handleFormSubmit}>
        <div className="my-2" style={{ width: "24rem" }}>
          <div className="col p-2 my-2">
            <div className="text-center">
              <h3>Booking</h3>
            </div>
            <div className="col my-2 ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
                name="userName"
                value={user.userName}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="col my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
                name="phoneNumber"
                required
                value={user.phoneNumber}
                onChange={handleFormChange}
              />
            </div>
            <div className="col my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Age"
                name="age"
                required
                value={user.age}
                onChange={handleFormChange}
              />
            </div>
            <div className="col my-2 ">
              <input
                type="text"
                className="form-control"
                name="movie"
                value={props.name}
                readOnly
              />
            </div>
            <div className=" text-center my-2">
         
              <Link
                to="/completed"
                className="btn btn-primary my-3"
                type="submit"
              >
                Confirm Booking
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Booking;
