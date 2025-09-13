const animals ={
    cute: {
        name: "Mr. Cute",
        image:"https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        votes:0
    },
    monkey: {
        name: "Mx. Monkey",
        image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        votes:0
  },
  zebra: {
    name: "Ms. Zebra",
    image: "https://media.giphy.com/media/5xtDarDFG9fV3kqd7rG/giphy.gif",
    votes:0
  }
};


function showAnimal(animal) {
    const infoDiv =document.getElementById("animalInfo");
    infoDiv.innerText ="";

    const nameEle = document.createElement("h2");
    nameEle.innerText = animal.name;

    const imgEle = document.createElement("img");
    imgEle.src = animal.image;
    imgEle.alt = animal.name;

    const votesEle =document.createElement("p");
    votesEle.innerText =`Votes: ${animal.votes}`;

    const votesBUtton = document.createElement("Button");
    votesBUtton.innerText ="VOTE";
    votesBUtton.onclick = () => {
        animal.votes++;
        votesEle.innerText =`Votes: ${animal.votes}`;
    };

   
    infoDiv.appendChild(nameEle);
    infoDiv.appendChild(imgEle);
    infoDiv.appendChild(votesEle);
    infoDiv.appendChild(votesBUtton);

}

document.getElementById("cuteBtn").onclick = () =>showAnimal(animals.cute);
document.getElementById("monkeyBtn").onclick =() =>showAnimal(animals.monkey);
document.getElementById("zebraBtn").onclick =() =>showAnimal(animals.zebra);