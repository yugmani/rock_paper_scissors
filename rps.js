var computer_score = 0;
var user_score = 0;
var computer = ["r", "p", "s"];

var user = prompt("Choose r, p or s:");
if (user === "r" || user === "p" || user ==="s"){

    var random = Math.floor(Math.random()*(2-0)+0);
    console.log(random);

    if (random < 3 ) {
            if (computer[random] === "r" && user === "p" ){
                alert("You are the winner!!!");
                user_score++;
            }
            else if (computer[random] === "r" && user === "s" ){
                alert("You are the looser!!!");
                computer_score++;
            }
            else if (computer[random] === "p" && user === "r" ){
                alert("You are the looser!!!");
                computer_score++;
            }
            else if (computer[random] === "p" && user === "s" ){
                alert("You are the winner!!!");
                user_score++;
            }
            else if (computer[random] === "s" && user === "r" ){
                alert("You are the winner!!!");
                user_score++;
            }
            else if (computer[random] === "s" && user === "p" ){
                alert("You are the looser!!!");
                computer_score++;
            }
            else  {
                alert("Here's a Tie!!!");
            }


        alert("Your choice is "+ user + " Computer's Choice is: "+ computer[random]);
        alert("Your score is "+ user_score+ " Computer Scored: "+ computer_score);
 
        }
    else {
        alert("Try Again!!!");
        }
    }
    
else {
    alert("Try Again!!!");
}