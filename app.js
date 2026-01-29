const voteDiv = document.getElementById("vote");
const thanksDiv = document.getElementById("thanks");
const speakerText = document.getElementById("speaker");

db.ref("event").on("value", (snap) => {
  const data = snap.val();
  if (!data) return;

  if (data.status === "open") {
    voteDiv.classList.remove("hidden");
    speakerText.innerText = `Speech di ${data.speaker}`;
  } else {
    voteDiv.classList.add("hidden");
  }
});

function vote(choice) {
  db.ref("votes/" + choice).transaction((current) => {
    return (current || 0) + 1;
  });

  voteDiv.classList.add("hidden");
  thanksDiv.classList.remove("hidden");
}
