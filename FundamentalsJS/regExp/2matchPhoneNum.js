function phone([arr]){

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g

    let result = arr.match(pattern)
    console.log(result.join(', '));
}
phone(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])