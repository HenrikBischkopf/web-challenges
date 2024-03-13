import Chance from "chance";

const chance = new Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.age(),
  profession: chance.profession(),
  twitter: chance.twitter(),
  geohash: chance.geohash(),
};

export default function handler(request, response) {
  response.status(200).json(character);
}
