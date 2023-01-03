import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
	const [videos, setvideos] = useState([]);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
			setvideos(data.items)
		);
	}, [searchTerm]);

	return (
		<Box
			p={2}
			sx={{
				overflowY: "auto",
				height: "90vh",
				flex: 2,
				background: "#000",
				paddingLeft: { md: "150px", sm: "10px" },
			}}
		>
			<Typography variant="h4" sx={{ color: "white" }} fontWeight="bold" mb={2}>
				Search Result for:{" "}
				<span style={{ color: "#F31503" }}>{searchTerm}</span> videos
			</Typography>

			<Box sx={{}} />
			<Videos videos={videos} />
		</Box>
	);
};

export default SearchFeed;
