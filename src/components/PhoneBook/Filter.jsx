import React from 'react';
import styles from './PhoneBook.module.css';

const Filter = ({handleFilter, filter}) => {

    return (
        <div className= {styles.filter}>
                <label>
                    <p>Filter</p>
                <input type="text" value={filter} onChange={handleFilter}/>
                </label>
               
            </div>
    )
}

export default Filter;
