function subtract() {
    const first = document.getElementById('firstNumber').value
    const second = document.getElementById('secondNumber').value
    let sum = Number(first) + Number(second)
    sum = Number(first) - Number(second)
    console.log(document.getElementById('result').textContent = sum)
}