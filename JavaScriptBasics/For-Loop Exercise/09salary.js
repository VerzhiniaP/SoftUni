function solve(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 2 ; i < input.length ; i++) {
        let tabs = input[i];
        

        if (tabs ===  'Facebook') {
            salary -= 150
        } else if (tabs === 'Instagram') {
            salary -= 100
        } else if (tabs === 'Reddit') {
            salary -= 50
        } 
        if ( salary <= 0) {
            console.log(`You have lost your salary.`);
            break;

    }
    
    } if(salary > 0) {
    console.log(salary)}



}
solve([ '10', '750', 
    'Facebook',
      'Dev.bg',
    'Instagram',
     'Facebook',
    'Reddit',  
      'Facebook',
    'Facebook']
  )