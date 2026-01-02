const jokeBtn = document.querySelector(".btn");

const loadJoke = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) throw new error("Cannot fetch the data");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createJoke = async () => {
  const joke = await loadJoke();

  document.querySelector("#joke_txt").textContent = joke["value"];
};

jokeBtn.addEventListener("click", createJoke);
