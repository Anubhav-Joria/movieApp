import React from "react";
import { Link } from "react-router-dom";
function Preview(props) {
  return (
    <div className="d-flex align-items-center justify-content-center my-4">
      <div className="card  " style={{ width: "18rem" }}>
        <span
          className="badge rounded-pill bg-primary"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          premiered on {props.premiered}
        </span>
        <img className="card-img-top" src={props.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
          <p dangerouslySetInnerHTML={{__html: props.summary}}
></p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">
            Rating: {props.rating}
          </li>
        </ul>

        <Link to="/booking" className="btn btn-primary my-3">
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default Preview;
