const keyAutorizzazzione =
  "ayrPNHXg9JWbe68MyW8Q0wIpnjvZHJieP8GGU8xKqnytlQWBnaan0PFQ";

const apiLink = "https://api.pexels.com/v1/search?query=woman";

const arrayFotoWoman = [];

const btnPrimary = document.querySelector(".btn-primary");

let imgDog = document.querySelectorAll("img");

let text = document.querySelectorAll(".text-muted");

btnPrimary.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=woman", {
    headers: {
      Authorization: keyAutorizzazzione,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La risposta del server non è ok");
      }
    })
    .then((foto) => {
      foto.photos.forEach((pic) => {
        arrayFotoWoman.push(pic);
      });
      getWoman();
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
});

const getWoman = function () {
  imgDog.forEach((img, index) => {
    if (arrayFotoWoman[index]) {
      img.src = arrayFotoWoman[index].src.medium;
    }
  });
  text.forEach((testo, index) => {
    if (arrayFotoWoman[index]) {
      testo.innerText = arrayFotoWoman[index].id;
    }
  });
};

const arrayFotoGuitar = [];
const btnSecondary = document.querySelector(".btn-secondary");

btnSecondary.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=guitar", {
    headers: {
      Authorization: keyAutorizzazzione,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La risposta del server non è ok");
      }
    })
    .then((foto) => {
      foto.photos.forEach((pic) => {
        arrayFotoGuitar.push(pic);
      });
      getGuitar();
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
});

const getGuitar = function () {
  imgDog.forEach((img, index) => {
    if (arrayFotoGuitar[index]) {
      img.src = arrayFotoGuitar[index].src.medium;
    }
  });
};

let btnEdit = document.querySelectorAll(".btnEdit");

const changeButton = function () {
  btnEdit.forEach((button) => {
    button.innerText = "Hide";

    button.addEventListener("click", (event) => {
      let card = event.target.closest(".card", ".mb-4 ", ".shadow-sm");
      card.remove();
    });
  });
};

changeButton();

console.log(arrayFotoGuitar);
