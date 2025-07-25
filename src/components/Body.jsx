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
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      
        navigate("/login");
      
      console.error(err);
    }
  };

  useEffect(() => {  //fetch the user , when the Component is loaded.
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