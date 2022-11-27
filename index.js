const visitorLabel = document.getElementById("visitorLabel");

// calls POST API to trigger Lambda function to add +1 visit to visit count attribute in DynamoDB
async function increaseCount() {
  try{
    let response = await fetch('https://d9el2r2le6.execute-api.us-east-1.amazonaws.com/prod/counter', {
      // headers: {
      //     "Content-Type": "application/json",
      //     },       
          method: "POST",
      })
      let data = await response.json();
      return data;
    }
    catch(err) {
      console.log(err);
    }
}

// updates the visitor count to current visits after getting current
// visit count from DynamoDB table
async function setIncreaseCount() {
  try {
    let data = await increaseCount();
    console.log(data)
    let increasedCount = data.count;
    document.getElementById("visitorLabel").innerHTML = `This site has been visited ${increasedCount} times.`;
  } catch(err) {
    console.log(err);
  }
}

// Calls function to update index.html with accurate visit count
setIncreaseCount();

// Calls function to add +1 visit count in DynamoDB
// Returns value of count attribute in DynamoDB in response body
increaseCount();

// old endpoint: https://zfg8w7nleb.execute-api.us-east-1.amazonaws.com/prod/counter
// new endpoint: https://d9el2r2le6.execute-api.us-east-1.amazonaws.com/prod/counter