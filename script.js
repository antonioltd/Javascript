let dolphinsAverageScore;
let koalasAverageScore;

const dolphinsScores = {
    firstAttempt : 20,
    secondAttempt : 30,
    thirdAttempt : 40,
}

const koalasScores = {
    firstAttempt : 20,
    secondAttempt : 30,
    thirdAttempt : 40,
}

const calculateTeamAverage =(scores) => {
    return (scores.firstAttempt + scores.secondAttempt + scores.thirdAttempt) / 3;
}

const result = (dolphinsScores,koalasScores) => {
    dolphinsAverageScore = calculateTeamAverage(dolphinsScores);
    koalasAverageScore = calculateTeamAverage(koalasScores);
    const higherScoreTeam = dolphinsAverageScore > koalasAverageScore ? "Dolphin" : dolphinsAverageScore === koalasAverageScore ? "TIE" : "Koalas";
    
    switch (higherScoreTeam) {
        case "Dolphin":
            if(dolphinsAverageScore >= (koalasAverageScore * 2 )) return `${higherScoreTeam} win (${dolphinsAverageScore} vs. ${koalasAverageScore})`; 
        case "Koalas":
            if(koalasAverageScore >= (dolphinsAverageScore * 2 )) return `${higherScoreTeam} win (${koalasAverageScore} vs. ${dolphinsAverageScore})`;       
    
        default:
            return "No team wins!"
    }
}


const res = result(dolphinsScores,koalasScores);
console.log(res)
