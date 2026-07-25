function ImageCard(props) {
  return (
    <div className="card">
      <img
        src={props.image}
        alt={props.title}
      />

      <div className="card-content">
        <h2>{props.title}</h2>

        <p>{props.description}</p>

        <button>Explore</button>
      </div>
    </div>
  );
}

export default ImageCard;