function preparation(input) {
    let countPoorgrades = Number(input[0]);
    let currentProblem = input[1];
    let poorGrades = 0;
    let currentGrade = Number(input[2]);
    let index = 1;
    let sum = 0;
    let problemCount = 0;

    while(currentProblem !== "Enough") {
        sum+=currentGrade;
        problemCount++;

        if(currentGrade <= 4) {
            poorGrades++
        }
        if(poorGrades == countPoorgrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`)
            break;
        }
        index+=2
        currentProblem = input[index]
        currentGrade = Number(input[index + 1])
    }
    let avg = sum / problemCount;
    if(poorGrades != countPoorgrades) {
        console.log(`Average score: ${avg.toFixed(2)}`)
        console.log(`Number of problems: ${problemCount}`)
        console.log(`Last problem: ${input[index - 2]}`)
    }



}
preparation([
    '3',
    'Money',
    '6',
    'Story',
    '4',
    'Spring Time',
    '5',
    'Bus',
    '6',
    'Enough'
  ]
  )