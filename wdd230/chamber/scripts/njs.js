
  const date = new Date();
 const jsYear = document.getElementById("y-js");
 jsYear.innerHTML = date.getFullYear();

 document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;




 const dayOfWeek = date.getDay()

console.log(dayOfWeek)
if (dayOfWeek ===  1 ){
    document.getElementById('banner-header').innerHTML = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
}
else{
    if (dayOfWeek ===  2 ){
        document.getElementById('banner-header').innerHTML = 'Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
    }

    else{
        const bannerHeader = document.getElementById('banner-header');
        bannerHeader.remove();
    }
    
}























