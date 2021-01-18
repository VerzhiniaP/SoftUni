function list(arr){

    arr.sort((a,b) => a.localeCompare(b))
    let num = 1
    for (let line of arr) {
        console.log(`${num++}.${line}`);
    }
    
}
list(["John", "Bob", "Christina", "Ema"])