import { createServer } from "node:http";
import Chance from "chance";
// export const server = …
const chance = new Chance();
const name = chance.name();
const age = chance.age();
const profession = chance.profession();
export const server = createServer((request, response) => {
  if (response === !response.url) {
    response.statusCode = 400;
    response.end("Couldnt make connection to the page.");
  } else {
    response.statusCode = 200;
    response.end(
      `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`
    );
  }
});
