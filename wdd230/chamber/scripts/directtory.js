
const url = "https://antonioyed.github.io//WDD130/wdd230/chamber/json/data.json"

const requestUrl = async(url) =>{
    const response = await fetch(url);
    console.log(response);

    if (response.status === 200){
        const data = await response.json();
        console.log(data);
        let companies = data.companies;
        companies.forEach(displaycompanies)

        
    }
    else{
        console.log('Something is malfungtioning with the URL sheck it out')
    }
}

const displayProphets = (company)=>{
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    let membershipLevel = document.createElement('p');

    h2.textContent = `${company.name} ${company.lastname}`;
    address.textContent = `Address: ${company.address}`;
    website.textContent = `Website: ${company.website}`;
    phone.textContent = `Phone Number: ${company.numofchildren}`;
    membershipLevel.textContent = `Membership Level: ${company.membershipLevel}`;

    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt',`Portrait of ${company.name} - ${company.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(website)
    card.appendChild(phone);
    card.appendChild(membershipLevel);
    
    

    document.querySelector('div.cards').appendChild(card);


}


requestUrl(url);