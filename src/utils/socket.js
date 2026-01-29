import io from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    return io(BASE_URL);  //we will call the io function , where the server conncets,--Basically , we were telling to connect the backend environment.
  } else {
    return io("/", { path: "/api/socket.io" });
  }
};


/**
 *WEBSOCKET
 ==========
 
 WebSocket is a communication protocol that allows real-time, 
 two-way (full-duplex) communication between the client (like a browser) and the server over a single long-lived connection.


 🚀 2. Why Do We Need WebSockets?
 ===================================
⚠️ Problem with Traditional HTTP:
HTTP is request-response only
→ The server cannot send data until the client requests it.
Each HTTP request opens and closes a new connection

Not suitable for real-time apps
→ e.g., chats, live scores, trading dashboards.
✅ Why we need it = To handle instant updates without constant requests

WebSocket solves this by:
=============================
Keeping one connection open (persistent)

Allowing instant two-way communication

Enabling real-time updates without polling
 */


/**
 * Socket.IO is a JavaScript library that simplifies real-time communication.
It uses WebSocket internally when possible, but can also fall back to other methods (like HTTP long polling) if WebSocket is blocked or unavailable. 
*/
//WebSocket = Low-level protocol that gives you a real-time connection.
// Socket.IO = High-level library built on top of WebSocket that adds reliability, events, and fallback support.

/**
 * ⚖️ 6. Comparison Summary Table
Feature	WebSocket	Socket.IO
Type	Protocol	Library built on top of WebSocket
Communication	Message-based	Event-based
Reliability	No auto-reconnect	Auto-reconnect built-in
Fallbacks	None	HTTP long-polling fallback
Rooms/Namespaces	❌ Not supported	✅ Supported
Heartbeat	Manual	Automatic
Browser API	Native (new WebSocket())	Needs Socket.IO client (io())
Server API	Any WebSocket server	Must use Socket.IO server
Binary support	Yes	Yes
Efficiency	Faster (less overhead)	Slightly slower (extra
 */