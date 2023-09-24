// Sample data for tournament rankings
const tournamentRankingsData = [
    { team: 'Fnatic', rank: 1 },
    { team: 'G2 Esports', rank: 2 },
    { team: 'Team Liquid', rank: 3 },
    { team: 'Cloud9', rank: 4 },
];

// Sample data for global rankings
const globalRankingsData = [
    { team: 'DAMWON Gaming', rank: 1 },
    { team: 'T1', rank: 2 },
    { team: 'EDward Gaming', rank: 3 },
];

// Sample data for team rankings
const teamRankingsData = [
    { team: 'Rogue', rank: 5 },
    { team: 'MAD Lions', rank: 6 },
];


// Function to display rankings
function displayRankings(data, containerId) {
    const container = document.getElementById(containerId);
    const ul = document.createElement('ul');

    data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.rank}. ${item.team}`;
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

// Display tournament rankings
displayRankings(tournamentRankingsData, 'tournament-rankings');

// Display global rankings
displayRankings(globalRankingsData, 'global-rankings');

// Display team rankings
displayRankings(teamRankingsData, 'team-rankings');