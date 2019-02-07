import React from 'react';

const ImageBox = (props) => {
    return(
        <div className="image-box">
            <img src={props.imageUrl} className="img-fluid" alt="Responsive image" />
        </div>
    );
}

export default ImageBox;