const todayDate = new Date();

var year = todayDate.toLocaleString("default", { year: "numeric" });
var month = todayDate.toLocaleString("default", { month: "2-digit" });
var day = todayDate.toLocaleString("default", { day: "2-digit" });


var formattedDate = year + "-" + month + "-" +day ;
const formDate = document.getElementById("date");
formDate.setAttribute("value", formattedDate); 


function holdName(){
    const formName = document.querySelector('[name="fname"]').value;
    localStorage.setItem("submitName", formName);
}

const subBtn = document.querySelector(".submitBtn");

subBtn.addEventListener("click", holdName);
console.log("test");
let currentName = window.localStorage.getItem("submitName");
document.getElementById("submitee-name").textContent = currentName;




