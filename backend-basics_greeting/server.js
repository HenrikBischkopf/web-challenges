import { createServer } from "node:http";

// export const server = …
export const server = createServer((request, response) => {
  response.end("Hello , amigo!");
});
