import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronoun = ['yomommas', 'myveryown'];
  let adj = ['fat', 'enormous', 'stinky'];
  let noun = ['finger', 'beaver', 'granny',];
  let extension = ['.com', '.net', '.xxx', '.tv']

  for (let elm of pronoun) {
    for (let elm2 of adj) {
      for (let elm3 of noun) {
        for (let elm4 of extension) {
          let result = elm + elm2 + elm3 + elm4
          console.log(result)
          document.querySelector('#the-domains').innerHTML += "<li>" + result + "</li"
        }
      }
    }
  }
};
