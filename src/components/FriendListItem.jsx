import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, status }) {
  return (
    <>
      <div className={styles.friendCard}>
        <img className={styles.friendImg} src={avatar} alt='Avatar' width='48' />
        <p className={styles.friendName}>{name}</p>
        <p className={`${styles.friendStatus} ${status ? styles.online : styles.offline}`}>
          {status ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
}

export default FriendListItem;
