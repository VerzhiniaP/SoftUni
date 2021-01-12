function demo([arr]){

   let regex = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g
   let result = arr.match(regex)
   
   console.log(result);

}
demo([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov'
])