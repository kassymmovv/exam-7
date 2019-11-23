import React from 'react'
import nanoid from 'nanoid'
const Calculator = (array,arr,a) => {
    let bank = [];
    for (let i = 0; i < array.length; i++){
        bank.push(array[i].count > 0 ? <div className="Dish" key={nanoid()}>
            <span>{array[i].name}  {array[i].count}x     {arr[i].price * array[i].count} СОМ</span>
            <button onClick={() => a(arr[i])} className="button"> Удалить</button>
        </div> : null)
    }
    return bank
};
const AddFood = props => {
    return(
        <div className="add">
            {Calculator(props.order,props.orderPrice,props.remove)}
        </div>
    )
};


export default AddFood;