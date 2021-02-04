function validator(obj){
let methodArr = ['GET', 'POST', 'DELETE', 'CONNECT']
if(!methodArr.includes(obj.method)){
    throw new Error('Invalid request header: Invalid Method')
}
let regexUri = /^[A-Za-z\d\.\*]+$/g

if(obj.uri == undefined || obj.uri.match(regexUri) == null || obj.uri == ''){
    throw new Error(`Invalid request header: Invalid URI`)
}
let versionArr = [ 'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1','HTTP/2.0']
if(!versionArr.includes(obj.version)){
    throw new Error(`Invalid request header: Invalid Version`)
}
let regexMessag = /^[ \d+A-Za-z@%\:*\/\.-]+[^\<\>\\&\'\"]$/g
let isTrue = regexMessag.test(obj.message)
 if(!isTrue && obj.message != ''){
    throw new Error('Invalid request header: Invalid Message')
 }




return obj
}

console.log(validator(
    // {
    //     method: 'GET',
    //     uri: 'svn.public.catalog',
    //     version: 'HTTP/1.1',
    //     message: ''
    //   }
      
     {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message:'qwertyuiopasdfghjklzxcvbnm1234567890`~!@#$%^*()-=_+[]{};:|,./? '
    }

   ))