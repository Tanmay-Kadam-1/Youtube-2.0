import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CopyrightIcon from "@mui/icons-material/Copyright";

import { logo } from "../utils/constants";
import { Searchbar } from "./";

const Navbar = () => (
	<Stack
		alignItems="center"
		p={2}
		sx={{
			position: "sticky",
			background: "#000",
			top: 0,
			justifyContent: "space-between",
		}}
		direction="row"
	>
		<Link to="/" style={{ display: "flex", alignItems: "center" }}>
			<img src={logo} alt="logo" height={50} />
			<Typography
				sx={{
					color: "#FFF",
					fontWeight: "bold",
					fontSize: "24px",
					paddingLeft: "10px",
				}}
			>
				MyTube <CopyrightIcon sx={{ height: "15px", marginBottom: "10px" }} />
			</Typography>
		</Link>
		<Searchbar />
	</Stack>
);

export default Navbar;
