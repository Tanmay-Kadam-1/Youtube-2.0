import React from "react";
import { CardContent, CardMedia, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";
const ChannelCard = ({ channelDetail, marginTop, scale }) => {
	return (
		<Box
			sx={{
				boxShadow: "none",
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: { xs: "356px", md: "320px" },
				height: "326px",
				margin: "auto",
				marginTop,
			}}
		>
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						textAlign: "center",
						color: "#FFF",
						alignSelf: "center",
						pt: "50px",
					}}
				>
					<CardMedia
						image={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.title}
						sx={{
							borderRadius: "50%",
							height: "120px",
							width: "120px",
							mb: 2,
							border: "1px solid #e3e3e3",
							alignSelf: "center",
							boxShadow: "0 0 10px white",

							scale,
						}}
					/>
					<Typography variant="h6">
						{channelDetail?.snippet?.title}
						<CheckCircleIcon
							sx={{
								fontSize: "12px",
								color: "gray",
								ml: "5px",
								mt: "10px",
								alignSelf: "center",
							}}
						/>
					</Typography>
					{channelDetail?.statistics?.subscriberCount && (
						<Typography>
							{parseInt(
								channelDetail?.statistics?.subscriberCount
							).toLocaleString()}{" "}
							Subscribers
						</Typography>
					)}
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
