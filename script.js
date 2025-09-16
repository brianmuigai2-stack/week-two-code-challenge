fetch("http://localhost:3000/characters")
  .then(res => res.json())
  .then(data => {
    const listAnimals = document.getElementById("animalList");

    data.forEach(animal => {
    
      const button = document.createElement("button");
      button.innerText = animal.name;
      button.onclick = () => showAnimal(animal);
      listAnimals.append(button);
    });
  })
  .catch(error => console.log("Error fetching animals:", error));


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