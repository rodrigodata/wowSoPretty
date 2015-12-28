cor = new Mongo.Collection('cores');

if (Meteor.isClient) {


            Template.pretty.helpers({
              'coress': function(){
                  return cor.find().fetch();  
              }
              
            });

            Template.pretty.events({
              'click button': function(){

                      function getRandomInt(min, max){
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                      }
                      var element = document.getElementById("rgbBloco");

                      var redVar = getRandomInt(0, 255);
                      var greenVar = getRandomInt(0, 255);
                      var blueVar = getRandomInt(0, 255);
                      cor.insert({
                        red: redVar,
                        green: greenVar,
                        blue: blueVar
                      });

                      element.style.backgroundColor = "rgb(" + redVar + "," + greenVar + "," + blueVar + ")";


                      console.log(redVar, greenVar, blueVar);

              },
              'click #resetar': function(){

              }
            });

           

}

if (Meteor.isServer) {

}
