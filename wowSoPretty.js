
if (Meteor.isClient) {


            Template.pretty.helpers({
             
              
            });

            Template.pretty.events({
              'click button': function corRandom(){

                      function getRandomInt(min, max){
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                      }

                      var rgbBloco1 = document.getElementById("rgbBloco1");
                      var rgbBloco2 = document.getElementById("rgbBloco2");
                      var rgbBloco3 = document.getElementById("rgbBloco3");
                      var rgbBloco4 = document.getElementById("rgbBloco4");
                      var rgbBloco5 = document.getElementById("rgbBloco5");

                      var redVar1 = getRandomInt(0, 255);
                      var greenVar1 = getRandomInt(0, 255);
                      var blueVar1 = getRandomInt(0, 255);
                     
                      var redVar2 = getRandomInt(0, 255);
                      var greenVar2 = getRandomInt(0, 255);
                      var blueVar2 = getRandomInt(0, 255);

                      var redVar3 = getRandomInt(0, 255);
                      var greenVar3 = getRandomInt(0, 255);
                      var blueVar3 = getRandomInt(0, 255);

                      var redVar4 = getRandomInt(0, 255);
                      var greenVar4 = getRandomInt(0, 255);
                      var blueVar4 = getRandomInt(0, 255);

                      var redVar5 = getRandomInt(0, 255);
                      var greenVar5 = getRandomInt(0, 255);
                      var blueVar5 = getRandomInt(0, 255);

                      rgbBloco1.style.backgroundColor = "rgb(" + redVar1 + "," + greenVar1 + "," + blueVar1 + ")";
                      rgbBloco2.style.backgroundColor = "rgb(" + redVar2 + "," + greenVar2 + "," + blueVar2 + ")";
                      rgbBloco3.style.backgroundColor = "rgb(" + redVar3 + "," + greenVar3 + "," + blueVar3 + ")";
                      rgbBloco4.style.backgroundColor = "rgb(" + redVar4 + "," + greenVar4 + "," + blueVar4 + ")";
                      rgbBloco5.style.backgroundColor = "rgb(" + redVar5 + "," + greenVar5 + "," + blueVar5 + ")";

                      setTimeout(function(){ corRandom();}, 800);
                      

              }
              
            });

           

}

if (Meteor.isServer) {

}
