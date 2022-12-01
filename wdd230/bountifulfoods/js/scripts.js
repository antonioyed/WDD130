
function toggleMenu(){
    document.getElementById("bountiNav").classList.toggle("open");
    document.getElementById("bountiBtn").classList.toggle("open");
   
}
const bou = document.getElementById("bountiBtn");
bou.onclick = toggleMenu;

