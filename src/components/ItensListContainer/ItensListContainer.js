import { useEffect, useState } from 'react';
import './ItensListContainer.css';
//import { data } from '../data/data';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItensListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();


  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'products');
    if (categoryId) {
      const queryFilter = query(
        querySnapshot,
        where('categoryId', '==', categoryId)
        );
      getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((products) => {
            console.log(products.data());
            console.log(products.id);
            return { id: products.id, ...products.data() };
          });
          console.log(data);
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((products) => {
            console.log(products.data());
            console.log(products.id);
            return { id: products.id, ...products.data() };
          });
          console.log(data);
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  };

  useEffect(() => {
    getProducts();
  }, [categoryId]);

  return <div>{<ItemList products={products} />}</div>;
};

export default ItensListContainer;

