import Card from "./components/Card";
import userData from "./data/userData.js";

function App() {
  return (
    <div>
      <Card
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
