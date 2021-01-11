function birthday(money) {
    money = Number(money) 

    let cake = money * 0.2;
    let drinks = cake - cake * 0.45;
    let animator = 1 / 3 * money;
    
    let result = cake + drinks + animator + money;
    console.log(result);
}

birthday("2250")
birthday("3720")