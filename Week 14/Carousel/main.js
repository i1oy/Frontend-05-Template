import { Component, createElement } from "./framework";

class Carousel extends Component {
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
                // for (let child of children) {
                //     child.style.transition = "none";
                //     child.style.transform = `translateX(${-pos * 500 + x}px)`;
                // }
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
                // for (let child of children) {
                //     child.style.transition = "";
                //     child.style.transform = `translateX(${-pos * 500}px)`;
                // }

                document.removeEventListener("mousemove", move);
                document.removeEventListener("mouseup", up);
            };
            document.addEventListener("mousemove", move);
            document.addEventListener("mouseup", up);
        });
        /* let currentIndex = 0;
        setInterval(() => {
            let children = this.root.children;
            let length = children.length;
            let nextIndex = (currentIndex + 1) % length;
            let current = children[currentIndex];
            let next = children[nextIndex];
            next.style.transition = "none";
            next.style.transform = `translateX(${100 - nextIndex * 100}%)`;
            setTimeout(() => {
                next.style.transition = "";
                current.style.transform = `translateX(${
                    -100 - currentIndex * 100
                }%)`;
                next.style.transform = `translateX(${-nextIndex * 100}%)`;
                currentIndex = nextIndex;
            }, 16);
        }, 3000); */
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

let pics = [
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg"
];

let element = <Carousel src={pics} id='a'></Carousel>;

element.mountTo(document.body);
