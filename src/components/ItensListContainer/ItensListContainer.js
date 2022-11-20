import { useEffect, useState } from 'react';
import './ItensListContainer.css';
import { data } from '../data/data';
import ItemList from '../ItemList/ItemList';

const ItensListContainer = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });

  useEffect(() => {
    getProducts.then((respuesta) => {
      setProductList(respuesta);
    });

    setTimeout(() => {
      console.log(productList);
    }, 1000);

  },
    [productList]);
  return <div>
    <ItemList productList={productList} />
  </div>;

};

export default ItensListContainer