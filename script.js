let carouselContent = document.querySelectorAll(".carousel-content");
console.log(carouselContent.length)

let next = document.querySelector(".arrow-next");
let prev = document.querySelector(".arrow-prev");

const isMobile = window.innerWidth < 768;
let translateValue = 0;
let index = isMobile ? 1 : 2; 
const step = isMobile ? 55 : 25;

//add padding left right if is mobile display
if(isMobile)  {
    document.querySelector(".carousel").style.padding = "0 50px";
}

function updateCarousel() {
    carouselContent.forEach((item) => {
        item.classList.remove("active");
        item.style.transform = `translateX(${translateValue}vw)`;
    });

    carouselContent[index].classList.add("active");
}

updateCarousel();

next.addEventListener("click", () => {
    if (index < carouselContent.length - 2) {
        translateValue -= step ;
        index++;
    } else {
        translateValue = 0;
        index = isMobile ? 1 : 2;
    }

    updateCarousel();
});

prev.addEventListener("click", () => {
    if (index > 2) {  
        translateValue += step;
        index--;
    } else {
        translateValue = -step * (carouselContent.length - 4); 
        index = carouselContent.length - 3;
    }

    updateCarousel();
}); 

// update the desctiption text  
let content = document.querySelectorAll(".carousel-content");

content.forEach((elm,i) => {
  let textSlide = `<span class="text-content">
  <p class="outlined-text">${i -1} - Zu unserer </p>
  </span>
  <span class="text-content">
  <p class="outlined-text">Kundenreferenz </p>
  </span>
  <span class="text-content">
  <p class="gradient-text">TTL/TTM</p>
  </span>`;
 let description = elm.querySelector(".description");
 console.log(description);
  description.innerHTML = textSlide;
  
});