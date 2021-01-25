import { Component, createElement } from "./framework";

export class Carousel extends Component {
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    render() {
        this.root = document.createElement("div");
        this.root.classList.add("carousel");
        for (let pic of this.attributes["src"]) {
            let child = document.createElement("div");
            child.style.backgroundImage = `url("${pic}")`;
            this.root.appendChild(child);
        }

        let pos = 0;
        let width = 500;
        this.root.addEventListener("mousedown", event => {
            let children = this.root.children;
            let startX = event.clientX;

            let move = e => {
                let x = e.clientX - startX;

                let current = pos - (x - (x % width)) / width;

                for (let offset of [-2, -1, 0, 1, 2]) {
                    let position = current + offset;
                    position = (position + children.length) % children.length;
                    let child = children[position];
                    child.style.transition = "none";
                    child.style.transform = `translateX(${
                        -position * width + offset * width + (x % width)
                    }px)`;
                }
            };
            let up = e => {
                let x = e.clientX - startX;
                pos = pos - Math.round(x / width);
                for (let offset of [
                    0,
                    -Math.sign(
                        Math.round(x / width) - x + (width >> 1) * Math.sign(x)
                    )
                ]) {
                    let position = pos + offset;
                    position = (position + children.length) % children.length;
                    let child = children[position];
                    child.style.transition = "";
                    child.style.transform = `translateX(${
                        (offset - position) * width
                    }px)`;
                }

                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
            };
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        });

        return this.root;
    }
    setAttribute(name, val) {
        this.attributes[name] = val;
    }
    mountTo(parent) {
        // console.log(this.attributes["src"]);
        parent.appendChild(this.render());
    }
}
