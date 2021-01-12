function pass(password){
    
    let result = []
    
    function passLength(pass){
        let isTrue = true
        if(pass.length >= 6 && pass.length <= 10){
            isTrue = true
        }else{
            isTrue = false
        }
        return isTrue ? true : 'Password must be between 6 and 10 characters'

    }
    function passLD(pass){
        let isValidPass = true
        for(let i = 0 ; i < pass.length ; i++){
            let isValid = true
            let code = pass[i].charCodeAt(0) 
            if(code >= 48 && code <= 57 ||
                code >= 65 && code <= 90 ||
                code >= 97 && code <= 122){
                   isValid = true
                }else{
                    isValid = false
                    isValidPass = false
                    break
            }
        }
        return isValidPass ? true : 'Password must consist only of letters and digits'
    }
    function digits(pass){
        let count = 0
        for(let i = 0 ; i < pass.length ; i++){
            let code = pass[i].charCodeAt(0)
            if(code >= 48 && code <= 57){
                count ++
            }
        }
        return count >= 2 ? true : 'Password must have at least 2 digits'
    }
    if( passLength(password) !== true){
        result.push(passLength(password))
    } 
     if( passLD(password) !== true){
        result.push(passLD(password))
    }
     if( digits(password) !== true){
        result.push(digits(password))
    } 

    if((passLength(password)) === true && (passLD(password)) === true &&
     (digits(password)) === true ){
        result.push('Password is valid')
    }

    return result.join('\n')




}
console.log(pass('MyPass123'))