function solve() {
    const infoBox = document.querySelector('#info span')
      let stop = {
          next: 'depot'
      }
    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/` + stop.next
         const response = await fetch(url)
         const data = await response.json()
         stop = data
         infoBox.textContent = `Next stop ${stop.name}`
         document.getElementById('depart').disabled = true
         document.getElementById('arrive').disabled = false  
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${stop.next}`
        document.getElementById('depart').disabled = false
        document.getElementById('arrive').disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();