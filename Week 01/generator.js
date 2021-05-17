function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function* generatorFn(num) {
    let index = 0;
    while (index++ < num) {
        await sleep(1000);
        yield index;
    }
    return index;
}

let generatorObj = generatorFn(10);

(async function () {
    for await (let val of generatorObj) {
        console.log(`${val}`);
    }
})();

// while (true) {
//     let { value, done } = generatorObj.next();
//     console.log(value);
//     if (done) break;
// }
