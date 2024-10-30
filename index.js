// ===================================
//          Auto-Type Section
// ===================================

var typed = new Typed(".auto-type",{
    strings: ["Web Developer", "Freelancer", "Coder", "Youtuber"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

// ===================================
//          Circular-Bar Section
// ===================================

// for first
let circularProgress = document.querySelector(".circular-bar-1"),
    progressValue = document.querySelector(".progress-value-1");

let progressStartValue = 0,
    progressEndValue = 85,
    speed1 = 10;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(var(--heading-sup) ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }

}, speed1);

// for second

let circularProgress2 = document.querySelector(".circular-bar-2"),
    progressValue2 = document.querySelector(".progress-value-2");

let progressStartValue2 = 0,
    progressEndValue2 = 90,
    speed2 = 10;

let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(var(--heading-sup) ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }

}, speed2);

// for third

let circularProgress3 = document.querySelector(".circular-bar-3"),
    progressValue3 = document.querySelector(".progress-value-3");

let progressStartValue3 = 0,
    progressEndValue3 = 70,
    speed3 = 10;

let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`
    circularProgress3.style.background = `conic-gradient(var(--heading-sup) ${progressStartValue3 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }

}, speed3);

// =================================================
//          Mobile Responsive Navbar Section
// =================================================

    const mobile_navbar = document.querySelector('.mobile-navbar-btn');
    const header_element = document.querySelector('.header');
    mobile_navbar.addEventListener('click',() =>{
        header_element.classList.toggle("active");
    })

// ===================================
//          Sticky Navbar Section
// ===================================

const hero_section = document.querySelector(".hero-section")

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        ent.isIntersecting == false 
            ? header_element.classList.add('sticky') 
            : header_element.classList.remove('sticky');
    }, 
    {
    root: null,
    rootMargin: "-100px",
    threshold: 0,
})

observer.observe(hero_section);

// ===================================
//          Smooth Scrolling Section
// ===================================

// for projects

const project_section = document.querySelector(".project-section");

document.querySelector(".project-link").addEventListener("click", (e) => {
    e.preventDefault();
    project_section.scrollIntoView({ behavior: "smooth" });
})

// for services

const services_section = document.querySelector(".services-section");

document.querySelector(".services-link").addEventListener("click", (e) => {
    e.preventDefault();
    services_section.scrollIntoView({ behavior: "smooth" });
})

// for scrollToTop

const top_section = document.querySelector(".hero-section");

document.querySelector(".top-link").addEventListener("click", (e) => {
    e.preventDefault();
    top_section.scrollIntoView({ behavior: "smooth" });
})

// ===================================
//          Animated Number Section
// ===================================

const workSection = document.querySelector(".counter-section");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    // console.log(counterNum);
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            // console.log(targetNumber);
            const initialNumber = parseInt(curNumber.innerText);
            // console.log(initialNumber);
            const incrementNumber = Math.trunc(targetNumber / speed);
            // i am adding the value to the main number
            // console.log(incrementNumber);

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } 
            else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
}; 

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);

