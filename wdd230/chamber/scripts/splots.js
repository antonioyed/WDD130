const url = "https://antonioyed.github.io//WDD130/wdd230/chamber/json/data2.json"

const requestUrl = async(url) =>{
    const response = await fetch(url);
    console.log(response);

    if (response.status === 200){
        const data = await response.json();
        console.log(data);
        let splots = data.splots;
        splots.forEach(displaysplots)

        
    }
    else{
        console.log('Something is malfungtioning with the URL sheck it out')
    }
}

const displaysplots = (splot)=>{
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let email = document.createElement('p');
    let description =document.createElement('p');
    let phone = document.createElement('p');
    

    h2.textContent = `${splot.name}`;
    address.textContent = `Address: ${splot.email}`;
    website.textContent = `Website: ${splot.website}`;
    phone.textContent = `Phone Number: ${splot.phone}`;
    description.textContent = `description:  ${splot.description}`;

    portrait.setAttribute('src', splot.imageurl);
    portrait.setAttribute('alt',`Portrait of ${splot.name} - ${splot.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    


    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(email);
    card.appendChild(description);
    card.appendChild(phone);
    
    
    

    document.querySelector('section.cards').appendChild(card);


}


requestUrl(url);
