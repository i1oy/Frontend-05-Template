function createElement(type, attributes, ...children) {
    let element = null;
    if (typeof type === "string") {
        element = new ElementWrapper(type);
    } else {
        element = new type();
    }
    for (let name in attributes) {
        element.setAttribute(name, attributes[name]);
    }
    for (let child of children) {
        if (typeof child === "string") {
            child = new TextWrapper(child);
            // debugger;
        }
        element.appendChild(child);
    }
    return element;
}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    // setAttribute(name, attr) {
    //     this.root.setAttribute(name, attr);
    // }
    appendChild(child) {
        // this.root.appendChild(child);
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, attr) {
        this.root.setAttribute(name, attr);
    }
    appendChild(child) {
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class Carousel {
    constructor() {
        this.root = document.createElement("div");
    }
    setAttribute(name, attr) {
        this.root.setAttribute(name, attr);
    }
    appendChild(child) {
        // this.root.appendChild(child);
        child.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

let element = (
    <div id='a'>
        <span>Hello, World.</span>
    </div>
);

element.mountTo(document.body);
