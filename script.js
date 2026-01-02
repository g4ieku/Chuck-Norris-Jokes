const jokeBtn = document.querySelector(".btn");
const jokeTxt = document.querySelector("#joke_txt");

const loadJoke = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) throw new Error("Cannot fetch the data");

    return await response.json();
  } catch (error) {
    console.error(error);
    jokeTxt.textContent = "Cannot fetch the data";
    return null; // return null so createJoke knows it failed
  }
};

const createJoke = async () => {
  const joke = await loadJoke();

  if (joke) jokeTxt.textContent = joke["value"];
};

jokeBtn.addEventListener("click", createJoke);
