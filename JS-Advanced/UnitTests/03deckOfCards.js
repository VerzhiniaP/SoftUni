 function printDeckOfCards(cards) {

  function createCard(face,suit) {
    let validFace = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
    let validSuits = {
        'S' : '\u2660',
        'H' : '\u2665',
        'D' : '\u2666',
        'C' : '\u2663'
    }
    if(!validFace.includes(face) || Object.keys(validSuits).includes(suit) == false){
       console.error(`Invalid card: ${face}${suit}`)
       throw new Error

    }
    return `${face}${validSuits[suit]}`
  }
  
  let cardArr = []
    for(let line of cards){
        if(line.length > 2){
            let [num1,num2 , newSuit] = line.split('')
           let newFace = num1 + num2
           cardArr.push(createCard(newFace,newSuit))
        }else{
        let [newFace, newSuit] = line.split('')
        cardArr.push(createCard(newFace,newSuit))
        }
        
    }
    return cardArr.join(' ')
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']))

console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']))
