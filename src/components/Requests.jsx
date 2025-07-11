// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addRequests, removeRequest } from "../utils/requestSlice";
// import { useEffect } from "react";

// const Requests = () => {
//   const requests = useSelector((store) => store.requests);
//   const dispatch = useDispatch();


//    const reviewRequest = async (status, _id) => {
//     try {
//       const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id,
//         {}, 
//         { withCredentials: true }
//       );
//       dispatch(removeRequest(_id));
//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/user/requests/received", {
//         withCredentials: true,
//       });

//       dispatch(addRequests(res.data.data));
//     } catch (err) {
//         console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   if (!requests) return;

//  if (requests.length === 0)
//     return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

//   return (
//     <div className="text-center my-10">
//       <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

//       {requests.map((request) => {
//         const { _id, firstName, lastName, photoUrl, age, gender, about } =
//           request.fromUserId;

//         return (
//           <div
//             key={_id}
//             className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300  mx-auto"
//             >
//             <div>
//               <img
//                 alt="photo"
//                 className="w-20 h-20 rounded-full"
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
//             <div>
//               <button
//                 className="btn btn-primary mx-2"
//                 onClick={() => reviewRequest("rejected", request._id)}
//               >
//                 Reject
//               </button>
//               <button
//                 className="btn btn-secondary mx-2"
//                 onClick={() => reviewRequest("accepted", request._id)}
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Requests;



import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return null;
  if (requests.length === 0)
    return <h1 className="text-center text-gray-400 mt-10">No Requests Found</h1>;

  return (
    <div className="max-w-3xl mx-auto px-4 my-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Connection Requests
      </h1>

      <div className="flex flex-col gap-6">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

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

              <div className="flex flex-col gap-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => reviewRequest("accepted", request._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-outline btn-error"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
