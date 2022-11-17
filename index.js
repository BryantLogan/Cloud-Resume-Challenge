const visitorLabel = document.getElementById("visitorLabel");

// updates the visitor count to current visits after getting current
// current visit count from DynamoDB table
async function setIncreaseCount() {
    try {
      let data = await increaseCount();
      let increasedCount = data.hits;
      document.getElementById("visitorLabel").innerHTML = `This site has been visited ${increasedCount} times.`;
    } catch(err) {
      console.log(err);
    }
  }
  
// calls GET API to trigger Lambda function to retrieve visit count from DynamoDB
  // async function getCount() {
  //   try {
  //     let response = await fetch('https://mtgun9y6ie.execute-api.us-east-1.amazonaws.com/post/counter');
  //     let data = await response.json();
  //     return data;
  //   } catch(err) {
  //     console.log(err);
  //   }
  // }

// calls PUT API to trigger Lambda function to add +1 visit to visit count attribute in DynamoDB
  async function increaseCount() {
    try{
      let response = await fetch('https://x62ycm3uu0.execute-api.us-east-1.amazonaws.com/post/counter', {
        headers: {
            "Content-Type": "application/json",
            },       
            method: "POST",
        })
        let data = await response.json();
        return data;
      }
      catch(err) {
        console.log(err);
      }
  }


// Calls function to update index.html with accurate visit count
setIncreaseCount();

// Calls function to add +1 visit count to backend DynamoDB
increaseCount();
