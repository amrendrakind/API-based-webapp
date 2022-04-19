import img from './logo.js';
import displayShows from './displayShows.js';
import likes from './likeEvent.js';
import logoRefresh from './logoRefresh.js';

const load = () => {
  displayShows();
  img();
  likes();
  logoRefresh();
};

export default load;