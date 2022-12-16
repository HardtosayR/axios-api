// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("fetched successfully!!", res.data.name);
//   })
//   .catch((e) => {
//     console.log("ERROR", e.message);
//   });

/**
 * refactor to async function
 */

// const getStarWarPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(">>>>fetch successfully<<<<", res.data);
//   } catch (e) {
//     const ErrorRegex = /\d+/g;
//     console.log("ERROR code:", e.message.match(ErrorRegex)[0]);
//   }
// };

// getStarWarPerson(4);

const jokesList = document.querySelector("#jokes");
const button = document.querySelector("button");

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "No joke available! Sorry:(";
  }
};

const addNewJoke = async () => {
  const li = document.createElement("li");
  li.innerHTML = await getDadJoke();
  jokesList.append(li);
};

button.addEventListener("click", () => addNewJoke());
