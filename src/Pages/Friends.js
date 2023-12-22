import { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Friends.css'

const Friends = () => {
  const [friendsData, setFriendsData] = useState(null);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=15');
        setFriendsData(response.data.results); // Assuming the array is in the 'results' property
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Check if friendsData is not null before mapping
    if (friendsData) {
      const friendsList = friendsData.map((data) => (
        <div key={data.login.uuid} className='friends--info'>
          <img src={data.picture.large} alt="friend" />
          <p>{`${data.name.first} ${data.name.last}`}</p>
          <button className='friend--btn'>Add Friend</button>
        </div>
      ));
      setFriends(friendsList);
    }
  }, [friendsData]);

  return (
    <div className='friends'>
     <h1>Friends you may know</h1>
      <div className="friends--container">
       {friends}
      </div>
    </div>
  );
};

export default Friends;

