function chochko([arr]){

   let regex = /(?<str>\D+)(?<num>\d+)/g
   let match = regex.exec(arr)
   let newArr = []
   let countSymbols = []
   while(match !== null){
       let array = []
       let symbols = match.groups.str
       let count = Number(match.groups.num)
         if(count !==0){
            array = symbols.split('')
            array.forEach(element => {
                el = element.toUpperCase()
                if(!countSymbols.includes(el)){
                    countSymbols.push(el)
                    
                }
                return countSymbols
            });
         }
       let upper = symbols.toUpperCase()
       let pushStr = upper.repeat(count)
       newArr.push(pushStr)
       match = regex.exec(arr)
   }
   console.log(`Unique symbols used: ${countSymbols.length}`);
   console.log(newArr.join(''));

  
    

}
chochko([
    'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15'
  ]
  )