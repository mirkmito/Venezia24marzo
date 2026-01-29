const speakerInput = document.getElementById("speakerInput");
const resultsList = document.getElementById("results");

function openVote() {
  db.ref("event").set({
    status: "open",
    speaker: speakerInput.value || "Speaker",
  });
}

function closeVote() {
  db.ref("event/status").set("closed");
}

function resetVotes() {
  db.ref("votes").set({});
}

db.ref("votes").on("value", (snap) => {
  resultsList.innerHTML = "";
  const data = snap.val() || {};
  Object.keys(data).forEach((key) => {
    const li = document.createElement("li");
    li.innerText = `${key}: ${data[key]}`;
    resultsList.appendChild(li);
  });
});
``
