function myFunction(x) {
    x.classList.toggle("change");
    var tik = document.getElementById("leftsidebar");
    if (tik.style.display === "") {
        tik.style.display = "block";
    } else{
        tik.style.display = "none";
        tik.style.display = "";
    } 
}

