let nav = document.querySelector(".navbar-expand-lg");
let search = document.querySelector(".btn-outline-warning");
let jN = document.querySelector(".jumbotron");
let h1 = document.querySelector(".jumbotron .display-4");
let p = document.querySelector(".jumbotron .lead");
let pend = document.querySelector(".jumbotron .pend");
let hr = document.querySelector(".my-4");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let isPrinted = false;
window.onscroll = function (){
    if (window.scrollY >200){
        nav.classList.remove("bg-light");
        nav.classList.add("bg-warning");
        search.style.background= "#fff"
        search.onmouseover = function (){
            search.style.background ="#00bfffa5"
        }
        search.onmouseout = function (){
            search.style.background ="#fff"
        }
        }else{
        nav.classList.add("bg-light");
            nav.classList.remove("bg-warning");
            search.onmouseover = function (){
                search.style.background ="#ffc15d"
            }
            search.onmouseout = function (){
                search.style.background ="#fff"
            }
        }
        }


let index =1;
let h1dis = "Hello , Sir";
h1.style.fontWeight= "bold"
function writeh1(){
    h1.textContent = h1dis.slice(0,index)
index++
}
setInterval ( function (){
    writeh1()
},100);
p.style.fontWeight= "600"
let index2 =1;
let pdis = "Welcome to Prince Trek Airlines! We are here to help you plan your perfect trip. We offer a variety of flights to destinations around the world, at affordable prices and with high-quality services. Book your flight today and enjoy an unforgettable travel experience!"
function writep(){
    p.textContent = pdis.slice(0,index2)
    index2++
}
setInterval ( function (){
    writep()
},70) 
let index3 =1;
let pds = "We are waiting for you, don't miss us"
function writepend(){
    pend.textContent = pds.slice(0,index3)
    index3++
}
setInterval ( function (){
    writepend()
},70) 
//  let H1js = document.createElement("h1");
//  H1js.classList.add("display-4")
//  jN.appendChild(H1js)
//  jN.prepend(H1js)
//   function writeH1(){
//     H1js.textContent = h1.slice(0,index);
//     index++
//   }
//  setInterval ( function (){
//     writeH1()
//  }, 100)
//  let index1 =1;
// let pjnedit = document.createElement("p");
//  let  p = "Welcome to Prince Trek Airlines! We are here to help you plan your perfect trip. We offer a variety of flights to destinations around the world, at affordable prices and with high-quality services. Book your flight today and enjoy an unforgettable travel experience!"
// pjnedit.classList.add("display-4")
//  jN.appendChild(pjnedit);
// pjnedit.classList.add("lead")
// pjnedit.style.width ="700px"
// pjnedit.style.fontSize ="15px"
// H1js.after(pjnedit)
// function writep(){
// pjnedit.textContent = p.slice(0,index1);
// index1++
// }
// setInterval(function (){
//     writep()
// },80)
//  let pe = document.createElement("p");
//  let index2 =1;
//  pdit = "We are waiting for you, don't miss us";
//  pe.classList.add("col-lg-12")
// jN.appendChild(pe);
// hr.after(pe)
// function write2 (){
//     pe.textContent = pdit.slice(0,index2);
//     index2++
// }
// setInterval ( function (){
//     write2()
// }, 80)
let  hone =document.createElement("h1");
let  htwo =document.createElement("h1");
let  hthree =document.createElement("h1");
let  hfour =document.createElement("h1");
let indexhtwo = 1;
let indexhone = 1;
let indexhthree = 1;
let indexhfour = 1 ;
div1.appendChild(hone);
div2.appendChild(htwo); 
div3.appendChild(hthree);
div4.appendChild(hfour);
hone.style.fontWeight= "bold"
function working(){
function plusehone(){
hone.innerHTML=`${indexhone} M`;
if (parseInt(hone.innerHTML) < 200){
    indexhone++
    // hone.innerHTML=+indexhone;
}
}
setInterval(function (){
    plusehone()

},40)
htwo.style.fontWeight= "bold"
function plusehtwo() {
  htwo.innerHTML = `${indexhtwo} K`;
  if (parseInt(htwo.innerHTML) < 121) {
    indexhtwo++;
  }
}
setInterval(plusehtwo,40);



hthree.style.fontWeight= "bold"
function plusehthree() {
  hthree.innerHTML = `${indexhthree} K`;
  if (parseInt(hthree.innerHTML) < 250) {
    indexhthree++;
  }
}
setInterval(plusehthree,40);
hfour.style.fontWeight="bold"
function plusefour(){
hfour.innerHTML=`${indexhfour}`
if (hfour.innerHTML <114){
    indexhfour++
}
}
setInterval (plusefour,110)
}
window.onscroll = function (){
    if (window.scrollY > 2389){
        working()
    }
}


