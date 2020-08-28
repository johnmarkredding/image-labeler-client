import React, { useState } from "react";

const ImageListItem = (imageData) => {
	const { imageLocation, imageLabel } = imageData;
	const [updateLabel, setUpdateLabel] = useState(imageLabel);
	const [imageSelected, setImageSelected] = useState(false);
	return (
		<article className='image-list-item'>
			<img src={imageLocation} alt={imageLabel} />
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setImageSelected(false);
					console.log(updateLabel);
					// Send Post Request updating Image Label in DB
				}}
			>
				{imageSelected ? (
					<>
						<input
							autoFocus='true'
							value={updateLabel}
							onBlur={() => setImageSelected(false)}
							onChange={(e) => setUpdateLabel(e.target.value)}
						/>
						<button>Update</button>
					</>
				) : (
					<h3 onClick={() => setImageSelected(true)}>{updateLabel}</h3>
				)}
			</form>
		</article>
	);
};

export default ImageListItem;
