const match = c => {
    return str => {
        for (let el of str) {
            if (el === c) return true;
        }
        return false;
    };
};

const matcha = match("a");
const matchb = match("b");

function matchab(str) {
    for (let i = 0; i < str.length - 1; ++i) {
        if (matcha(str.charAt(i)) && matchb(str.charAt(i + 1))) return true;
    }
    return false;
}
console.log(matchab("I abmn groot."));
console.log(matchab("aaaabaccccc."));
