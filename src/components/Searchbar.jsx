import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			navigate(`/search/${searchTerm}`);
			setSearchTerm("");
		}
	};

	return (
		<Paper
			component="form"
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				pl: 2,
				boxShadow: "none",
				mr: { sm: 5 },
			}}
			onSubmit={handleSubmit}
		>
			<input
				className="search-bar"
				placeholder="Search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				width="10px"
			/>
			<IconButton
				type="submit"
				sx={{ p: "10px", color: "red" }}
				aria-label="search"
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default Searchbar;
