function hotel(month, count) {
    count = Number(count);

    let studio = 0;
    let apartment = 0;
    

    if (month === "May" || month === "October") {
        studio = 50  * count 
        apartment = 65 * count
        if (count > 7 && count < 14) {
            studio = studio * 0.95

        } else if ( count > 14){
            studio = studio * 0.70
            apartment = apartment * 0.90
        }

    } else if (month === "June" || month === "September") {
        studio = 75.20 * count 
        apartment = 68.70 * count 
            if (count > 14) {
                studio = studio * 0.8
                apartment = apartment * 0.9
            }
        

    }  else if (month === "July" || month === "August") {
        studio = 76 * count
        apartment = 77 * count 
        
            if (count > 14) {
                apartment = apartment * 0.9;
            }
        

    }



    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`)

}
hotel ("August" , "20")