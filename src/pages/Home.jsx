import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Spinner from "../components/Spinner";

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //   load api movie data
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => {
        setMoviesData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Api Not Responding");
      });
  }, []);
  console.log(moviesData);

  //   loading handle
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="default-container px-5 mt-12 mb-20">
      <div className="grid grid-cols-1 gap-8">
        {moviesData.length > 0 &&
          moviesData.map((movie, index) => (
            <MovieCard key={index} movie={movie}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default Home;
