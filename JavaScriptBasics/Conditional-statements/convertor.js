function converter (n, arg1, arg2) {

    n  = Number(n);
    let result = n;

    if (arg1 === 'm') {
          if(arg2 === 'mm') {
            result = n * 1000;
        } else if (arg2 === 'cm') {
            result = n * 100; } 

        } else if (arg1 === 'cm') {
        if (arg2 === 'm') {
            result = n / 100;
        } else if ( arg2 === 'mm') {
            result = n * 10;
        }   
     } else if (arg1 === 'mm') {
         if (arg2 === 'm') {
             result = n / 1000;
         } else if (arg2 === 'cm') {
             result = n / 10;
         }
     }
     console.log(result.toFixed(3));
}
    
    
converter("12",
"mm",
"m")