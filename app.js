var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
console.log("Developed with love by:")
console.log("Moaksh Kakkar")
console.log("Ashish Gupta")
console.log("Aryan Gupta")
console.log("Deepanshu Tyagi")
console.log("Rupesh Shandillya")


function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}
let scenes = document.querySelectorAll(".parallax");
    
for (let scene of scenes) {
  let parallax = new Parallax(scene,{relativeInput: true});
  parallax.invert(false, false);
  parallax.scalar(8, 15);
  parallax.calibrate(8, 15);
  parallax.limit(50, 50);

}

parallaxInstance.friction(0.2, 0.2);
