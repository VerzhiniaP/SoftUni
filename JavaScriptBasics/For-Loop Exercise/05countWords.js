function count(text) {
    let word = 0;

    for(let i = 0 ; i < text.length ; i++) {
        let symbol = text[i];
        if (symbol === " ") {
            word = word + 1
        }
    }

    word ++;

    if (word <=  10) {
        console.log(`The message was send successfully!`)
    } else {
        console.log(`The message is too long to be send! Has ${word} words.`)
    }


}
count("This message has exacly eleven words.One as it's allowed!")