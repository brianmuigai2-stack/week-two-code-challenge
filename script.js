fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(data => {
    const listDiv = document.getElementById("animalList");

    data.forEach(animal => {
    
      const btn = document.createElement("button");
      btn.innerText = animal.name;
      btn.onclick = () => showAnimal(animal);
      listDiv.appendChild(btn);
    });
  })
  .catch(err => console.error("Error fetching animals:", err));


function showAnimal(animal) {
  const infoDiv = document.getElementById("animalInfo");
  infoDiv.innerHTML = ""; 

  const nameEle = document.createElement("h2");
  nameEle.innerText = animal.name;

  const imgEle = document.createElement("img");
  imgEle.src = animal.image;
  imgEle.alt = animal.name;
  

  const votesEle = document.createElement("p");
  votesEle.innerText = `Votes: ${animal.votes}`;

  const voteButton = document.createElement("button");
  voteButton.innerText = "VOTE";
  voteButton.onclick = () => {
    animal.votes++;
    votesEle.innerText = `Votes: ${animal.votes}`;
  };

  infoDiv.append(nameEle, imgEle, votesEle, voteButton
  );
}