console.clear();

const userElement = document.querySelector(".user");
const error = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    console.log("Network error");
    error.textContent = "Network Error";
    return null;
  }
  try {
    const json = await response.json();
    error.textContent = "";
    return json.data;
  } catch (error) {
    console.log("Error json.data");
    error.textContent = "Error json.data occured";
    return null;
  }
}
/* if (!response.ok) {
  console.log('Network error');
  return null;
} */
/* try {
  const parsedJSON = await response.json();
  return parsedJSON.data;
} catch (error) {
  console.log('Error parsing JSON');
  return null; */

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);

/* const user = await getUser();
  if (!user) {
    console.log('User not found');
    return;
  }
  console.log(user) */
