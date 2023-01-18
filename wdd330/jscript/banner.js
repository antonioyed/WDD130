const boutonSuscribe = document.getElementById("btn-suscribe");
const butonNo = document.getElementById("btn-suscribe2")
const addSuscribe = document.getElementById("suscribe-banner");
const fondoAdd    = document.getElementById("fnd-banner");

dataLayer = [];

if(!localStorage.getItem("suscribed")){
    addSuscribe.classList.add("active");
    fondoAdd.classList.add("active");
}else {
	dataLayer.push({'event': 'suscribed'});
}


boutonSuscribe.addEventListener("click", () => {
    addSuscribe.classList.remove("active");
    fondoAdd.classList.remove("active");

    localStorage.setItem("suscribed", true);
    dataLayer.push({'event': 'suscribed'});

});

butonNo.addEventListener("click", ()=>{
    addSuscribe.classList.remove("active");
    fondoAdd.classList.remove("active");
});
