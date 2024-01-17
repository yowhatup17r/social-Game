
document.addEventListener('DOMContentLoaded', () => {
    const economyButtons = document.querySelectorAll('#economy-selection button');
    economyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const chosenEconomy = event.target.id;
            startGame(chosenEconomy);
        });
    });
});

function startGame(economyType) {
    document.getElementById('economy-selection').style.display = 'none';
    const gameplayArea = document.getElementById('gameplay-area');
    gameplayArea.style.display = 'block';

    // Add specific game mechanics for each economy type
    switch (economyType) {
        case 'command':
            // Initialize Command Economy Game
            break;
        case 'mixed':
            // Initialize Mixed Economy Game
            break;
        case 'free-market':
            // Initialize Free Market Economy Game
            break;
    }
}
