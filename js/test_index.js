function getHandle(id){
    var handle = document.getElementById(id);
    return handle;
}

function getHandleClass(className){
    var handle = document.querySelectorAll('.'+className);
    return handle;
}

function getHandleTag(tagName){
    var handle = document.querySelectorAll(tagName);
    return handle;
}

function startGif(){
    var imgTag = getHandle('heading-gif-img');
    imgTag.src = '../assets/videos/lock2.gif';
}

function stopGif(){
    var imgTagContainer = getHandle('heading-gif');
    imgTagContainer.innerHTML = '<a href="#about-us">Explore</a>';
}

function changeColor(){
    startGif();
    document.body.style.filter = "none";
    var header = getHandle('Header');
    header.style.opacity = '1';
    lockContent();
    setTimeout(function(){
    stopGif();
    }, 1900);
}

function changeTextSize(){
    const heading = getHandle('heading');
    const headingContent = getHandle('heading-content');
    heading.style.fontSize = String(0.007*window.innerWidth)+"rem";
    headingContent.style.fontSize = String(0.0015*window.innerWidth)+"rem";
    changeIconSize();
    adjustMainHeadingMargin();
}

function changeIconSize(){
    const icons = getHandleTag('.left a img');
    const iconSize = String(0.007*window.innerWidth)+"rem";
    const borderLeft = getHandle('left-left-div');
    const borderRight = getHandle('left-right-div');
    const borderSize = String(0.666*0.007*16*window.innerWidth)+"px";
    const borderMargin = String(0.166*0.007*16*window.innerWidth)+"px";
    for (let i=0; i<icons.length; i++){
        icons[i].style.width = iconSize;
        icons[i].style.height = iconSize;
    }
    borderLeft.style.height = borderSize;
    borderRight.style.height = borderSize;
    borderLeft.style.marginTop = borderMargin;
    borderLeft.style.marginBottom = borderMargin;
    borderRight.style.marginTop = borderMargin;
    borderRight.style.marginBottom = borderMargin;
}

function changeMenuAppearance(){
    var menu = getHandle('menu-th');
    var menuContainer = getHandleClass('right');
    if (window.innerWidth < 1080){ 
        for (let i=0; i<menuContainer.length; i++){
            menuContainer[i].style.display = 'none';
        }
        menu.style.display = 'table-cell';
    }
    else{
        for (let i=0; i<menuContainer.length; i++){
            menuContainer[i].style.display = 'table-cell';
        }
        menu.style.display = 'none';
        toggleMenuList();
    }
}

function toggleMenuList(){
    var hiddenTable = getHandle('hidden-table');
    if (hiddenTable.style.display == 'table'){
        hiddenTable.style.display = 'none';
    }
    else if (window.innerWidth < 1080){
        hiddenTable.style.display = 'table';
    }
}

function adjustMainHeadingMargin(){
    const mainHeading = getHandle('heading');
    const mainHeadingMargin = (window.innerHeight - mainHeading.offsetHeight)/25;
    mainHeading.style.marginTop = String(mainHeadingMargin)+"px";
}

function lockContent(){
    var image = getHandle('heading-gif-img');
    if (image.src.match('lock2-static.png')){
        var contentDiv = getHandle('content');
        contentDiv.style.display = 'none';
    }
    else{
        var contentDiv = getHandle('content');
        contentDiv.style.display = 'block';
    }
}


const imgTag = getHandle('heading-gif-img');
const menu = getHandle('menu-th');
imgTag.addEventListener('click', changeColor);
menu.addEventListener('click', toggleMenuList);
window.addEventListener('resize', changeTextSize);
window.addEventListener('resize', changeMenuAppearance);
window.addEventListener('load', changeTextSize);
window.addEventListener('load', changeMenuAppearance);
window.addEventListener('load', lockContent);