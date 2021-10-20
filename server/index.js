const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

io.on("connection", function (socket) {
  console.log(socket.id, "socket.id");

  socket.on("enter_thread", (data) => {
    socket.join(data);
    console.log(`User ID: ${socket.id} joined thread ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data, "data");
    socket.to(data.thread).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

http.listen(4000, function () {
  console.log("listening on port 4000.");
});
