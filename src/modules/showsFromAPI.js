const loadShows = async () => {
	const answer = await fetch('https://api.tvmaze.com/shows');
	const data = await answer.json();
	return data;
}

export default loadShows;