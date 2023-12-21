function colourScreen(){
    const body = document.querySelector('body');
    body.style.filter = "none";
    const heading = document.getElementById('heading');
    heading.style.color = "gold";
    body.style.transition = "all 2s ease-in";
    heading.style.transition = "all 2s ease-in";
    body.style.height = "200vh";
}

function exitVideo(){
    const videoContainer = document.querySelector('#lock-vid');
    videoContainer.innerHTML = '<a href="#about">EXPLORE</a>';
    videoContainer.style.textAlign = "center";
    videoContainer.style.margin = "4rem auto";
}

const img = document.querySelector('#lock-vid img');

img.addEventListener('click', function () {
    img.src = "../assets/videos/lock2.gif";
    colourScreen();
    setTimeout(exitVideo, 1900);
});

function changeTextSize(){
    const heading = document.getElementById('heading');
    const headingContent = document.getElementById('heading-content');
    if (window.innerWidth < 1320){
        heading.style.fontSize = String(0.008*window.innerWidth)+"rem";
        headingContent.style.fontSize = String(0.0025*window.innerWidth)+"rem";
    }
    else{
        heading.style.fontSize = "9.4rem";
        headingContent.style.fontSize = "2rem";
    }
}

function changeMenuIcon(){
    if (window.innerWidth < 1320){
        const menuIcon = document.querySelector('.last-li');
        const options = document.querySelectorAll('.right-li');
        for (let i=0; i<options.length; i++){
            options[i].style.display = "none";
        }
        menuIcon.style.display = "inline-block";
        hideMenu();
    }
    else{
        const menuIcon = document.querySelector('.last-li');
        const options = document.querySelectorAll('.right-li');
        for (let i=0; i<options.length; i++){
            options[i].style.display = "inline-block";
            options[i].style.width = "auto";
            options[i].style.textAlign = "inherit";
            options[i].style.padding = "1rem 3rem";
            options[i].style.margin = "1rem 0";
        }
        menuIcon.style.display = "none";
    }
    changeTextSize();
}

function hideMenu(){
    const options = document.querySelectorAll('.right-li');
    for (let i=0; i<options.length; i++){
        options[i].style.display = "none";
    }
    const menuIcon = document.querySelector('.last-li i');
    menuIcon.className = "fas fa-bars";
    menuIcon.removeEventListener('click', hideMenu);
    menuIcon.addEventListener('click', showMenu);
}

function showMenu(){
    const menuIcon = document.querySelector('.last-li i');
    const options = document.querySelectorAll('.right-li');
    for (let i=0; i<options.length; i++){
        options[i].style.display = "block";
        options[i].style.width = "100%";
        options[i].style.textAlign = "right";
        options[i].style.padding = "0 2rem";
        options[i].style.marginRight = "1rem";
    }
    menuIcon.className = "fas fa-times";
    menuIcon.removeEventListener('click', showMenu);
    menuIcon.addEventListener('click', hideMenu);
}



const menuIcon = document.querySelector('.last-li i');
menuIcon.addEventListener('click', showMenu);

window.addEventListener('load', changeMenuIcon);
window.addEventListener('resize', changeMenuIcon);
