/*
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal()
{
    //récupérer l'input
    const enteredValue = inputEl.value;
    // nous allons créer le nouvel élément comme suit <li>enteredValue</li> et nous allons rajouter 
    // tout cela texte dans l'élément selectionné avec le <ul> (la variable listEl)
    // pour la création, on peut utiliser createElement de javascript pour créer un élément.
    const listLiElement = document.createElement('li');
    // nous allons ensuite définir le contenu text dans cet élément nouvellement créée
    listLiElement.textContent = enteredValue;
    //enfin nous allons placer l'élément listLiElement dans la list <ul> listEl
    listEl.appendChild(listLiElement); 
    // effacer l'inputbox
    inputEl.value="";
}

buttonEl.addEventListener("click", addGoal);
*/

Vue.createApp({
    data(){

        //la fonction doit retourner un/des objets
        // nous allons retourner les données que notre application doit manipuler.
        // nous allons voir cela de plus près dans les chapitres suivants.
        // l'instant, nous allons mettre notre liste d'objectif (qui est initialement un tableau vide)
        return {
            goals:[],
            // et également la valeur entrée enteredValue (qui est une chaine vide initialement)
            enteredValue:""
        }
    },
    methods:{
        addGoal(){
          //si nous utilisons une donnée dans data, on doit utiliser this (pour dire que c'est une donnée de data). Cela permettra à `Vue` d'établir la connexion en backend.
          this.goals.push(this.enteredValue);
          this.enteredValue="";
        }
      }
}).mount('#app');

/* POUR VUE2
new Vue({
    el: "#app",
    data(){

        //la fonction doit retourner un/des objets
        // nous allons retourner les données que notre application doit manipuler.
        // nous allons voir cela de plus près dans les chapitres suivants.
        // l'instant, nous allons mettre notre liste d'objectif (qui est initialement un tableau vide)
        return {
            goals:[],
            // et également la valeur entrée enteredValue (qui est une chaine vide initialement)
            enteredValue:""
        }
    },
    methods:{
        addGoal(){
          //si nous utilisons une donnée dans data, on doit utiliser this (pour dire que c'est une donnée de data). Cela permettra à `Vue` d'établir la connexion en backend.
          this.goals.push(this.enteredValue);
        }
      }
});
*/
