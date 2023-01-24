var index=1;
function fn() {
  var ind=`indicator${index}`;
  var select = document.querySelector('input[type=radio][name='+ind+']:checked');

    var events = document.getElementById(`event-text${index}`);
    var structure = document.getElementById(`structure-text${index}`);
    var rules = document.getElementById(`rules-text${index}`);
    var faqs = document.getElementById(`FAQs-text${index}`);
    var register = document.getElementById(`register-text${index}`);
  
    var myDiv = document.getElementById("text");
    myDiv.scrollTop = 0;
  
    var Event = document.getElementById(`Event${index}`);
    var Structure = document.getElementById(`Structure${index}`);
    var Rules = document.getElementById(`Rules${index}`);
    var FAQs = document.getElementById(`FAQs${index}`);
    var Register = document.getElementById(`Register${index}`);

  console.log(Structure.checked);

    if (Event.checked == true) {
      events.style.display = "block";
    } else {
      events.style.display = "none";
    }
  
    if (Structure.checked == true) {
      structure.style.display = "block";

    } else {
      structure.style.display = "none";
      
    }
  
    if (Rules.checked == true) {
      rules.style.display = "block";
     
    } else {
      rules.style.display = "none";
    
    }
  
    if (FAQs.checked == true) {
      faqs.style.display = "block";
      
    } else {
      faqs.style.display = "none";
  
    }
  
    if (Register.checked == true) {
      register.style.display = "grid";
    } else {
      register.style.display = "none";
    }
  }  

function fn2()
{

  var selected = document.querySelector('input[type=radio][name=ind-display]:checked');
  index=selected.value;
  // var e1 = document.getElementById("e1");
  // var e2 = document.getElementById("e2");
  // var e3 = document.getElementById("e3");
  // var e4 = document.getElementById("e4");
  // var e5 = document.getElementById("e5");
  // var e6 = document.getElementById("e6");
  // var e7 = document.getElementById("e7");
  // var e8 = document.getElementById("e8");

  var container = document.getElementById(`container${index}`);
  // var container2 = document.getElementById("container2");
  // var container3 = document.getElementById("container3");
  // var container4 = document.getElementById("container4");
  // var container5 = document.getElementById("container5");
  // var container6 = document.getElementById("container6");
  // var container7 = document.getElementById("container7");
  // var container8 = document.getElementById("container8");
  
  container.style.display = "grid";
  console.log(selected.value);
  for(var i=1;i<9;i++)
  {
    if(i!=index)
    {
      document.getElementById(`container${i}`).style.display = "none";
    }
  }

  //   container1.style.display = "none";
  // }
  // if (e2.checked == true) {
  //   container2.style.display = "block";
  // } else {
  //   container2.style.display = "none";
  // }
  // if (e3.checked == true) {
  //   container3.style.display = "block";
  // } else {
  //   container3.style.display = "none";
  // }
  // if (e4.checked == true) {
  //   container4.style.display = "block";
  // } else {
  //   container14.style.display = "none";
  // }
  // if (e5.checked == true) {
  //   container5.style.display = "block";
  // } else {
  //   container5.style.display = "none";
  // }
  // if (e6.checked == true) {
  //   container6.style.display = "block";
  // } else {
  //   container6.style.display = "none";
  // }
  // if (e7.checked == true) {
  //   container7.style.display = "block";
  // } else {
  //   container7.style.display = "none";
  // }
  // if (e8.checked == true) {
  //   container8.style.display = "block";
  // } else {
  //   container8.style.display = "none";
  // }

}

