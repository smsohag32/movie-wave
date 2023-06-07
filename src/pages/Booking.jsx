import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Modal from "../components/Modal";

const Booking = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  // close modal handle
  const closeModal = () => {
    setIsOpen(false);
  };
  //   load api movie data
  //   TODO: load single data in future
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => {
        const singleMovie = data.find((movie) => movie.show.id == id);
        console.log(singleMovie);
        setMovie(singleMovie);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Api Not Responding");
      });
  }, [id]);
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="default-container mt-12 mb-12">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure className="w-full">
          <img src={movie?.show?.image?.medium} alt="img" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{movie?.show?.name}</h2>
          {/* p tag remove in data */}
          {movie?.show?.summary.slice(3, movie?.show?.summary?.length - 4)}
          <div className="card-actions justify-end">
            <button onClick={() => setIsOpen(true)} className="btn btn-primary">
              Book
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} movie={movie} closeModal={closeModal} />
    </div>
  );
};

export default Booking;
