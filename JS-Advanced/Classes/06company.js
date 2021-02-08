class Company{
    constructor(departments = []){
     this.departments = departments
    }
    addEmployee(username,salary,position,department){
        salary = Number(salary)
        if(username == '' || username == undefined || username == null){
            throw new Error('Invalid input!')
        }else if(salary == '' || salary == undefined || salary == null || salary < 0){
            throw new Error('Invalid input!')
        }else if(position == '' || position == undefined || position == null){
            throw new Error('Invalid input!')
        }else if(department == '' || department == undefined || department == null){
            throw new Error('Invalid input!')
        }else{
            this.departments.push({username, salary,position,department})
            return `New employee is hired. Name: ${username}. Position: ${position}`

        }


    }
    bestDepartment(){
        let bestDep = {}
        let bestSalary = {}
        for(let line of this.departments){
            if(!bestDep.hasOwnProperty(line.department)){
                bestDep[line.department] = []
    
            }
            bestDep[line.department].push([line.username,line.salary,line.position])
            }
             let avr = 0
             let best = ''
            for(let line in bestDep){
                let avrSum = 0
                let sum = 0
                let count = 0
                for(let row of bestDep[line]){
                 sum+= row[1]
                 count++
                }
                avrSum = sum / count
                if(avrSum > avr){
                    avr = avrSum
                    best = line
                }
            }
            let printLine = `Best Department is: ${best}\nAverage salary: ${avr.toFixed(2)}`
            
            let sorted = bestDep[best].sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            for(let line of sorted){
                printLine += `\n${line.join(' ')}`
            }

        return  printLine

        
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
