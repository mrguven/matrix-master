

let i=0;
    $('#firstImg').click(function() {
        let img=["1a.jpg" ,"1b.jpg" ];
        i+=1
       if(i>img.length-1){
        console.log(img.length);
        i=0;}
       $('#firstImg').attr('src', img[i] );
    })
    let j=0;
    $('#secImg').click(function() {
        let img=["2a.jpg" ,"2b.jpg" ];
        j+=1
        if(j>img.length-1){
            console.log(img.length);
        j=0;}
       $('#secImg').attr('src', img[j] );
    })
    let k=0;
    $('#thirdImg').click(function() {
        let img=["3a.jpg" ,"3b.jpg" ];
        k+=1
        if(k>img.length-1){
        k=0;}
       $('#thirdImg').attr('src', img[k] );
    })




    
// $(document).ready(
//     $('#firstImg').click(function() {
//         $('#firstImg').attr('src', "1b.jpg" )
//         }),



//     $('#secImg').click(function() {
//         $('#secImg').attr('src', "2b.jpg" )
//         }),


//     $('#thirdImg').click(function() {
//         $('#thirdImg').attr('src', "3b.jpg" )
//         })
// )