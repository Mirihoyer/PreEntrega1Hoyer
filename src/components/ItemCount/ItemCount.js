import Button from 'react-bootstrap/Button';

 const ItemCount = ({ setCount }) => {
    const addItem = () => {
        setCount ((currentValue) => currentValue + 1) ;

    };

    const removeItem = () => {
        setCount ((currentValue) => {
            if (currentValue > 1){
                return currentValue -1;
            } else{
                return currentValue;
            }
        })
    };

    return (
        <div>
            <Button variant="outline-success" onClick={addItem}>Agregar percha</Button>
            <Button variant="outline-warning" onClick={removeItem}>Quitar percha</Button>
        </div>
    );
};
export default ItemCount;