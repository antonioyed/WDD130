
const url = "https://antonioyed.github.io//WDD130/wdd230/chamber/json/data.json"

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("cards");

function buildcompanyCards(info, type) {
  let data = info.companies;
  data.forEach((company) => {
    let card = document.createElement("section");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");

    card.setAttribute("id", "section");
    p.innerHTML = `${company.address}`;
    p2.innerHTML = `${company.phone}`;
    a.innerHTML = `${company.site}`;
    a.setAttribute("href", `${company.website}`);

    if (type == "grid") {
      let img = document.createElement("img");
      img.setAttribute("src", `${company.imageurl}`);
      img.setAttribute("alt", `${company.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);
    } else {
      let h2 = document.createElement("h2");
      h2.innerHTML = `${company.name}`;
      card.append(h2);
    }

    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(a);

    display.classList.add(type);
    display.append(card);
  });
}

async function getcompanies(type) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildcompanyCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}

function deleteItems() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("section").remove();
  }
}

getcompanies("grid");

gridbutton.addEventListener("click", () => {
  if (display.classList.value == "cards list") {
    deleteItems();
    display.classList.remove("list");
    getcompanies("grid");
  }
});

listbutton.addEventListener("click", () => {
  if (display.classList.value == "cards grid") {
    deleteItems();
    display.classList.remove("grid");
    getcompanies("list");
  }
});

