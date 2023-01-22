
let num1=2
let num2=4
let homeEl=document.getElementById("home-el");
let guestEl=document.getElementById("guest-el");
homeEl.innerText=num1;
guestEl.innerText=num2;

//plus 1
function plusOneHome(){
   num1+=1
   homeEl.innerText=num1

}

//plus two
function plusTwoHome(){
    num1+=2
    homeEl.innerText=num1
}

//plus 3
function plusThreeHome(){
    num1+=3
    homeEl.innerText=num1
}

function plusOneGuest(){ 
    num2+=1
    guestEl.innerText=num2
 }
 
 //plus two
 function plusTwoGuest(){
    
     num2+=2
     guestEl.innerText=num2
 }
 
 //plus 3
 function plusThreeGuest(){
     num2+=3
     guestEl.innerText=num2
 }