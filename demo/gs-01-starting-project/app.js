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
}

buttonEl.addEventListener("click", addGoal);