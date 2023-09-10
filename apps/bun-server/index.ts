const server = Bun.serve({
  port: 3010,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
  websocket: {
    // enable compression
    perMessageDeflate: true,

    // this is called when a message is received
    async message(ws, message) {
      console.log(`Received ${message}`);
      // send back a message
      ws.send(`You said: ${message}`, true);
    },
  },
});

console.log(`Listening on localhost:${server.port}`);
