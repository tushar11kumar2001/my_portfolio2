var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tab){
   for(tablink of tablinks){
    tablink.classList.remove("active-link");
   }
   for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
   }

   event.currentTarget.classList.add("active-link");
   document.getElementById(tab).classList.add("active-tab");
}


let ul = document.querySelector("#sidemenu");
function showmenu(){
  ul.style.right = "0px";
}


function hidemenu(){
    ul.style.right = "-200px";
  }

 
// let hiddenTab = document.querySelectorAll(".hidden-project")
// let see_more = document.getElementById("seemore");
// see_more.addEventListener("click" ,()=>{
//   console.log("running");
//   console.log(hiddenTab);
//   for(let tab of hiddenTab){
//     tab.classList.toggle("show");
//   }
// })