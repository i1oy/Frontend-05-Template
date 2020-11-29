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
const matchc = match("c");
const matchd = match("d");
const matche = match("e");
const matchf = match("f");

const subStr = "abcdef";

function matchabcdef(str) {
    for (let i = 0; i < str.length - subStr.length; ++i) {
        if (
            matcha(str.charAt(i)) &&
            matchb(str.charAt(i + 1)) &&
            matchc(str.charAt(i + 2)) &&
            matchd(str.charAt(i + 3)) &&
            matche(str.charAt(i + 4)) &&
            matchf(str.charAt(i + 5))
        )
            return true;
    }
    return false;
}
console.log(matchabcdef("I abmn groot."));
console.log(matchabcdef("aaaabaccccc."));
console.log(matchabcdef("aaaabcdefcccc."));
