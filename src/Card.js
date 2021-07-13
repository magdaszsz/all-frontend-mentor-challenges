function Card({ title, technologies, image, repoLink, liveLink }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {/* <span class="technologies">{technologies}</span> */}
      </div>
      <div class="card-links">
        <a href={liveLink} rel="noreferrer" target="_blank">
          Live
        </a>
        <a href={repoLink} rel="noreferrer" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
}

export default Card;
