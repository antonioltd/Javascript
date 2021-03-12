let dolphinsAverageScore;
let koalasAverageScore;

const dolphinsScores = {
  firstAttempt: 345,
  secondAttempt: 345,
  thirdAttempt: 40,
};

const koalasScores = {
  firstAttempt: 234,
  secondAttempt: 234,
  thirdAttempt: 3,
};

const calculateTeamAverage = scores =>
  (scores.firstAttempt + scores.secondAttempt + scores.thirdAttempt) / 3;

const checkWinner = (dolphinsScores, koalasScores) => {
  dolphinsAverageScore = calculateTeamAverage(dolphinsScores);
  koalasAverageScore = calculateTeamAverage(koalasScores);
  if (dolphinsAverageScore >= koalasAverageScore * 2)
    return `Dolphins wins (${dolphinsAverageScore} vs. ${koalasAverageScore})`;
  else if (koalasAverageScore >= dolphinsAverageScore * 2)
    return `Koalas wins (${koalasAverageScore} vs. ${dolphinsAverageScore})`;
  else return 'No one wins...';
};
console.log(checkWinner(dolphinsScores, koalasScores));
