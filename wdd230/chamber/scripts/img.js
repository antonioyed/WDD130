const allImages = document.querySelectorAll("img[data-src]")

const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"))
    img.onload = () => {
        img.removeAttribute("data-src")
        img.className = "in"
    };
};


const options = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}

if ('IntersectionObserver' in window) {
    const obsrvr = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                lazyLoad(item.target)
                observer.unobserve(item.target)
            }
        })
    }, options)
    allImages.forEach((img) => {
        obsrvr.observe(img)
    })
}
else {
    allImages.forEach((img) => {
        lazyLoad(img)
    })
}



// -------------- Visit Difference calculator -------------- 
// initialize display elements
const difVisit = document.querySelector(".difVisit");
const pElement = document.querySelector(".visits p");

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

let lastVisit = Number(window.localStorage.getItem("lastVisit"));
console.log(lastVisit)
const d = new Date();
const time = d.getTime();
console.log(time)
const dif = (time - lastVisit);
console.log(dif)


const difSeconds = Math.round(dif/1000);
const difMinutes = Math.round(dif/minute);
const difHours = Math.round(dif/hour);
const difDays = Math.round(dif/day);
let timeText = "Days since last visit: " + difDays;  
difVisit.textContent = timeText;


if (lastVisit === 0) {
    pElement.textContent = `This is your first visit!`;
	
} 
else {
    difVisit.textContent = timeText;
	
}


localStorage.setItem("lastVisit", time);