function restart(){
    window.location="index.html"
}
 let p="o"
 let w=document.getElementById("winner")
 let game=true

function cell1(){
    let d=document.getElementById("cell1")
   if(game==true) { 
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
     }
   }
}
function cell2(){
    let d=document.getElementById("cell2")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"
         

     }
     else{
        d.innerHTML="x"
        checkwin()
        p='o'
     }  
   }
}
function cell3(){
    let d=document.getElementById("cell3")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
         
     }
   }
}
function cell4(){
    let d=document.getElementById("cell4")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
         
     }
   }
}
function cell5(){
    let d=document.getElementById("cell5")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
         
     }
   }
}
function cell6(){
    let d=document.getElementById("cell6")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
         
     }
   }
}
function cell7(){
    let d=document.getElementById("cell7")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
         
     }
   }
}
function cell8(){
    let d=document.getElementById("cell8")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
         
     }
   }
}
function cell9(){
    let d=document.getElementById("cell9")
    if(game==true){
     if (p=="o"){
        d.innerHTML="o";
        checkwin()
        p="x"

     }
     else{
        d.innerHTML="x"
        checkwin()
        p="o"
     }
     }
}
  
function checkwin(){
   let c1=document.getElementById("cell1").innerHTML
   let c2=document.getElementById("cell2").innerHTML
   let c3=document.getElementById("cell3").innerHTML
   let c4=document.getElementById("cell4").innerHTML
   let c5=document.getElementById("cell5").innerHTML
   let c6=document.getElementById("cell6").innerHTML
   let c7=document.getElementById("cell7").innerHTML
   let c8=document.getElementById("cell8").innerHTML
   let c9=document.getElementById("cell9").innerHTML

   if ((c1==p&&c2==p&&c3==p)||(c4==p&&c5==p&&c3==c6)||(c7==p&&c8==p&&c9==p)||(c1==p&&c4==p&&c7==p)||(c2==p&&c5==p&&c8==p)||(c3==p&&c6==p&&c9==p)||(c1==p&&c5==p&&c9==p)||(c3==p&&c5==p&&c7==p)){
      w.innerHTML= p +"he is the winner"
      game=false
   }
    
     
}