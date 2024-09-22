var inc = 0;
var link = document.getElementById("fade-text");

function changeText(element) {
    // Get the <a> element by its id
    const texts = ["Software", "Tools", "Websites", "Languages"] 
    // Change the text inside the <a> tag
    element.style.opacity = '0';
   
    
    setTimeout(() => {
        inc = (inc + 1) % texts.length;
        element.innerHTML = texts[inc];
        link.style.opacity = '1';
        
    }, 500); // Matches the fade out duration
    
}


setInterval(() =>{ 
   changeText(link)
},1500)