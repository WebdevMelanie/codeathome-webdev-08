

    let nearest = document.getElementById("submitp")
    nearest.addEventListener("click",getText);

    let reset = document.getElementById("buttonp")
    reset.addEventListener("click",noText);

function getText() {
    fetch("food.json")
      .then((res)=>res.json())
        .then((data)=> {
          let output = "<h2> Place to purchase: </h2>"; 
            console.log(data); 
            data.forEach(function (food){
                output += `
                  <div>
                    <p>${food.name}</p>
                    <p>${food.street}</p>
                    <p>${food.city}</p>
                    <p>${food.distance}</p>
                  </div> 
                   `;    
               });  
                document.getElementById("output").innerHTML =output;                             
                })};

function noText(){let output = 
  "<h2> Please enter your adress</h2>";
document.getElementById("output").innerHTML =output; }
