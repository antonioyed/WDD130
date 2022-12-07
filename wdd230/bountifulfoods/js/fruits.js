const URL = "https://brotherblazzard.github.io/canvas-content/fruit.json";


const requestfruit = async(URL) =>{
    const aresponse = await fetch(URL);
    console.log(aresponse);

    if (aresponse.status === 200){
        const data = await aresponse.json();
        console.log(data);
        let fruit= data.fruit;



        
        displayfruit(fruit[2],'.fr1');
        

        
    }
    else{
        console.log('Something is malfungtioning with the URL sheck it out')
    }
};

const displayfruit = (fruits,sectionCLass)=>{
    
    let name = document.createElement('p');
   
    let carbohydrates = document.createElement('p');
    
    let protein = document.createElement('p');
    let fat = document.createElement('p');
    let calories = document.createElement('p');

    name.textContent = `${fruits.name}`;
    carbohydrates.textContent = `carbohydrates: ${fruits.carbohydrates}`;
    protein.textContent = `protein: ${fruits.protein}`;
    fat.textContent = `Fat: ${fruits.fat}`;
    calories.textContent = `Calories: ${fruits.calories}`;

    portrait.setAttribute('src', spotlights.imageurl);
    portrait.setAttribute('alt',`Portrait of ${spotlights.name} - ${spotlights.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
    website.setAttribute('href',`${spotlights.website}`);


    document.querySelector(sectionCLass).appendChild(name);
    document.querySelector(sectionCLass).appendChild(carbohydrates);
    
    document.querySelector(sectionCLass).appendChild(protein)

    document.querySelector(sectionCLass).appendChild(fat);
    document.querySelector(sectionCLass).appendChild(calories);
    
    




}


requestfruit(URL);



