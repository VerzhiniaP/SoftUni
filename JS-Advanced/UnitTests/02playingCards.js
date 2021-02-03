function cards(face,suit){

    let validFace = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    let validSuits = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : '\u2663'
    }
    if(!validFace.includes(face) || Object.keys(validSuits).includes(suit) == false){
        throw new Error
    }
    return `${face}${validSuits[suit]}`
    //   <-  both works ->
    // return {
    //     face,
    //     suit,
        // toString(){
        //     return `${face}${validSuits[suit]}`
        // }
    // }
 
}
console.log(cards('l', 'S'))