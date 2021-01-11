function petShop(dogs, animals) {

    dogs=Number(dogs);
    animals=Number(animals);

    let price;
    price = (dogs * 2.50) + (animals * 4)
    console.log(`${price}`)


}
petShop("5", "4")