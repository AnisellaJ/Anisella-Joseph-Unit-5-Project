let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".results-two");

submitButton.onclick = function() {
    //write your code here!
    let comment = document.querySelector(".comment").value;
    let commenttwo = document.querySelector(".comment-two").value;
    console.log(comment);
    messages.innerHTML = (comment + commenttwo);
    let activityInput = document.querySelector(".comment-two").value;
  
    let number = document.querySelector(".comment").value;
    number = Number(number);

    if ((number >= 3 && number <= 10) && (activityInput === "shopping")) {
        messages.innerHTML = "You got blue!";
    }
    
    if ((number >= 0 && number <= 2) && activityInput === "sports") {
        messages.innerHTML = "You got purple!";
    }
    if ((number >= 0 && number <= 2) && activityInput === "shopping") {
        messages.innerHTML = "You got green!";
    }
    if ((number >= 3 && number <= 10) && activityInput === "sports") {
        messages.innerHTML = "You got pink!";
    }
    
    
};