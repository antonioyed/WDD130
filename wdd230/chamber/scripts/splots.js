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
    let address = document.createElement('p');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    let membershipLevel = document.createElement('p');

    h2.textContent = `${splot.name}`;
    address.textContent = `Address: ${splot.address}`;
    website.textContent = `Website: ${splot.website}`;
    phone.textContent = `Phone Number: ${splot.phone}`;
    membershipLevel.textContent = `Membership Level: ${splot.membershipLevel}`;

    portrait.setAttribute('src', splot.imageurl);
    portrait.setAttribute('alt',`Portrait of ${splot.name} - ${splot.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    website.setAttribute('href',`${splot.website}`);


    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(website)
    card.appendChild(phone);
    card.appendChild(membershipLevel);
    
    

    document.querySelector('section.cards').appendChild(card);


}


requestUrl(url);
