const sSource = "/chamber/json/data.json";


const requestSpotlights = async(sSource) =>{
    const response = await fetch(sSource);
    console.log(response);

    if (response.ok === true){
        const data = await response.json();
        console.log(data);
        let spotlights = data.businesses;



        
        displaySpotlight(spotlights[2],'.sp1');
        displaySpotlight(spotlights[5],'.sp2')

        
    }
    else{
        console.log('Something is malfungtioning with the URL sheck it out')
    }
};

const displaySpotlight = (spotlights,sectionCLass)=>{
    
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let website = document.createElement('a');
    let phone = document.createElement('p');
    let membershipLevel = document.createElement('p');

    h2.textContent = `${spotlights.name}`;
    address.textContent = `Address: ${spotlights.address}`;
    website.textContent = `Website: ${spotlights.website}`;
    phone.textContent = `Phone Number: ${spotlights.phone}`;
    membershipLevel.textContent = `Membership Level: ${spotlights.membershipLevel}`;

    portrait.setAttribute('src', spotlights.imageurl);
    portrait.setAttribute('alt',`Portrait of ${spotlights.name} - ${spotlights.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    website.setAttribute('href',`${spotlights.website}`);


    document.querySelector(sectionCLass).appendChild(h2);
    document.querySelector(sectionCLass).appendChild(portrait);
    
    document.querySelector(sectionCLass).appendChild(website)

    document.querySelector(sectionCLass).appendChild(membershipLevel);
    
    




}


requestSpotlights(sSource);



