/**
 * Calculates the new Elo ratings for two players after a game.
 *
 * @param {number} playerAElo - The current Elo rating of player A.
 * @param {number} playerBElo - The current Elo rating of player B.
 * @param {number} scoreA - The score of player A in the game (0 or 1).
 * @param {number} [K=32] - The K-factor used in the Elo rating system.
 * @return {{newRatingA: number, newRatingB: number}} - The new Elo ratings for both players.
 */
function calculateElo(playerAElo: number, playerBElo: number, scoreA: number, K = 32) {
    // Calculate expected score for player A
    const expectedScoreA = 1 / (1 + Math.pow(10, (playerBElo - playerAElo) / 400));

    // Update player A's rating
    const newRatingA = playerAElo + K * (scoreA - expectedScoreA);

    // Player B's score is the opposite of player A's score
    const scoreB = 1 - scoreA;

    // Calculate expected score for player B
    const expectedScoreB = 1 / (1 + Math.pow(10, (playerAElo - playerBElo) / 400));

    // Update player B's rating
    const newRatingB = playerBElo + K * (scoreB - expectedScoreB);

    return { newRatingA, newRatingB };
}