import React, { useState } from "react";
import Pagination from "react-js-pagination";
import ImageListItem from "./ImageListItem.js";
import "./App.css";
// require("bootstrap/less/bootstrap.less");

function App() {
	const [activePage, setActivePage] = useState(1);
	const imageData = {
		imageLabel: "Labeled Item",
		imageLocation:
			"https://wesbos.com/static/46c8f12c015f9bdd7cccd17d294da646/497c6/logo.png",
	};
	return (
		<div className='App'>
			<h1>Set or edit labels to match items seen in the images</h1>
			<Pagination
				activePage={activePage}
				itemsCountPerPage={9}
				totalItemsCount={1000}
				pageRangeDisplayed={5}
				onChange={setActivePage}
			/>
			<section className='image-list'>
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
				{ImageListItem(imageData)}
			</section>
			<Pagination
				activePage={activePage}
				itemsCountPerPage={9}
				totalItemsCount={1000}
				pageRangeDisplayed={5}
				onChange={setActivePage}
			/>
		</div>
	);
}

export default App;
