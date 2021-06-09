// Pumpkin saying "hihihihihihi"

let pumpkinBtn = document.getElementsByClassName("pumpkin")[0];
console.log(pumpkinBtn);

let hihi = document.getElementsByClassName("hihi")[0];
console.log(hihi);

let addHihi = () =>{
     
          hihi.style.color = "white";
      
}

pumpkinBtn.addEventListener("click", addHihi);


// Show dancing Satan 


let dancingSatan = document.getElementsByClassName('dancingSatan')[0];
let buttonFirst = document.getElementsByClassName("buttonFirst")[0];


let addSatan = () =>{
     if (dancingSatan.style.display === 'none') {
          dancingSatan.style.display = 'block';
        } else {
          dancingSatan.style.display = 'none';
        }
}




buttonFirst.addEventListener("click",addSatan);


// => Les 3 prières :

// I : "Ô Glorieux Archange saint Michel, sois la rempart contre toute machination"

// II : "Démasque les pièges du Diable et de l’esprit du monde. Rends nous victorieux contre les tentations"

// III : "Ô glorieux Archange saint Michel, qui toujours contemples la Sainte Face de Dieu, gardes-nous fermes sur le chemin vers l’Eternité. Amen."


let prieres = ["Ô Glorieux Archange saint Michel, sois la rempart contre toute machination.","Démasque les pièges du Diable et de l’esprit du monde. Rends nous victorieux contre les tentations.","Ô glorieux Archange saint Michel, qui toujours contemples la Sainte Face de Dieu, gardes-nous fermes sur le chemin vers l’Eternité. Amen."]

console.log(prieres);

let myLi; 
let section2 = document.getElementsByClassName("section2")[0];
console.log(section2);

let btnSaveMe = document.getElementsByClassName("saveMe")[0];
console.log(btnSaveMe);

btnSaveMe.addEventListener("click", () =>{


  prieres.forEach(element => {
  myLi = section2.appendChild(document.createElement("li"));
  myLi.textContent = element;
  myLi.style.color = "purple"
  myLi.style.textAlign = "center"
  myLi.style.margin ="0px 0px 5px 0px"
  
    
  });

  if (dancingSatan.style.display === 'none') {
    dancingSatan.style.display = 'block';
  } else {
    dancingSatan.style.display = 'none';
  }


})



