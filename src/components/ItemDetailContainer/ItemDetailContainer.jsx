import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { ITEMS } from "../../utils/asyncmock";

const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const items = ITEMS;

  useEffect(() => {
    setTimeout(() => {
      const filter = items.find((item) => item.id === id);
      setItem(filter);
      setLoading(false);
    }, 300);
  }, []);

  const addToCart = () => {
    //Falta context
    navigate("/checkout");
  };

  return (
    <Fragment>
      <button
        className="btn btn-dark border border-warning m-2 p-2"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <hr />
      {loading && <h1>Loading ...</h1>}
      {item && !loading && (
        <div className="container-fluid">
          {/* <p>{item.id}</p> */}
          <h5 className="m-1 fs-1">{item.title}</h5>
          <div className="m-1 p-3">{item.img}</div>
          <p className="m-2 p-2 fs-5">{item.desc}</p>
          <p className="m-3 p-1 fs-3">{item.price}</p>
          <hr />
          <ItemCount />
          <button
            className="btn btn-warning border border-dark m-2 p-2 fs-5"
            onClick={addToCart}
          >
            Add to cart
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default ItemDetailContainer;
