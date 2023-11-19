import { vote } from "../../declarations/vote";

let votesRemaining = 3;

function handlePlayerClick(playerId, voteFunction, votedElementId) {
  return function () {
    console.log(`Player ${playerId}`);
    const hasVoted = localStorage.getItem("hasVoted");

    if (hasVoted) {
      console.log("You have already voted.");
      return;
    }

    if (votesRemaining <= 0) {
      console.log("You have used all your votes.");
      return;
    }

    voteFunction();
    document.getElementById(votedElementId).innerText = `Vote Registered for Player ${playerId}`;

    votesRemaining--;
    localStorage.setItem("hasVoted", "true");

    if (votesRemaining === 0) {
      // Disable all players after using all votes
      disableAllPlayers();
    }
  };
}

function disableAllPlayers() {
  const players = [PlayerA, PlayerB, PlayerC];
  players.forEach((player) => {
    player.removeEventListener("click", player.clickHandler);
    player.setAttribute("disabled", true);
  });
}

const PlayerA = document.getElementById("PlayerA");
PlayerA.clickHandler = handlePlayerClick("A", vote.VoteA, "votedfoA");
PlayerA.addEventListener("click", PlayerA.clickHandler);

const PlayerB = document.getElementById("PlayerB");
PlayerB.clickHandler = handlePlayerClick("B", vote.VoteB, "votedfoB");
PlayerB.addEventListener("click", PlayerB.clickHandler);

const PlayerC = document.getElementById("PlayerC");
PlayerC.clickHandler = handlePlayerClick("C", vote.VoteC, "votedfoC");
PlayerC.addEventListener("click", PlayerC.clickHandler);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});
