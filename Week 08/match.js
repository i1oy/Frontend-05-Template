const match = c => {
    return str => {
        for (let el of str) {
            if (el === c) return true;
        }
        return false;
    };
};

const matcha = match("a");
matcha("I am groot.");
