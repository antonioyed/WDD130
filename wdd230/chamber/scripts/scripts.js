


const URL = "https://antonioyed.github.io//WDD130/wdd230/chamber/json/data.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("cards");

function buildBusinessCards(info, type) {
  let data = info.businesses;
  data.forEach((business) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");
    let level = document.createElement("h4");

    card.setAttribute("id", "section");
    name.innerHTML = `${business.name}`;
    p.innerHTML = `Address: ${business.address}`;
    p2.innerHTML = `Phone Number: ${business.phone}`;
    a.innerHTML = ` Website:${business.website}`;
    level.innerHTML = `Membership Level: ${business.membershipLevel}`;
    a.setAttribute("href", `${business.website}`);

    if (type == "grid") {
      
      let img = document.createElement("img");
      img.setAttribute("src", `${business.imageurl}`);
      img.setAttribute("alt", `${business.name}`);
      img.setAttribute("loading", "lazy");
      card.append(img);
    } else {
      let h2 = document.createElement("h2");
      
      card.append(h2);
    }

     card.appendChild(name);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(a);
    card.appendChild(level);

    display.classList.add(type);
    display.append(card);
  });
}

async function getBusinesses(type) {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data, type);
  } else {
    throw Error(response.statusText);
  }
}

function deleteItems() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("section").remove();
  }
}

getBusinesses("grid");

gridbutton.addEventListener("click", () => {
  if (display.classList.value == "cards list") {
    deleteItems();
    display.classList.remove("list");
    getBusinesses("grid");
  }
});

listbutton.addEventListener("click", () => {
  if (display.classList.value == "cards grid") {
    deleteItems();
    display.classList.remove("grid");
    getBusinesses("list");
  }
});






























function toggleMenu(){
    document.getElementById("pirmarynav").classList.toggle("open");
    console.log("Done");
}
const mn = document.getElementById("hamburgerbtn");
mn.onclick = toggleMenu;




// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;




