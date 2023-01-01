import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: 50,
	},
	headers: {
		"X-RapidAPI-Key": "76565b8c22mshf4bfba423ca2740p16d92ajsnd616ac39c3f9",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
};
