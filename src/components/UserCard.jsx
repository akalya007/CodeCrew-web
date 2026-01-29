import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/sent/" + status + "/" + userId,
        {},    //second parameter is the data we pass, here we dont need to send the data.
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
         <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;



/**
 * 🧩 1. Separation of Concerns (Component Reusability)
Feed ===> it fetches the list of users from “feed” ap" backend ans store in the redux. and managing state (Redux, API call, etc.).
UserCard ===> handles displaying a single user’s info and actions related to that user (like Ignore / Interested).

By separating these:
======================
Feed doesn’t need to care how a user is visually represented.
UserCard can be reused elsewhere (e.g. in search results, matches list, profile preview).

So this improves reusability and maintainability.
 */