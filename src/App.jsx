import Card from "./components/Card";
import userData from "./data/userData.js";
import friends from "./data/friends.js";
import FriendList from "./components/FriendList.jsx";
import transactions from "./data/transactions.js";
import TransactionHistory from "./components/TransactionHistory.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Card
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
