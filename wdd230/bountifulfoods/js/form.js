

let form = document.getElementById('form')
 
form.addEventListener('submit',(e) => {

    e.preventDefault()

    let firstname = document.getElementById('firstname').value

    let email = document.getElementById('email').value

    let phone = document.getElementById('phone').value

    let instrction = document.getElementById('instrction').value

    if(firstname == "" || email == "" || phone == "" 
    || instrction == ""){
        alert("Please enter all the fields")
    }
    else{
        document.getElementById('result').innerHTML = `
        <p> Name: ${firstname}</p>
        <p> Email: ${email}</p>
        <p> phone: ${phone}</p>
        <p> instrctions: ${instrction}</p>
        `
    }
    
})