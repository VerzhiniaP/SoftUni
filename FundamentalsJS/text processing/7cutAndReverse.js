function cut(str){

    let count = str.length / 2
    let first = str.substring(0,count)
    let second = str.substring(count)
    first = first.split('').reverse('').join('')
    second = second.split('').reverse('').join('')
    console.log(first)
    console.log(second);
}
cut('tluciffiDsIsihTgnizamAoSsIsihT')