// random value generated
  var y = Math.floor(Math.random() * 10+1);

var x = document.getElementById("guessField").value;

if(x == y)
    {
      alert("CONGRATULATIONS!!!"+playername+" YOU GUSSED IT RIGHT IN"+ GUESS + " GUESS ");
    }
else if(x > y)
    {
        guess++:
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
else
{
 guess++;
 alert("OOPS SORRY!! TRY A GREATER NUMBER")   
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}


   
