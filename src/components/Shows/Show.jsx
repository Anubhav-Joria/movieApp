import React from "react";
import { Link } from "react-router-dom";

function Show({ handlePreview, e }) {
  
  let { name, image, premiered, type } = e.show;

  return (
    <div className="my-3">
      <div className="card">
        <span
          className="badge rounded-pill bg-primary"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          premiered on {premiered}
        </span>
        <img
          src={
            image
              ? image.original
              : "https://images.moneycontrol.com/static-mcnews/2021/10/Jio-770x433.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p>Best {type} Movie</p>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto">
          <Link
            to="/preview"
            className="btn btn-primary my-3"
            onClick={() => handlePreview(e.show)}
          >
            Preview{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Show;
