import { useEffect, useState } from 'react';
import './ItensListContainer.css';
import { data } from '../data/data';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItensListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId) {
        const filteredData = data.filter((producto) => {
          return producto.category === categoryId
        });
        resolve(filteredData)
      } else {
        resolve(data);
      }
    }, 1000);
  });

  useEffect(() => {
    getProducts
      .then((respuesta) => setProductList(respuesta))
      .catch(error => console.log(error))
  }, [categoryId]);

  return <div>
    <ItemList productList={productList} />
  </div>;

};

export default ItensListContainer