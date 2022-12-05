
 const ItemCount = ({ setCount }) => {
    const addItem = () => {
        setCount ((currentValue) => currentValue + 1) ;

    };

    const removeItem = () => {
        setCount ((currentValue) => {
            if (currentValue > 0){
                return currentValue -1;
            } else{
                return currentValue;
            }
        })
    };

    return (
        <div>
            <button onClick={addItem}>Agregar percha</button>
            <button onClick={removeItem}>Quitar percha</button>
        </div>
    );
};
export default ItemCount;