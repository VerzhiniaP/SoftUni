function attachGradientEvents() {
    let result = document.getElementById('result')
    let button = document.getElementById('gradient')
    button.addEventListener('mousemove', onMove)
    function onMove(event){
        let offsetX = event.offsetX
        let percent = Math.floor(offsetX / event.target.clientWidth * 100)
        result.textContent = `${percent}%`
    }

   
}