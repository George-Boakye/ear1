let linkList = document.getElementById("linkList");
let closeIcon = document.getElementById("closeIcon");

function dropMenu(){
    linkList.style.display = "block";
    closeIcon.style.display ="block";
}

function closeMenu(){
    closeIcon.style.display ="none";
    linkList.style.display ="none"

}