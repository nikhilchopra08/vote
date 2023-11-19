import { vote } from "../../declarations/vote";

//For First Participant
function handleClickForA() {
  console.log("PlayerA");
  const hasVoted = localStorage.getItem("hasVoted");

  if (hasVoted) {
    console.log("You have already voted.");
    return;
  }

  vote.VoteA();

  document.getElementById("votedfoA").innerText = "Vote Registered for Player A";

  localStorage.setItem("hasVoted", "true");

  PlayerA.removeEventListener("click", handleClickForA);

}

const PlayerA = document.getElementById("PlayerA");

PlayerA.addEventListener("click", handleClickForA);
PlayerA.setAttribute("disabled", true);

//for Second Participant
function handleClickForB() {
  console.log("PlayerB");

  const hasVoted = localStorage.getItem("hasVoted");

  if (hasVoted) {
    console.log("You have already voted.");
    return;
  }

  vote.VoteB();

  document.getElementById("votedfoB").innerText = "Vote Registered for Player B";

  localStorage.setItem("hasVoted", "true");
}

const PlayerB = document.getElementById("PlayerB");

PlayerB.addEventListener("click", handleClickForB);
PlayerB.setAttribute("disabled", true);

//For Third Participant
function handleClickForC() {
  console.log("PlayerC");

  const hasVoted = localStorage.getItem("hasVoted");

  if (hasVoted) {
    console.log("You have already voted.");
    return;
  }

  vote.VoteC();

  document.getElementById("votedfoC").innerText = "Vote Registered for Player C";

  localStorage.setItem("hasVoted", "true");
}

const PlayerC = document.getElementById("PlayerC");

PlayerC.addEventListener("click", handleClickForC);
PlayerC.setAttribute("disabled", true);

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});