console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  /*  console.log(response);
  console.log(response.type); */
  const data = await response.json();
  console.log(data);
  console.log(data.results);
  console.log(data.results[2].eye_color);
  return data;
}

/* async function fetchData() {
    const response = await fetch("/url/to/something");
    const data = await response.json();
    return data;
  } */

fetchData();
console.log();
