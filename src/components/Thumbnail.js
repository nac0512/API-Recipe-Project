// Thumbnail component to display uniform reecipe images

import React from 'react';

const Thumbnail = (props) => {
    return (
        <img src={props.imgSrc} alt={props.imgAlt} style={props.style} id={props.id}/>
    );
}

export default Thumbnail;