import React from 'react';

const ImageDetailes = ({copyright, date, explanation}) => {
    
        return (
            <>
                <h2>Detailes</h2>
                <p>Copyright: {copyright}</p>
                <p>Date: {date}</p>
                <p>{explanation}</p>
            </>
        );
    
}
 
export default ImageDetailes;