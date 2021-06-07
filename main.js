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


