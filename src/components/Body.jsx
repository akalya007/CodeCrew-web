import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);   //we subscribing to the store because , it is making the pi vall can profile view , on every time it renders the compound. 

  const fetchUser = async () => {     //when the page loads , it should not logout.so making the api call of the login user via profile/view.
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      
        navigate("/login");    //if the user is not present , then navigate to the login page.
      
      console.error(err);
    }
  };

  useEffect(() => {  //fetch the user(loged in) , when the Component is loaded.
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen pb-20">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
//here outlet says that , any childer routes  of Body, will render.


/**
 * 💡 In simple terms:

withCredentials: true → ✅ sends cookies / session tokens stored in the browser to the server.

Without it → 🚫 cookies are not sent → your backend can’t identify who you are (it thinks you’re logged out).


WITHOUT IT===Cookies/session not sent → “unauthorized” errors
 */