import React, { useEffect } from 'react';
import ItemContainer from '../../components/item/item.container';

const checkItem = (item) => {
  return item ? item.itemRoute : null
}

const ItemPage = ({ match, getItemStart, item }) => {

  const { params: { brandName, model } } = match;
  
  useEffect(() => {
    const itemRoute = checkItem(item);
    if (itemRoute !== model) getItemStart(brandName, model)

    return (() => {

    })
  }, [brandName, model, getItemStart, item]);

  return (
    <ItemContainer />
  );
}

export default ItemPage;