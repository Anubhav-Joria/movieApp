import React from "react";
import { Link } from "react-router-dom";
function Completed(props) {
  return (
    <div className="text-center">
      <h3>Thank you! for booking {props.name} Have a Nice Day <Link to="/">Book more</Link></h3>
    </div>
  );
}

export default Completed;
