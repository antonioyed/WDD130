 let url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

fetch(url)
.then(response => response.json())
.then(data => displayData(data))
.catch(error => console.log(error))


const displayData = (data) => {
   console.log(data)

    let fr1 = ""
    for (let i = 4; i<data.length; i++){
        fr1 = `<tr><td>${data[0].name}</td></tr>`
    }

    document.getElementById("fr1").innerHTML = fr1

    let fr2 = ""
    for (let i = 4; i<data.length; i++){
        fr2 = `<tr><td>${data[3].name}</td></tr>`
    }

    document.getElementById("fr2").innerHTML = fr2

    let fr3 = ""
    for (let i = 4; i<data.length; i++){
        fr3 = `<tr><td>${data[7].name}</td></tr>`
    }

    document.getElementById("fr3").innerHTML = fr3
}
