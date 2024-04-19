import "./LinkCard.scss";
import Avatar from "../../assets/images/avatar-jessica.jpeg";

const LinkCard = () => {
  return (
    <article className="card">
      <img
        className="card__image"
        alt="Jessica Randall's Profile Avatar"
        src={Avatar}
      />
      <h2 className="card__title">Jessica Randall</h2>
      <address className="card__subtitle">London, United Kingdom</address>
      <p className="card__description">
        "Front-end developer and avid reader."
      </p>
      <div className="card__link-wrapper">
        <a className="card__link" href="#GitHub">
          GitHub
        </a>
        <a className="card__link" href="#Frontend-Mentor">
          Frontend Mentor
        </a>
        <a className="card__link" href="#LinkedIn">
          LinkedIn
        </a>
        <a className="card__link" href="#Twitter">
          Twitter
        </a>
        <a className="card__link" href="#Instagram">
          Instgram
        </a>
      </div>
    </article>
  );
};

export { LinkCard };
