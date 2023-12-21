const isWinner = (player1, player2) => {

    let player1Score = 0
    let player2Score = 0

    const getScoreFromNumbers = numbers => {
        let score = 0
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i - 1] === 10 || numbers[i - 2] === 10) {
                score += numbers[i] * 2
            } else {
                score += numbers[i]
            }
        }
        return score
    };

    player1Score = getScoreFromNumbers(player1)
    player2Score = getScoreFromNumbers(player2)

    if (player1Score === player2Score) return 0;

    return player1Score > player2Score ? 1 : 2;

};
console.log(isWinner([4, 10, 7, 9], [6, 5, 2, 3]))
