import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  
  const { id, title, img, price } = props;
  const navigate = useNavigate();

  return (
    <div className="container border border-dark m-5 p-2">
      {/* <h5 className=" fs-2">{title}</h5> */}
      <div className="text-center">{img}</div>
      <p className="text-center p-1 m-2 fs-5">{price}</p>
      <button
        className="btn btn-warning border border-dark"
        onClick={() => navigate(`/item/${id}`)}
      >
        BUY NOW
      </button>
    </div>
  );
};

export default Card;
