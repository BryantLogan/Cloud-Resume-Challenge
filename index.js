const visitorLabel = document.getElementById("visitorLabel");

// async function increaseCount(){
//     const endpoint = new URL ('https://ebab2mr3z5.execute-api.us-east-1.amazonaws.com/prod/');
    
//     return (fetch(endpoint, {
//         method: 'GET',
//     }).json())
// }
async function setIncreaseCount() {
    try {
      let data = await getCount();
      let increasedCount = data.hits;
      document.getElementById("visitorLabel").innerHTML = `This site has been visited ${increasedCount} times.`;
    } catch(err) {
      console.log(err);
    }
  }
  
  async function getCount() {
    try {
      let response = await fetch('https://ebab2mr3z5.execute-api.us-east-1.amazonaws.com/prod/');
      let data = await response.json();
      return data;
    } catch(err) {
      console.log(err);
    }
  }

  async function increaseCount() {
    fetch('https://ebab2mr3z5.execute-api.us-east-1.amazonaws.com/prod/', {
        headers: {
            "Content-Type": "application/json",
            },       
            method: "PUT",
        });
  }
  
setIncreaseCount();
increaseCount();

// console.log(await increaseCount());

//     visitorLabel.innerHTML = (`This site have been visited ${count} times.`);
// }