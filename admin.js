const results = document.getElementById("results");

function openVote() {
  const speaker = document.getElementById("speaker").value;
  db.ref("event").set({
    status: "open",
    speaker: speaker
  });
}

function closeVote() {
  db.ref("event/status").set("closed");
}

db.ref("votes").on("value", snapshot => {
  results.innerHTML = "";
  const data = snapshot.val() || {};
  Object.keys(data).forEach(key => {
    const li = document.createElement("li");
    li.innerText = key + ": " + data[key];
    results.appendChild(li);
  });
});
