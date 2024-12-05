const query = "http://localhost:3001/api/users";

function renderData(users) {
    console.log(users);
    const resultsEl = document.querySelector(".results");
    for (let index = 0; index < users.length; index++) {
        let nameEl = document.createElement("h2");
        nameEl.textContent = users[index].name;
        resultsEl.append(nameEl);
    }

}
fetch(query)
  .then((response) => response.json())
  .then((data) => renderData(data));