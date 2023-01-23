console.log(screen.width);
console.log(screen.height);
if (screen.width == 1536 && screen.height == 864) {
    var ele = document.getElementsByClassName('planet');
    var i = 0;
    while (i < ele.length) {
        ele[i].style.bottom = "-115%";
        i++;
    }

    // console.log(ele[0].style.bottom);
}
if (screen.width == 1280 && screen.height == 720) {
    var ele = document.getElementsByClassName('planet');
    var i = 0;
    while (i < ele.length) {
        ele[i].style.bottom = "-155%";
        i++;
    }

    // console.log(ele[0].style.bottom);
}
var elements = document.querySelectorAll('label');
var i = 0;
while (i < elements.length) {
    elements[i].style.transformOrigin = 'Left';
    if (screen.width > 1000) {
        elements[i].style.scale = 1.2;
    }
    else {
        console.log("In");
        elements[i].style.scale = 3.2 + (-screen.width / 500);

        //elements2[i].styleh
    }
    console.log(elements[i].style.scale);
    i++;
}

var logo = document.querySelectorAll('h1')[0];
// logo.style.all = "revert";
logo.style.fontSize = "200%";
var logo2 = document.querySelectorAll('span')[0];
// logo.style.all = "revert";
logo2.style.fontSize = "70%";

console.log(logo.style.fontSize)