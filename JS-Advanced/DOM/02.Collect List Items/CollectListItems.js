function extractText() {
    const liElements = doument.getElementByTagName('li')
    const elementText = liElements.map(e => e.textContent)
    document.getElementById('result').value = elementText.join('n')
}