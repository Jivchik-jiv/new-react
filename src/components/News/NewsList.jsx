import React from 'react';
import styles from './News.module.css';

const NewsList =({news})=> {

    return (
        <ul>
        {news.map(({title, url})=>{
            return <li key = {title} className = {styles.item}>
                <a href={url} className = {styles.link}>{title}</a>
            </li>
        })}
    </ul>
    )
}

export default NewsList;