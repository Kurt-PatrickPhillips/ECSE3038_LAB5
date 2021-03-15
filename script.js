

document.getElementById("new-tank-submit").addEventListener("click", function(event){
    event.preventDefault();
    let tankLocation = document.getElementById("new-tank-location").value
    let tankLati = document.getElementById("new-tank-latitude").value
    let tankLongi = document.getElementById("new-tank-longitude").value
    let tankPercent_F = document.getElementById("new-tank-pf").value
    
    let jsonBody = {
        "location": tankLocation,
        "latitude": tankLati,
        "longitude": tankLongi,
        "Percentage_Full": tankPercent_F,
    };
    
    fetch("http://localhost:5000/data", {
        method: "POST",
        body: JSON.stringify(jsonBody),
        headers:{
            "Content-type": "application/json "
        }
    })
    .then((res) => res.json())
    .then((json) => console.log(json));

    var container = document.querySelector(".container");
    container.append(createTankcard(jsonBody));

})  

function createTankcard(tank){
    var tankCardDiv = document.createElement("DIV");
    tankCardDiv.classList.add("tank-card");

    var tankLocationDiv = document.createElement("DIV");
    tankLocationDiv.classList.add("tank-location");

// TANK LOCATION
    var tankInfoLocationlabel = document.createElement("SPAN");
    tankInfoLocationlabel.classList.add("location-lbl");
    tankInfoLocationlabel.innerHTML = "Location: ";

    var tankInfoLocationVal = document.createElement("SPAN");
    tankInfoLocationVal.classList.add("location-val");
    tankInfoLocationVal.innerHTML = tank.location;
    tankLocationDiv.append(tankInfoLocationlabel); 
    tankLocationDiv.append(tankInfoLocationVal);
    
// TANK LATITUDE
    var tankLatDiv = document.createElement("DIV");
    tankLatDiv.classList.add("tank-latitude");

    var tankInfoLatlbl = document.createElement("SPAN");
    tankInfoLatlbl.classList.add("latitude-lbl");
    tankInfoLatlbl.innerHTML = "Latitude: ";

    var tankInfoLatVal = document.createElement("SPAN");
    tankInfoLatVal.classList.add("latitude-val");
    tankInfoLatVal.innerHTML = tank.latitude;
    tankLatDiv.append(tankInfoLatlbl);
    tankLatDiv.append(tankInfoLatVal);

// TANK LONG
    var tankLongDiv = document.createElement("DIV");
    tankLongDiv.classList.add("tank-longitude");

    var tankInfoLonglbl = document.createElement("SPAN");
    tankInfoLonglbl.classList.add("longitude-lbl");
    tankInfoLonglbl.innerHTML = "Longitude: ";


    var tankInfoLongVal = document.createElement("SPAN");
    tankInfoLongVal.classList.add("longitude-val");
    tankInfoLongVal.innerHTML = tank.longitude;
    tankLongDiv.append(tankInfoLonglbl);
    tankLongDiv.append(tankInfoLongVal);

// TANK PERCENT
    var tankPFDiv = document.createElement("DIV");
    tankPFDiv.classList.add("tank-pf");

    var tankInfoPFlbl = document.createElement("SPAN");
    tankInfoPFlbl.classList.add("pf-lbl");
    tankInfoPFlbl.innerHTML = "Percentage_Full: ";

    var tankInfoPFVal = document.createElement("SPAN");
    tankInfoPFVal.classList.add("pf-val");
    tankInfoPFVal.innerHTML = tank.percentage_full;


    tankPFDiv.append(tankInfoPFlbl);
    tankPFDiv.append(tankInfoPFVal);   
    tankCardDiv.append(tankLocationDiv);
    tankCardDiv.append(tankLatDiv);
    tankCardDiv.append(tankLongDiv);
    tankCardDiv.append(tankPFDiv);

    return tankCardDiv;
}

function getTanks(){
    return fetch("http://localhost:5000/data")
    .then((res)=> res.json())
    .then((json) => json);
}


async function draw(){
    let tanks = await getTanks();
    console.log(tanks);
        tanks.forEach((tank) => {
            var container = document.querySelector(".container");
            container.appendChild(createTankcard(tank));
        });
    }




// var cards = createTankcard();
// document.querySelector(".container").appendChild(cards);

var container = document.querySelector(".container");

window.onload = function (){
    draw();
}