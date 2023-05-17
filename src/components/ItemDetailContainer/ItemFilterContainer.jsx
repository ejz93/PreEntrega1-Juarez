import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { ITEMS } from "../../utils/asyncmock";

const ItemFilterContainer = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  console.log("Category a buscar =>", category);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const filtered = ITEMS.filter((item) => item.category === category);
      setItems(filtered);
      setFilteredItems(filtered);
      setLoading(false);
    }, 500);
    console.log("Items Seleccionado por Categoria=>", items);
  }, [category]);

  const addToCart = () => {
    //Falta context
    navigate("/checkout");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Fragment>
      <button
        className="btn btn-dark border border-warning m-2 p-2"
        onClick={handleBackClick}
      >
        Back
      </button>
      <hr />
      {loading && (
        <div className="d-flex align-items-center text-warning">
          <strong>Loading...</strong>
          <div
            className="text-warning spinner-border ms-left"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      )}
          <div className="container-fluid">
      {!loading && (
        <div>
          {selectedItem ? (
            <div>
              <h5 className="m-1 fs-1">{selectedItem.title}</h5>
              <div className="m-1 p-3">{selectedItem.img}</div>
              <p className="m-2 p-2 fs-5">{selectedItem.desc}</p>
              <p className="m-3 p-1 fs-3">{selectedItem.price}</p>
              <hr />
              <ItemCount />
              <button
                className="btn btn-warning border border-dark m-2 p-2 fs-5"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
          ) : (
            <div className="container col-xxl border border-dark">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div className="flex-column" key={item.id} onClick={() => handleItemClick(item)}>
                    <h5 className="m-1 fs-1">{item.title}</h5>
                    <div className="m-1 p-3">{item.img}</div>
                    <p className="m-2 p-2 fs-5">{item.desc}</p>
                    <p className="m-3 p-1 fs-3">{item.price}</p>
                    <ItemCount />
                    <button
                      className="btn btn-warning border border-dark m-2 p-2 fs-5"
                      onClick={addToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                ))
              ) : (
                <p>No items found.</p>
              )}
            </div>
          )}
        </div>
      )}
      </div>
    </Fragment>
  );
};

export default ItemFilterContainer;
