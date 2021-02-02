function info(...array){

    // let array = [arg1,arg2,arg3]
     let obj = {}
     for(let line of array){
         let type = typeof line
         console.log(`${typeof line}: ${line}`);
         if(!obj.hasOwnProperty(type)){
             obj[type] = [] 
         }
         obj[type].push(line)
        
     }   
    
      let sorted = Object.entries(obj).sort((a,b) => b[1].length - a[1].length)
         for(let line of sorted){
             console.log(`${line[0]} = ${line[1].length}`);
         }
        }
    
info(42, 'cat', 15, 'kitten', 'tomcat')