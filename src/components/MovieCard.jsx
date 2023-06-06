import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { image, summary, _links, rating, name } = movie?.show;
  return (
    <div className="card lg:card-side bg-base-100 border-2 border-opacity-10 shadow-xl">
      <figure>
        <img src={image?.medium} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <Link to="/booking">
            <button className="btn btn-primary">Get Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
