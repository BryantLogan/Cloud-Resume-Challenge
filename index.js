const visitorLabel = document.getElementById("visitorLabel");

const element = document.body;

element.onload = increaseCount;

function increaseCount(){
    let count = 0;
    count += 1;
    visitorLabel.innerHTML = (`This site have been visited ${count} times.`);
}