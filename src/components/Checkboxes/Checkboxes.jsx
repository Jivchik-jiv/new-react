import React, { useState } from 'react';
import styles from './Checkboxes.module.css';

const itemsList = [
    {name: "Knife", price: 33},
    {name: "Flower", price: 42},
    {name: "Toy", price: 212},
    {name: "Cheese", price: 54},
    {name: "Pan", price: 123},
    {name: "Candy", price: 20000}
]

 
const Checkboxes = ()=> {

    const [checkedStatus, setCheckedStatus] = useState(new Array(itemsList.length).fill(false));

    const [totalPrice, setTotalPrice] = useState(0);


    const handleChange = (indexToChange) => {
        let updatedCheckedStatus = checkedStatus.map((item, index)=> index === indexToChange? !item : item);
        let newTotalPrice = updatedCheckedStatus.reduce((total, status, index)=> {
            if(status) {
                return total +  itemsList[index].price
            } 

            return total;
        }, 0)
        setCheckedStatus(updatedCheckedStatus);
        setTotalPrice(newTotalPrice);
   }


    return ( 
        <div className = {styles.checkboxesBlock}>
            <h3>Checkboxes</h3>
            <ul className = {styles.list}>
                {itemsList.map((item, index)=> {
                   return (
                   <li key = {item.name}
                   className = {styles.item}
                   >
                        <label >
                             <input 
                             type="checkbox" 
                             checked = {checkedStatus[index]}
                             onChange = {()=>handleChange(index)}
                             /> 
                              <span className = {styles.name}>{item.name}</span>
                              <span className = {styles.price}>{item.price}</span>
                         </label>
                    </li>)
                })}
                
            </ul>
            <p className = {styles.total}>{totalPrice}</p>
        </div>
     );
}


export default Checkboxes;