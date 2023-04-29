


var submitButton = document.getElementById("submitButton");
var transportName = document.getElementById("transportName");
var departure = document.getElementById("departure");
var arrival = document.getElementById("arrival");
var time = document.getElementById("time");
var contact = document.getElementById("contact");
var origin = document.getElementById("origin");


submitButton.addEventListener('click',submitFunction);

function submitFunction () {

 if( (transportName.value || departure.value || arrival.value  || time.value || contact.value || origin.value) ==="") {
    document.getElementById("errMessage").innerHTML = "*enter all data" ;
  }

setTimeout(() => {
    document.getElementById("errMessage").innerHTML ='';
}, 3000); 

}


let searchValue= document.getElementById("search");

let searchList=[];  

searchList.push(searchValue.value); // there is a problem- the values is not added to array.
//console.log(searchList);

let dataTable=[{Name: "Terry kiste"
,Departure:"Rotterdam",
Arrival:"Monaco",
Time:10,
Contact:"Anders",
OriginCountry:"USA"
},
{Name: "Yor  Mec"
,Departure:"Rotterdam",
Arrival:"Rome",
Time:20,
Contact:"John Cjaki",
OriginCountry:"Spain"
},
{Name: "Barry Handel"
,Departure:"Rotterdam",
Arrival:"Dortmund",
Time:15,
Contact:"Roland Mendel",
OriginCountry:"UK"
},
{Name: "Iris Co"
,Departure:"Rotterdam",
Arrival:"Berlin",
Time:12,
Contact:"Tosh Tan",
OriginCountry:"Canada\
"
}];

document.getElementById('searchButton').addEventListener('click',searchFunction);



function searchFunction() {
  console.log('it works');
  console.log(searchValue.value);
 
  for(let i=0;i<dataTable.length;i++) {

      if ((dataTable[i].Name|| dataTable[i].Departure|| dataTable[i].Arrival||
        dataTable[i].Time|| dataTable[i].Contact||  dataTable[i].OriginCountry )!==searchValue.value) {
document.getElementById('searchMessage').innerHTML= "noting found";
      }

      if ((dataTable[i].Name|| dataTable[i].Departure|| dataTable[i].Arrival||
        dataTable[i].Time|| dataTable[i].Contact||  dataTable[i].OriginCountry )===searchValue.value) {
          document.getElementById('searchMessage').innerHTML= searchValue.value;
        }

  }

  setTimeout(() => {
    document.getElementById("searchMessage").innerHTML ='';
}, 3000);

}







//t is planned to make a slide, but failed

// let reclame=["download (1).jpg","download.jpg","evergreen-ap-rc-220315_1647347924564_hpMain_16x9_1600.jpg",
// "hmm-algeciras_0.jpg","images.jpg","resized-amogy-cargo-ship-maria.jpg"]


// document.getElementById("ads").addEventListener("click", loadFunction);

// let img= document.getElementById("imgList");


// function loadFunction () {
   
//     img.style.width="70%";
        
    


 
//     img.src =reclame[i];
   



    
    

    
// }


