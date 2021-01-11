function fruit(s1 , b, o, r, s2) {
    s1 =Number(s1);
    b=Number(b);
    o=Number(o);
    r=Number(r);
    s2=Number(s2);

    let r2 = s1 - (s1 * 0.5);
    let o2 = r2 - (r2 * 0.4);
    let b2 = r2 - (r2 * 0.8);

    let sAmount = s1 * s2;
    let bAmount = b * b2;
    let oAmount = o * o2;
    let rAmount = r * r2;

    result = sAmount + bAmount + oAmount + rAmount;

    console.log(result);
    

    


    

}

fruit("48",
"10",
"3.3",
"6.5",
"1.7");