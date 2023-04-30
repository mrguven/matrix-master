


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





var  reclame=["download (1).jpg","download.jpg","evergreen-ap-rc-220315_1647347924564_hpMain_16x9_1600.jpg",
"hmm-algeciras_0.jpg","images.jpg","resized-amogy-cargo-ship-maria.jpg"]


document.getElementById("ads").addEventListener("click", loadFunction);

let imgList= document.getElementById("imgList");




var  i=0;
function loadFunction () {
   


    imgList.style.width="70%";
        
    

imgList.src =reclame[i];

i+=1;
i<reclame.length 

if(i==reclame.length) {
  i=0;
}
 
}


/*  try to search in the array object, but failed. It should be more studied.
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
  
  console.log(searchValue.value);
 
  for(let i=0;i<dataTable.length;i++) {

  }

  setTimeout(() => {
    document.getElementById("searchMessage").innerHTML ='';
}, 3000);

}


*/


/*

      if (dataTable[i].Name!==searchValue.value && dataTable[i].Departure!==searchValue.value && 
        dataTable[i].Arrival!==searchValue.value &&
        dataTable[i].Time!==searchValue.value && dataTable[i].Contact!==searchValue.value && 
         dataTable[i].OriginCountry!==searchValue.value ) {
document.getElementById('searchMessage').innerHTML= "noting found";
console.log('not found');}

      if (dataTable[i].Name ==searchValue.value|| dataTable[i].Departure ==searchValue.value|| dataTable[i].Arrival ==searchValue.value||
        dataTable[i].Time ==searchValue.value|| dataTable[i].Contact==searchValue.value||  dataTable[i].OriginCountry==searchValue.value ) {
          document.getElementById('searchMessage').innerHTML= searchValue.value;
        console.log('found');}


if (dataTable[i].find(e => e.Departure == searchValue.value)) {
  console.log('found');

}

else {
  console.log('not found');
}

*/












