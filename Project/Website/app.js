

    let aliqua = document.getElementById("foodname")
    aliqua.addEventListener("click",getText);


function getText() {


    //fetch("food.json")
      //  .then((res)=>res.json())
        //.then((data)=> {
          //  let output = "<h2> food <h2>"; 
            //    console.log(data); 
              //  data.forEach(function (food){
                //   output += `
                  // <ul>
                    //<li> Name: ${food.name} </li>
                    //<li> Season: ${food.season} </li>
                  // </ul> 
                   //`;     
               // });
                //document.getElementById("output").innerHTML =output;                             
                //})}
        
    fetch("food.json")
      .then((res)=>res.json())
        .then((data)=> {
          let output = "<h2> food <h2>"; 
            console.log(data); 
            data.forEach(function (food){
                output += `
                  <div>
                    <h2>${food.name}</h2>
                    <p>${food.season}</p>
                  </div> 
                   `;    
               });
                document.getElementById("output").innerHTML =output;                             
                })}
        