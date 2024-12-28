import friends from "../data/friends.js";
import FriendListItem from "./FriendListItem.jsx";
const ulStyles = {
  display: "flex",
  gap: "20px",
  listStyle: "none",
  padding: "10px",
};

function FriendList() {
  return (
    <>
      <ul style={ulStyles}>
        {friends.map((item, index) => {
          return (
            <li key={index}>
              <FriendListItem avatar={item.avatar} name={item.name} status={item.isOnline} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FriendList;
