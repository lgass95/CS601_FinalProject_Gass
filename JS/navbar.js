let menu = document.getElementById('navbar');
menu.style.display = 'block';

function collapse(){
    let navLink = document.getElementById('navbar');
    if(navLink.className === 'topNav') {
        navLink.className += ' open'
    } else {
        navLink.className = 'topNav';
    }
}

