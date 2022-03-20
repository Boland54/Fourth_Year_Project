import Avatar from "../Imagerep/Imagerep";
import "./feed.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Feed = () => {

const currDate = new Date().toLocaleDateString();
const { user } = useContext(AuthContext);


  return (
    <div className="feed">
      {/* date */}
      <div className="feed_date">
        <Avatar />
        <p>Welcome {user.name}, todays date is = {currDate} </p>
      </div>
      {/* img */}
      <div className="feed_img">
        <img src="https://source.unsplash.com/random" alt="feed_image" />
      </div>
      {/* content */}
      <div className="feed_content">
        <p>
          A working environment should be a safe place to work, this app will help ensure that.
        </p>
      </div>
    </div>
  );
};

export default Feed;
