import React from 'react';
import Tile from './Tile';


function TileList({ hogs }) {
    // console.log(hogs);

    const tileList = hogs.map((hog) => (
        <Tile


            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highestMedal={hog["highest medal achieved"]}
            image={hog.image}
        />
    ));


    return (
        <div>
            <ul>
                {tileList}
            </ul>

        </div>
    )
}
export default TileList;