function editElement() {
    function change(text,match,replacemr){
    let regExp = new Regexp(match,g)
    let newText = text.replace(regExp,replacer)
    document.getElementById('e1').textContent = newText }

}