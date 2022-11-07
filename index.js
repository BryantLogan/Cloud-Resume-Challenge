const visitorLabel = document.getElementById("visitorLabel")

const element = document.body

let count = 0;

element.onload = increaseCount;

function increaseCount(){
    count += 1;
    visitorLabel.innerHTML = (`This site have been visited ${count} times.`);
}