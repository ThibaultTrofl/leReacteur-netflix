import Movie from "./Movie.jsx";
import Title from "./Title.jsx";

const Section = ({ category, movies, data }) => {
  console.log(category);
  console.log(movies);
  console.log(data);
  return (
    <section className="category">
      <Title title={category} />
      <div className="carroussel">
        {movies.map((images) => {
          console.log(images);
          return <Movie images={images} />;
        })}
      </div>
    </section>
  );
};

export default Section;
