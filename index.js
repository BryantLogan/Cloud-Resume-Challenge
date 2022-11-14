const visitorLabel = document.getElementById("visitorLabel");

// updates the visitor count to current visits after getting current
// current visit count from DynamoDB table
async function setIncreaseCount() {
    try {
      let data = await getCount();
      let increasedCount = data.hits;
      document.getElementById("visitorLabel").innerHTML = `This site has been visited ${increasedCount} times.`;
    } catch(err) {
      console.log(err);
    }
  }
  
// calls GET API to trigger Lambda function to retrieve visit count from DynamoDB
  async function getCount() {
    try {
      let response = await fetch('https://ebab2mr3z5.execute-api.us-east-1.amazonaws.com/prod/counter/get');
      let data = await response.json();
      return data;
    } catch(err) {
      console.log(err);
    }
  }

// calls PUT API to trigger Lambda function to add +1 visit to visit count attribute in DynamoDB
  async function increaseCount() {
    fetch('https://ebab2mr3z5.execute-api.us-east-1.amazonaws.com/prod/counter/add', {
        headers: {
            "Content-Type": "application/json",
            },       
            method: "PUT",
        });
  }

// Calls function to update index.html with accurate visit count
setIncreaseCount();

// Calls function to add +1 visit count to backend DynamoDB
increaseCount();
