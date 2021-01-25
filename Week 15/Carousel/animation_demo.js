import { Timeline, Animation } from "./animation.js";
let tl = new Timeline();

tl.add(
    new Animation(
        document.querySelector("#el").style,
        "transform",
        0,
        500,
        3000,
        100,
        null,
        v => `translateX(${v}px)`
    )
);

tl.start();
document.querySelector("#btn_pause").addEventListener("click", () => {
    tl.pause();
});

document.querySelector("#btn_resume").addEventListener("click", () => {
    tl.resume();
});
