 function loadingBwar(num) {
        let procentIndicator = num / 10;
        let procentLoader = '..........';
        let procentArr = procentLoader.split('');
        if (num == 100) {
            console.log('100% Complete!');
            console.log('[%%%%%%%%%%]');
        } else {
            for (let i = 0; i < procentIndicator; i++) {
                procentArr.pop();
                procentArr.unshift('%');
     
            }
            console.log(`${num}% [${procentArr.join('')}]`);
            console.log('Still loading...');
        }
    }
   
    loadingBwar(30)