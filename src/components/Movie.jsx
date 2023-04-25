const Movie = ({ images }) => {
  console.log(images);
  {
    return <img src={images} alt="" className="affiche" />;
  }
};

export default Movie;
