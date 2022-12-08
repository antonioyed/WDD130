

let form = document.getElementById('form')
 
form.addEventListener('submit',(e) => {

    e.preventDefault()

    let firstname = document.getElementById('firstname').value

    let email = document.getElementById('email').value

    let phone = document.getElementById('phone').value

    let instrction = document.getElementById('instrction').value

    let select = document.getElementById('select').value

    let select2 =document.getElementById('select2').value

    let select3 = document.getElementById('select3').value

    let datea  =document.getElementById('datea').value

    if(firstname == "" || email == "" || phone == "" 
    || instrction == "" || select == "" || select2 == "" || select3 == ""){
        alert("Please enter all the fields")
    }
    else{
        document.getElementById('result').innerHTML = `
        <h3> <strong> Name </strong>: ${firstname}</h3>
        <h3><strong> Email </strong>: ${email}</h3>
        <h3><strong> phone</strong>: ${phone}</he>
        <h3> <strong>Date</strong>: ${datea}</h3>
        
        <h3> <strong>Fruit mix</strong>: ${select}</h3>
        <h3> <strong>+ </strong>: ${select2}</h3>
        <h3><strong> +</strong> : ${select3}</h3>
        <h3> <strong>instrctions</strong>: ${instrction}</h3>
        `
    }
    
})