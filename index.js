const visitorLabel = document.getElementById("visitorLabel");

async function increaseCount(){
    const endpoint = new URL ('https://ebab2mr3z5.execute-api.us-east-1.amazonaws.com/prod/');
    
    return (fetch(endpoint, {
        method: 'GET',
    }).json())
}

console.log(await increaseCount());

//     visitorLabel.innerHTML = (`This site have been visited ${count} times.`);
// }