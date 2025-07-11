// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useEffect } from "react";
// import {  useDispatch, useSelector } from "react-redux";
// import { addConnections } from "../utils/conectionSlice";
// import { Link } from "react-router-dom";


// const Connections = () => {
//   const connections = useSelector((store) => store.connections);
//   const dispatch = useDispatch();
//   const fetchConnections = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/user/connections", {
//         withCredentials: true,
//       });
//       dispatch(addConnections(res.data.data));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchConnections();
//   }, []);

//   if (!connections) return;

//   if (connections.length === 0) return <h1> No Connections Found</h1>;

//   return (
//     <div className="text-center my-10">
//       <h1 className="text-bold text-white text-3xl">Connections</h1>

//       {connections.map((connection) => {
//         const { _id, firstName, lastName, photoUrl, age, gender, about } =
//           connection;

//         return (
//            <div
//             key={_id}
//             className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
//           >
//             <div>
//               <img
//                 alt="photo"
//                  className="w-20 h-20 rounded-full object-cover"
//                 src={photoUrl}
//               />
//             </div>
//             <div className="text-left mx-4 ">
//               <h2 className="font-bold text-xl">
//                 {firstName + " " + lastName}
//               </h2>
//               {age && gender && <p>{age + ", " + gender}</p>}
//               <p>{about}</p>
//             </div>
//             <Link to={"/chat/" + _id}>
//               <button className="btn btn-primary">Chat</button>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Connections;



import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/conectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;
  if (connections.length === 0)
    return <h1 className="text-center text-gray-400 mt-10">No Connections Found</h1>;

  return (
    <div className="max-w-3xl mx-auto px-4 my-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Your Connections</h1>

      <div className="flex flex-col gap-6">
        {connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;

          return (
            <div
              key={_id}
              className="flex items-center gap-4 p-5 bg-base-300 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={photoUrl}
                alt="User"
                className="w-20 h-20 rounded-full border-2 border-primary object-cover hover:scale-105 transition-transform"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white">
                  {firstName} {lastName}
                </h2>
                {age && gender && (
                  <p className="text-sm text-gray-400">
                    {age} years old, {gender}
                  </p>
                )}
                <p className="text-gray-300 text-sm mt-1">{about}</p>
              </div>

              <Link to={`/chat/${_id}`}>
                <button className="btn btn-primary">Chat</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
