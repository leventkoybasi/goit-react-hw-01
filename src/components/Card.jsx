import styles from "./Card.module.css";

function Card({ name, tag, location, image, stats }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <img className={styles.img} src={image} alt='User avatar' />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.statName}>Followers</span>
            <span className={styles.statValue}>{stats.followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.statName}>Views</span>
            <span className={styles.statValue}>{stats.views}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.statName}>Likes</span>
            <span className={styles.statValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card;
