const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

parallax_el.forEach((el) => {
    el.style.transform = "translate(-50%, -50%)";
});

window.addEventListener("mousemove", (e) => {

    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;

    

    parallax_el.forEach((el) => {

        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = e.clientX - parseFloat(getComputedStyle(el).left) * (isInLeft * 0.00);
        
        console.log(el.namespaceURI, " EL ", parseFloat(getComputedStyle(el).left));

        console.log(speedx);
        el.style.transform = `translateX(calc(-50% + ${
            -xValue * speedx * 0.3
        }px)) translateY(calc(-50% + ${
                yValue * speedy * 0.3
            }px)) perspective(2300px)` ;
    });
});

let timeline = gsap.timeline();

parallax_el.forEach((el) => {
    timeline.from(
        el,
        {
            top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
            duration: 1,
        },
        "1"
    );
});