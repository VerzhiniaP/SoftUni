function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather)

    let forecast = document.getElementById('forecast')
    forecast.style.display = 'block'   
}

attachEvents();

async function getWeather(){
    const input = document.getElementById('location')
    const cityName = input.value 
    const code  = await getCode(cityName)

   const [ current,upcoming] = await Promise.all([
       getCurrent(code),
       getUpcoming(code)
   ])
   let currentDom = document.getElementById('current')
   currentDom.textContent = ''
   let div = document.createElement('div')
   div.className = 'forecasts'
   let span = document.createElement('span')
   span.className = 'condition symbol'
   if(current.forecast.condition == 'Sunny'){
   span.innerHTML = '&#x2600'
   }else if(current.forecast.condition == 'Partly sunny'){
    span.innerHTML = '&#x26C5'
   }else if(current.forecast.condition == 'Overcast'){
    span.innerHTML = '&#x2601'
   }else if(current.forecast.condition == 'Rain'){
    span.innerHTML = '&#x2614'
   }
   div.appendChild(span)
   let span2 = document.createElement('span')
   span2.className = 'condition'
   let span3 = document.createElement('span')
   span3.className = 'forecast-data'
   span3.textContent = current.name
   span2.appendChild(span3)
   let span4 = document.createElement('span')
   span4.className = 'forecast-data'
   span4.innerHTML = `${current.forecast.low}&#176/${current.forecast.high}&#176`
   span2.appendChild(span4)
   let span5 = document.createElement('span')
   span5.className = 'forecast-data'
   span5.textContent = current.forecast.condition
   span2.appendChild(span5)
   div.appendChild(span2)
   currentDom.appendChild(div)
   //console.log(upcoming);
   let upcomDom = document.getElementById('upcoming')

  let divUp = document.createElement('div')
  divUp.className = 'forecast-info'
   let arr = Object.values(upcoming)
   for(let line of arr){
       if(line.name.toLowerCase() == cityName){
          for(let row of line.forecast){
            let spanUp = document.createElement('span')
            spanUp.className = 'upcoming'
            let spanSymbol = document.createElement('span')
            spanSymbol.className = 'symbol'
            if(row.condition == 'Sunny'){
                spanSymbol.innerHTML = '&#x2600'
                }else if(row.condition == 'Partly sunny'){
                 spanSymbol.innerHTML = '&#x26C5'
                }else if(row.condition == 'Overcast'){
                 spanSymbol.innerHTML = '&#x2601'
                }else if(row.condition == 'Rain'){
                 spanSymbol.innerHTML = '&#x2614'
                }
                spanUp.appendChild(spanSymbol)
                let spanDegrees = document.createElement('span')
                spanDegrees.className = 'forecast-data'
                spanDegrees.innerHTML = `${row.low}&#176/${row.high}&#176`
                spanUp.appendChild(spanDegrees)
                let spanW = document.createElement('span')
                spanW.className = 'forecast-data'
                spanW.textContent = row.condition
                spanUp.appendChild(spanW)

                divUp.appendChild(spanUp)
              
           }   
       }
   }
   upcomDom.appendChild(divUp)
   
}
async function getCode(cityName){
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    const response = await fetch(url)
    const data = await response.json()
    return data.find(x => x.name.toLowerCase() == cityName.toLowerCase()).code
}
async function getCurrent(code){
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code
    const response = await fetch(url)
    const data = await response.json()
    return data
}
async function getUpcoming(code){
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming'
    const response = await fetch(url)
    const data = await response.json()
    return data
}