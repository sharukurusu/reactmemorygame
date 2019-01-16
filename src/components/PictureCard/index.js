import React from "react";

function PictureCard(props){
        return (
            <img {...props} alt={props.id} onClick={() => props.handleClick(props.id)}/>
        )
}

export default PictureCard;
