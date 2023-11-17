const body = document.body; 
const box = document.querySelectorAll(".audio"); 
const btn = document.querySelector(".lightButton"); 
const navItems = document.querySelectorAll(".nav-item"); 
 
let isLightMode = true; 
 
btn.addEventListener("click", () => { 
    if (isLightMode) { 
        // Light Mode 
        body.style.background = "radial-gradient(788px at 0.7% 3.4%, rgb(164, 231, 192) 0%, rgb(220, 220, 220) 90%)"; 
        for (let i = 0; i < box.length; i++) { 
            let presentBox = box[i]; 
            presentBox.style.backgroundColor = "#FFF"; 
            presentBox.style.color = "black"; 
            presentBox.style.boxShadow = ".1px .1px 14px 0.1px #a19f9f"; 
        } 
        for (let i = 0; i < navItems.length; i++) { 
            let navItem = navItems[i]; 
            let labels = navItem.querySelectorAll("a"); // Select the label elements inside .nav-item 
            for (let j = 0; j < labels.length; j++) { 
                labels[j].style.color = "black"; // Change text color to black 
            } 
        } 
        btn.innerHTML = "Dark"; 
    } else { 
        // Dark Mode 
        body.style.background = "#191f1b"; // Set to the original background color 
        for (let i = 0; i < box.length; i++) { 
            let presentBox = box[i]; 
            presentBox.style.backgroundColor = ""; // Reset background color 
            presentBox.style.color = ""; // Reset text color 
            presentBox.style.boxShadow = ""; // Reset box shadow 
        } 
        for (let i = 0; i < navItems.length; i++) { 
            let navItem = navItems[i]; 
            let labels = navItem.querySelectorAll("a"); // Select the label elements inside .nav-item 
            for (let j = 0; j < labels.length; j++) { 
                labels[j].style.color = ""; // Reset text color 
            } 
        } 
        btn.innerHTML = "Light"; 
    } 
 
    // Toggle the state 
    isLightMode = !isLightMode; 
});



var audioElements = document.getElementsByClassName('audio');

for (var i = 0; i < audioElements.length; i++) {
    audioElements[i].addEventListener('mouseover', function() {
        enlarge(this);
    });

    audioElements[i].addEventListener('mouseout', function() {
        shrink(this);
    });
}

function enlarge(element) {
  element.style.transform = "scale(1.2)";
}

function shrink(element) {
  element.style.transform = "scale(1)";
}


  function myFunction() {
    alert("Don't have an account?Sign up for Spotify");
  }
