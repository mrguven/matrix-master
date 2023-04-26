


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
}, 3000); ;

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


