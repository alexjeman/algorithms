var message = "";

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i++) {
  message += `<h2>Student: ${students[i].name} </h2>`;
  message += `<p>Track: ${students[i].track} </p>`;
  message += `<p>Track: ${students[i].points} </p>`;
  message += `<p>Achievents: ${students[i].achivements} </p>`;
}

print(message);
