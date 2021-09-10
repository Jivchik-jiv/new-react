import React from 'react';
import styles from './Checkboxes.module.css';

const itemsList = [
    {name: "Knife", price: 33},
    {name: "Flower", price: 42},
    {name: "Toy", price: 212},
    {name: "Cheese", price: 54},
    {name: "Pan", price: 123},
    {name: "Candy", price: 2}
]


class Checkboxes extends React.Component {
   state = {
        checkedStatus: [],
        totalPrice: 0
    }

   componentDidMount() {
       let updatedCheckedStatus = new Array(itemsList.length).fill(false);
       this.setState({checkedStatus: updatedCheckedStatus});
   }

   handleChange = (indexToChange) => {
        let updatedCheckedStatus = this.state.checkedStatus.map((item, index)=> index === indexToChange? !item : item);

        let totalPrice = updatedCheckedStatus.reduce((total, status, index)=> {
            if(status) {
                return total +  itemsList[index].price
            } 

            return total;
        }, 0)

        this.setState({checkedStatus: updatedCheckedStatus, totalPrice});


   }

   


    render() { 
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
                                 checked = {this.state.checkedStatus[index]}
                                 onChange = {()=>this.handleChange(index)}
                                 /> 
                                  <span className = {styles.name}>{item.name}</span>
                                  <span className = {styles.price}>{item.price}</span>
                             </label>
                        </li>)
                    })}
                    
                </ul>
                <p className = {styles.total}>{this.state.totalPrice}</p>
            </div>
         );
    }
}
 
export default Checkboxes;