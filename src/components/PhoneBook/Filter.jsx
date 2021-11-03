import React from 'react';
import styles from './PhoneBook.module.css';

const Filter = ({changeFilter, filter}) => {
    return (
        <div className= {styles.filter}>
                <label>
                    <p>Filter</p>
                <input type="text" value={filter} onChange={changeFilter}/>
                </label>
               
            </div>
    )
}

export default Filter;
