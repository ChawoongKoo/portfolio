import { gsap } from "gsap";

const element = document.querySelector('.box');
const rect = element.getBoundingClientRect();

console.log(rect.bottom)
console.log(rect.x, rect.y)

function rotate_to_mouse(event){
    const box_y = rect.bottom;
    const box_x = (rect.left + rect.right)/2;

    const deltaX = event.clientX - box_x;
    const deltaY = box_y - event.clientY;

    const angle = (90 - 360*Math.atan2(deltaY, deltaX)/(2*Math.PI));

    console.log(angle);

    gsap.to('.box', {rotation:angle + "_short", transformOrigin: "bottom"});
}

window.addEventListener('mousemove', rotate_to_mouse);

