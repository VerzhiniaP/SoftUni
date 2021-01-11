function project(name, count) {

    count = Number(count);
    
    let hour;

    hour = count * 3

    console.log(`The architect ${name} will need ${hour} hours to complete ${count} project/s.`)

}
project("George", "4")