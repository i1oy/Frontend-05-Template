import { Timeline, Animation } from "./animation.js";
import { easeIn } from "./ease.js";
let tl = new Timeline();

tl.add(
    new Animation(
        document.querySelector("#el").style,
        "transform",
        0,
        500,
        2000,
        100,
        easeIn,
        v => `translateX(${v}px)`
    )
);

document.querySelector("#btn_start").addEventListener("click", () => {
    let el2 = document.querySelector("#el2");
    el2.style.transition = "transform ease-in 2s";
    el2.style.transform = "translateX(500px)";
});

document.querySelector("#btn_start").addEventListener("click", () => {
    tl.start();
});
document.querySelector("#btn_pause").addEventListener("click", () => {
    tl.pause();
});

document.querySelector("#btn_resume").addEventListener("click", () => {
    tl.resume();
});
