document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelectorAll(".container");

    let coinsInA = container[2].querySelectorAll(".coin");
    let coinsInB = container[1].querySelectorAll(".coin");
    let coinsInC = container[0].querySelectorAll(".coin");
  
    const containerA = document.querySelectorAll(".container")[2];
    const containerB = document.querySelectorAll(".container")[2];
    const containerC = document.querySelectorAll(".container")[0];
  
    containerA.appendChild(coinsInC[0]);
    containerA.appendChild(coinsInC[1]);
    containerA.appendChild(coinsInC[2]);
    containerA.appendChild(coinsInC[3]);
    containerA.appendChild(coinsInC[4]);
    containerA.appendChild(coinsInC[5]);
    containerA.appendChild(coinsInC[6]);
    containerA.appendChild(coinsInC[7]);
  });