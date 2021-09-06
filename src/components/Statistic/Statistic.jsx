import React from 'react';
import styles from './Statistic.module.css'



const createColor = () => {
    let color = "";

    for(let i=0; i<3; i++) {
      let part=Math.trunc(Math.random()*256);

      if(!color.length){
          color+=part;
      }else{
          color+= ", " + part;
      }
    }

    return color;
}


const Statistic = ({title, stats}) => {

    return (
        <div className = {styles.statistic}>
           {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map((item)=>{

                    return <li className={styles.item} key = {item.id} style = {{background: `rgb(${createColor()})`}}>
                    <p className={styles.label}>{item.label}</p>
                    <p className={styles.percentage}>{item.percentage}&#37;</p>
                  </li>
                })}
              
            </ul>
        </div>
    )
}


export default Statistic;