import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
	const [channelDetail, setchannelDetail] = useState(null);
	const [videos, setvideos] = useState([]);

	const { id } = useParams();

	console.log(videos);

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
			setchannelDetail(data?.items[0])
		);

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
			(data) => setvideos(data?.items)
		);
	}, [id]);

	return (
		<Box minHeight="95vh" backgroundColor="#000">
			<Box style={{ alignItems: "center" }}>
				<div
					style={{
						background:
							"linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
						zIndex: 10,
						height: "300px",
					}}
				/>
				<ChannelCard
					channelDetail={channelDetail}
					marginTop="-110px"
					scale="1.1"
				/>
				<Box display="flex" p="3">
					<Box sx={{ mr: { sm: "150px" } }} />
					<Videos videos={videos} />
				</Box>
			</Box>
		</Box>
	);
};

export default ChannelDetail;
