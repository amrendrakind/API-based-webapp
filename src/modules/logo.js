import Icon from './images/movie.png';

const img = () => {
  const imgLogo = document.getElementById('imgLogo');
  const logo = imgLogo.attributes.src;
  logo.value = Icon;
  return logo;
};

export default img;