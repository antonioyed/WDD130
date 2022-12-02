
function toggleMenu(){
    document.getElementById("bountiNav").classList.toggle("open");
    document.getElementById("bountiBtn").classList.toggle("open");
   
}
const bou = document.getElementById("bountiBtn");
bou.onclick = toggleMenu;


const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); 


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;