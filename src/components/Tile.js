import React, { useState } from 'react'

function Tile({ name, specialty, greased, weight, highestMedal, image }) {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked(!isClicked);
    }
    return (
        <div onClick={handleClick}>
            <div>{name}</div>
            <div>{isClicked ? specialty : null}</div>
            <div>{isClicked ? greased : null}</div>
            <div>{isClicked ? weight : null}</div>
            <div>{isClicked ? highestMedal : null}</div>
            <img src={image} alt={image} />
        </div>
    )
}
export default Tile;