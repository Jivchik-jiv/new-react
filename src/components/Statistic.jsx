import React from 'react';



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
        <div>
           {title && <h2 className="title">{title}</h2>}

            <ul className="stat-list">
                {stats.map((item)=>{

                    return <li className="item" key = {item.id} style = {{background: `rgb(${createColor()})`}}>
                    <span className="label">{item.label}</span>
                    <span className="percentage">{item.percentage}</span>
                  </li>
                })}
              
            </ul>
        </div>
    )
}


export default Statistic;