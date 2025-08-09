c1=document.getElementById("dot1");
c2=document.getElementById("dot2"); 
c3=document.getElementById("dot3");
c4=document.getElementById("dot4");     
c5=document.getElementById("dot5");

b1=document.getElementById("box1");
b2=document.getElementById("box2");
b3=document.getElementById("box3"); 
b4=document.getElementById("box4");
b5=document.getElementById("box5");

setTimeout(() => {
    b1.style.opacity = "1";
},5000);

setTimeout(() => {
    c1.style.opacity = "1";

   setInterval(() => {
   c1.style.opacity = (c1.style.opacity === "0") ? "1" : "0";
  
},700)


}, 6000);


setTimeout(() => {
    b2.style.opacity = "1";
},11000);

setTimeout(() => {
    c2.style.opacity = "1";

       setInterval(() => {
   c2.style.opacity = (c2.style.opacity === "0") ? "1" : "0";
  
},700)
}, 12000);


setTimeout(() => {
    b3.style.opacity = "1";
},17000);

setTimeout(() => {
    c3.style.opacity = "1";
   setInterval(() => {
   c3.style.opacity = (c3.style.opacity === "0") ? "1" : "0";
  
},700)

}, 18000);

setTimeout(() => {
    b4.style.opacity = "1";

  

},23000);

setTimeout(() => {
    c4.style.opacity = "1";

   setInterval(() => {
   c4.style.opacity = (c4.style.opacity === "0") ? "1" : "0";
  
},700)

}, 24000);

setTimeout(() => {
    b5.style.opacity = "1";
},29000);

setTimeout(() => {
    c5.style.opacity = "1";
 setInterval(() => {
   c5.style.opacity = (c5.style.opacity === "0") ? "1" : "0";
  
},700)

}, 30000);


// setInterval(() => {
//    c1.style.opacity = (c1.style.opacity === "0") ? "1" : "0";
  
// },500)

