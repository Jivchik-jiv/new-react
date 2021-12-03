import React, { useState } from 'react';
import styles from './ColorPicker.module.css';
import {colors} from '../../data.json';
import cx from 'classnames';


const ColorPicker = ()=>{
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    
    const makeOptionClasses=(index)=>{
        return cx ({
            [ styles.item]: true,
            [styles.selected]: selectedColorIndex === index
         })
    }

    const handleColorChange=(index)=>{
      setSelectedColorIndex(index);
    }

    return (
      <div className={styles.colorPicker}>
        <h1 className={styles.title}>Colors</h1>
        <p>
          Selected color:{" "}
          {colors[selectedColorIndex].label}
        </p>
        <ul className={styles.list}>
          {colors.map(({ label, color }, index) => {
            return (
              <li
                key={label}
                style={{ background: color }}
                className={makeOptionClasses(index)}
                onClick={()=>handleColorChange(index)}
              ></li>
            );
          })}
        </ul>
      </div>
    );

}
 
export default ColorPicker;