"use strict";

const joke = document.getElementById("joke"),
  jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

/* ------------------------------- 1-st method ------------------------------ */

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  joke.innerHTML = data.joke;
}

/* ------------------------------- 2nd method ------------------------------- */

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((req) => req.json())
//     .then((data) => {
//       joke.innerHTML = data.joke;
//     });
// }
