import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => (
	<Card
		sx={{
			width: { xs: "100%", sm: "200px", md: "270px" },
			boxShadow: "none",
			borderRadius: 0,
			background: "#000",
			margin: "10px",
		}}
	>
		<Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
			<CardMedia
				image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
				alt={snippet?.title}
				sx={{
					width: { xs: "100%", sm: "270px" },
					height: 160,
					borderRadius: "15px",
				}}
			/>
		</Link>
		<CardContent sx={{ background: "#000", height: "106px" }}>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<Typography variant="subtitle1" fontWeight="bold" color="#FFF">
					{snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 20)}
				</Typography>
			</Link>
			<Link
				to={
					snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
				}
			>
				<Typography
					variant="subtitle2"
					color="gray"
					sx={{ paddingTop: "10px", alignSelf: "baseline" }}
				>
					{snippet?.channelTitle || demoChannelTitle}
					<CheckCircleIcon
						sx={{
							fontSize: "12px",
							color: "gray",
							ml: "5px",
							alignSelf: "center",
						}}
					/>
				</Typography>
			</Link>
		</CardContent>
	</Card>
);

export default VideoCard;
