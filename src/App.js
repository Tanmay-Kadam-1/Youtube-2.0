import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
	ChannelDetail,
	VideoDetail,
	SearchFeed,
	Navbar,
	Feed,
} from "./components";

const App = () => (
	<BrowserRouter>
		<Box sx={{ backgroundColor: "#000" }}>
			<Navbar />
		</Box>
		<Routes>
			<Route path="/" exact element={<Feed />} />
			<Route path="/video/:id" exact element={<VideoDetail />} />
			<Route path="/channel/:id" exact element={<ChannelDetail />} />
			<Route path="/search/:searchTerm" exact element={<SearchFeed />} />
		</Routes>
	</BrowserRouter>
);

export default App;
