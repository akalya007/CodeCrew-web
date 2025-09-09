import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    return io(BASE_URL);  //we will call the io function , where the server conncets,--Basically , we were telling to connect the backend environment.
  } else {
    return io("/", { path: "/api/socket.io" });
  }
};