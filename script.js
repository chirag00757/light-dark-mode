const DARK_THEME ='dark';
const LIGHT_THEME = 'light';
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const lightIcon = document.getElementById('light-icon');
const darkIcon  = document.getElementById('dark-icon');
const image1    = document.getElementById('image1');
const image2    = document.getElementById('image2');
const image3    = document.getElementById('image3');
const textBox   = document.getElementById('text-box');

//Dark or Light Images
function imageMode(color){
    
    image1.src = `img/undraw_among_nature_${color}.svg`;
    image2.src = `img/undraw_pleasant_surprise_${color}.svg`;
    image3.src = `img/undraw_winter_walk_${color}.svg`;
    
}
//Dark and Light Mode 
function toggleDarkLightMode(mode){

    nav.style.backgroundColor = mode === "dark" ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = mode === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    // toggleIcon.children[0].textContent = mode === 'dark' ? 'Dark Mode' : 'Light Mode';
    // mode ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon')
    //  :
    // toggleIcon.children[1].classList.replace('fa-moon','fa-sun'); ;
    if(mode === "dark")
    {
        darkIcon.classList.remove("reduce_opacity");
        lightIcon.classList.add("reduce_opacity");
    }
    else{
        darkIcon.classList.add("reduce_opacity");
        lightIcon.classList.remove("reduce_opacity");
    } 

    imageMode(mode);

        
    
}

// Switch Theme Dynamically

function switchTheme(event)
{
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
      
        toggleDarkLightMode(DARK_THEME);
    }
    else
    {
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
       
        toggleDarkLightMode(LIGHT_THEME);
        
    }
}

// Event Listener
toggleSwitch.addEventListener('change',switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
    if(currentTheme === 'dark')
    {
        toggleSwitch.checked =  true;
       
        toggleDarkLightMode(DARK_THEME);
    }
   
}