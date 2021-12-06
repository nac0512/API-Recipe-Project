import React from 'react';

const Thumbnail = (props) => {
    return (
        <img src={props.imgSrc} alt={props.imgAlt} style={props.style}/>
    );
}

export default Thumbnail;