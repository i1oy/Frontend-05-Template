export function createElement(type, attributes, ...children) {
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

export class Component {
    constructor(type) {
        // this.root = this.render(type);
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

class TextWrapper extends Component {
    constructor(content) {
        super(content);
    }
    render(content) {
        return document.createTextNode(content);
    }
}

class ElementWrapper extends Component {
    constructor(type) {
        super(type);
    }
    render(type) {
        return document.createElement(type);
    }
}
