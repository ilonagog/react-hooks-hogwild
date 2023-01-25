import React, { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import TileList from "./TileList";


function App() {

	const [isClickedGrease, setIsClickedGrease] = useState(false);
	const [isClickSort, setIsClickSort] = useState("")
	const hogsToDisplay = hogs.filter((hog => {
		if (!isClickedGrease) {
			return true;
		} else {
			return hog.greased === true;
		}

	})).sort((hog1, hog2) => {
		if (isClickSort === "weight") {
			return hog1.weight = hog2.weight;
		} else if (isClickSort === "name") {
			return hog1.name.localeCompare(hog2.name);

		}
	})


	console.log(hogsToDisplay)

	console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<button onClick={(e) => setIsClickedGrease(!isClickedGrease)}> Click for Greased Hogs!</button>
			<button onClick={(e) => setIsClickSort("weight")}>Sort Hogs By Name</button>
			<button onClick={(e) => setIsClickSort("name")}>Sort Hogs By Name</button>

			<TileList hogs={hogsToDisplay} />
		</div>
	);
}

export default App;
