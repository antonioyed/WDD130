const input =document.getElementById("submitBtn")
const scoreElement = document.getElementById("score_element")

if(typeof(localStorage) === undefined){

    console.log("Your browser do not supports localstorage : C")
}

if(localStorage.getItem("score")){
    scoreElement.innerText = localStorage.getItem("score")
    
}else{
    localStorage.setItem("score", "0")
}

input.onclick = ()=>{
    const currentScore = localStorage.getItem("score")
    localStorage.setItem("score" , parseInt(currentScore) + 1)
    scoreElement.innerText = localStorage.getItem("score")
}