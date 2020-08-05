import React from 'react';
import imgDefault from '../assets/music.png';

function Image(props) {
    const link = props.link;
    const id = link.split("v=");
    if (link.includes("youtube.com")) {
        const img = "https://img.youtube.com/vi/"+id[1]+"/mqdefault.jpg";
        const href = "#exampleModalCenter" + props.id;
        return (
            <a href={href} data-toggle="modal">
                <img src={img} alt={props.name} />
            </a>
        );
    } else {
        return (
            <a target="_blank" href={props.link} rel="noopener noreferrer">
                <img 
                    src={imgDefault}
                    alt="{props.name}"
                    style={{width: 235, height:183}}
                />
            </a>
        );
    }
}

export default Image;