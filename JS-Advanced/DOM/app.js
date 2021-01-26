function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textArea')
   const bestRestaurantP = document.querySelector('#bestRestaurant>p')
   const workersP = document.querySelector('#workers>p')
   function onClick () {
     let arr = JSON.parse(input.value)
     let obj = {}
        for(let line of arr){
           let tokens = line.split(' - ')
           let name = tokens[0]
           let workersArr = tokens[1].split(', ')
           let workers = []
           let averageSalary = 0

           for(let worker of workersArr){
              let workerTokens = worker.split(' ')
              const salary = Number(workerTokens[1])
              workers.push({
                 name: workerTokens[0], salary
              })
              }

              if(obj[name]){
               workers = workers.concat(obj[name].workers) 
              }
              workers.sort((a,b) => b.salary - a.salary)
              let bestSalary = workers[0].salary
              averageSalary = workers.reduce((sum,worker)=> sum + worker.salary,0)/workers.length

              obj[name]={
                 workers,
                 averageSalary,
                 bestSalary
              }
 }
let bestReastaurantSalary = 0
let bestReastaurant = undefined
for(let name in obj){
 if(obj[name].averageSalary > bestReastaurantSalary){
     bestReastaurant = {name, 
     workers: obj[name].workers,
     bestSalary: obj[name].bestSalary,
     averageSalary: obj[name].averageSalary
}
bestReastaurantSalary = obj[name].averageSalary
 }
}
bestRestaurantP.textContent = `Name: ${bestReastaurant.name} Average Salary: ${bestReastaurant.averageSalary.toFixed(2)} Best Salary: ${bestReastaurant.bestSalary.toFixed(2)}`
let result = []
bestReastaurant.workers.forEach(worker =>
   result.push(`Name: ${worker.name} With Salary: ${worker.salary}`))

workersP.textContent = result.join(" ")
   }
}