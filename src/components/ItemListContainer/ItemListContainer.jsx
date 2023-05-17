import React from 'react';
import { Fragment } from "react";
import Card from '../Card/Card';
import { ITEMS } from '../../utils/asyncmock';

const ItemListContainer = () => {

  const items = ITEMS

  return (
      <Fragment>
      <div className="container">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      </Fragment>
  );
};

export default ItemListContainer;