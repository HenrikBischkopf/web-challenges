// import { server } from "./server.js";
import { server } from "./server.js";
// server.listen(…
const port = 8000;
server.listen(port, () => {
  console.log("Hello");
});

/* server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
  }); */
