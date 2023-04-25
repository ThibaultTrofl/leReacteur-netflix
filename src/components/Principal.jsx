import Section from "./Section.jsx";

const Principal = ({ data }) => {
  return (
    <main className="movies-box container">
      {data.map((data, index) => {
        console.log(data.category);

        <Section
          category={data.category}
          movies={data.images}
          data={data}
          key={index}
        />;
      })}
    </main>
  );
};

export default Principal;
