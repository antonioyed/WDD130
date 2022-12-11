 let url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

fetch(url)
.then(response => response.json())
.then(data => displayData(data))
.catch(error => console.log(error))


const displayData = (data) => {
   console.log(data)

    let fr1 =parseFloat
    for (let i = 4; i<data.length; i++){
        fr1 = `${data[5].name} `
        
    }

    document.getElementById("fr1").innerHTML = fr1

    let fr2 = ""
    for (let i = 4; i<data.length; i++){
        fr2 = `${data[8].name}`
    }

    document.getElementById("fr2").innerHTML = fr2

    let fr3 = ""
    for (let i = 4; i<data.length; i++){
        fr3 = `${data[4].name}`
    }

    document.getElementById("fr3").innerHTML = fr3
}
