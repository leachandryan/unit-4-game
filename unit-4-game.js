       //wincounter tracks total player wins
        var wincounter = 0;
       //playercounter tracks current player score
        var playercounter = 0;
       //losscounter tracks total losses
        var losscounter = 0;
       //this generates a random number between 20-120 that the player must equal to generate a win
         var computerchoice = Math.floor((Math.random() * 101) + 20);
         console.log(computerchoice)
         document.getElementById("computernumber").innerHTML = computerchoice;
         
       //the following jewelnumber var(s) generate a random assigned number to each jewel ID 
         var jewelnumber1 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber1)

         var jewelnumber2 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber2)

         var jewelnumber3 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber3)

         var jewelnumber4 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber4)
       //following on click functions add jewelnumber var value to the player counter when a gem is clicked on
        $("#jewel1").on("click", function(event) {
            playercounter = jewelnumber1 + playercounter;
            console.log(playercounter);
            document.getElementById("playercounter").innerHTML = playercounter;
        });

        $("#jewel2").on("click", function(event) {
            playercounter = jewelnumber2 + playercounter;
            console.log(playercounter);
            document.getElementById("playercounter").innerHTML = playercounter;
        });
        $("#jewel3").on("click", function(event) {
            playercounter = jewelnumber3 + playercounter;
            console.log(playercounter);
            document.getElementById("playercounter").innerHTML = playercounter;
        });
        $("#jewel4").on("click", function(event) {
            playercounter = jewelnumber4 + playercounter;
            console.log(playercounter);
            document.getElementById("playercounter").innerHTML = playercounter;
        });
        //(NOT WORKING and DO NOT KNOW WHY!!!) this function is suppose to compare playercounter(aka player's current score) to the computer generated number
        //if playercounter is equal to computerchoice, generate a win to the win counter
        //if playercounter is greater than computerchoice, generate a loss to the loss counter
        var compare = function(choice1,choice2) {
           
        
          if (choice1 === choice2) {
              wincounter++
              document.getElementById("#totalwin").innerHTML = wincounter;
              playercounter=0;
              console.log="test"
          }
          else if (choice1 > choice2) {
              losscounter++
              document.getElementById("#totalloss").innerHTML = losscounter;
              playercounter=0;
              console.log="test"
          }
          var results = compare(playercounter,computerchoice);
         
        };