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

  for (let iPronoun = 0; iPronoun < pronoun.length; iPronoun++) {
  for (let iAdj = 0; iAdj < adj.length; iAdj++) {
  for (let iNoun = 0; iNoun < noun.length; iNoun++) {
    for (let iExt = 0; iExt < extension.length; iExt++) {
      let result = pronoun[iPronoun] + adj[iAdj] + noun[iNoun] + extension[iExt];
      console.log( result );
    }
  }
}
}
};
