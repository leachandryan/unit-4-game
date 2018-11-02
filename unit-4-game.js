        var wincounter = 0;
        var playercounter = 0;
        var losscounter = 0;

         var computerchoice = Math.floor((Math.random() * 101) + 20);
         console.log(computerchoice)
         document.getElementById("computernumber").innerHTML = computerchoice;
         

         var jewelnumber1 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber1)

         var jewelnumber2 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber2)

         var jewelnumber3 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber3)

         var jewelnumber4 = Math.floor((Math.random() * 11) + 1);
         console.log(jewelnumber4)

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
        var compare = function(choice1,choice2) {
           
        
          if (choice1 === choice2) {
              wincounter++
              document.getElementById("totalwin").innerHTML = wincounter;
              playercounter=0;
              console.log="test"
          }
          else if (choice1 > choice2) {
              losscounter++
              document.getElementById("totalloss").innerHTML = losscounter;
              playercounter=0;
              console.log="test"
          }
          var results = compare(playercounter,computerchoice);
         
        };