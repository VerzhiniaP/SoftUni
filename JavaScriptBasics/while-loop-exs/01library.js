function library(input) {
    let book = input[0]
    let currentBook = input[1]
    let index = 1
    let bookIsFound= false
    let count = 0

    while(currentBook !== 'No More Books') {
        if ( currentBook === book) {
            bookIsFound = true;
            console.log(`You checked ${count} books and found it.`);
            break;
        }
        count++
        index++
        currentBook = input[index]
    }
    if (bookIsFound !== true) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${count} books.`)
    }


}
library([
    'The Spot',
    'Hunger Games',
    'Harry Potter',
    'Torronto',
    'Spotify',
    'No More Books'
  ])
  