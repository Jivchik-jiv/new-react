import React from 'react';
import styles from './ColorPicker.module.css';
import {colors} from '../../data.json';
import cx from 'classnames';

class ColorPicker extends React.Component {

    state = {
        selectedColorIndex: 0,
        colors: colors,
    }

    makeOptionClasses = (index) => {
        return cx ({
           [ styles.item]: true,
           [styles.selected]: this.state.selectedColorIndex === index
        })
    }

    setSelectedColor = (index) => {
        this.setState({selectedColorIndex: index})
    }



    render() { 
        return <div className = {styles.colorPicker}>
                    <h1 className = {styles.title}>Colors</h1>
                    <p>Selected color: {this.state.colors[this.state.selectedColorIndex].label}</p>
                     <ul className= {styles.list} >
                         {colors.map(({label, color}, index) => {
                         
                             return    <li 
                                        key = {label} 
                                        style = {{background: color}} 
                                        className = {this.makeOptionClasses(index)}
                                        onClick = {()=>this.setSelectedColor(index)}
                                        >
                                        

                                        </li>
                                     
                                 
                         })}
                     </ul>
        </div>;
    }
}
 
export default ColorPicker;