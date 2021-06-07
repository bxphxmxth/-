let pumpkinBtn = document.getElementsByClassName("pumpkin")[0];
console.log(pumpkinBtn);

let hihi = document.getElementsByClassName("hihi")[0];
console.log(hihi);

let addHihi = () =>{
     
          hihi.style.color = "white";
      
}

pumpkinBtn.addEventListener("click", addHihi)