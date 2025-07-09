import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  
  const feed = useSelector((store) => store.feed);  //to read the feed.
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;  //if feed is present thn return or make the api call.
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error("Failed to fetch feed", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  
  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  //   feed && (
  //   <div className="flex justify-center my-10 min-h-screen">
  //     <div className="mb-20"> {/* ✅ Push content above the footer */}
  //       <UserCard user={feed[0]} />
  //     </div>
  //   </div>
  // )
  );
};
export default Feed;