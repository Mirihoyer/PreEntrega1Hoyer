const ItemDetail = ({ productSelected }) => {
  return (
  <div>
    <h1>{productSelected.nombre}</h1>
    <h1>{productSelected.material}</h1>
    <h1>{productSelected.color}</h1>
    <h1>{productSelected.precio}</h1>
  </div>
  );
};

export default ItemDetail;