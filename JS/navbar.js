//declare variable and change styling (unhide)
let menu = document.getElementById('navbar');
menu.style.display = 'block';
//make navbar responsive by making it clickable when shrunk
function collapse(){
    let navLink = document.getElementById('navbar');
    if(navLink.className === 'topNav') {
        navLink.className += ' open';
    } else {
        navLink.className = 'topNav';
    }
}

