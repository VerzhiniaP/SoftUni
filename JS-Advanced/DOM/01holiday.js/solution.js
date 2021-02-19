function addDestination(){
    let input = document.querySelector('#input')
    let city = input.children[1]
    let country = input.children[3]
    let season = input.children[5]
    let destination = document.getElementById('destinations').children[1]
    let summary = document.getElementById('summaryBox')

    if(city.value == '' || country.value == '' || season.value == ''){
        return
    }else{
   let td1 = document.createElement('td')
   td1.textContent = `${city.value}, ${country.value}`
   city.value = ''
   country.value = ''
   let td2 = document.createElement('td')
   let firstW = season.value
   firstW = firstW[0].toUpperCase()
   let last = season.value.slice(1)
   let word = firstW + last
   td2.textContent = `${word}`
  // season.value = ''
   let tr = document.createElement('tr')
   tr.appendChild(td1)
   tr.appendChild(td2)
   destination.appendChild(tr)
   if(season.value == 'summer'){
    summary.children[1].value++
    
  }else if(season.value == 'autumn'){
   summary.children[3].value++
  }else if(season.value == 'winter'){
   summary.children[5].value++
  }else if(season.value == 'spring'){
   summary.children[7].value++
  }
    }
   season.value = ''
    
  
}