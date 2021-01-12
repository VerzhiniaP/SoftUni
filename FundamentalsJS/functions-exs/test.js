function examPreparation(input) {
    let goodscore=0;
    let badscore=0;
    let sumscore=0;
    let lastproblem=" ";
    let badsc=Number(input[0]);
    let problem=input[1];
    let score=Number(input[2]);
    index=1
    while(badscore<badsc){
        index++;
        problem++;
        score++;
        sumscore+=score;
        if(score<=4){
            badscore+=1;
            badscore++;
        }else{
            goodscore+=1;
            goodscore++;
        }
        problem++;
        score++;
        index++;
        if(index="Enough"){
            console.log(`Average score: ${sumscore/score}`);
            console.log(`Number of problems: ${badscore+goodscore}`);
            console.log(`Last problem: ${" "}`);
            break;
        }
    }
    if (badscore>=badsc){
    console.log(`You need a break ${badscore} poor grades.`);
    }
}
examPreparation(['3', 'Money', '6', 'Story', '4', 'SpringTime', '5', 'Bus', '6', 'Enough']);
examPreparation(['2', 'Income', '3', 'GameInfo', '6', 'BestPlayer', '4']);