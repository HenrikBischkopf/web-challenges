import { createServer } from "node:http";

// export const server = …
export const server = createServer((request, response) => {
  if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end(request.url);
  } else if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end(request.url);
  } else {
    response.statusCode = 400;
    response.end("Error");
  }
});
