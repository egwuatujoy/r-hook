const MovieCrd = ({ title, description, posterURL, rating }) => {
  return ( 
    <div>
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
   );
}
 
export default MovieCrd;