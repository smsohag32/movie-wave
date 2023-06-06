import { useEffect, useState } from "react";

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
  return <div></div>;
};

export default Home;
