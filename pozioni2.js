window.onscroll = function() {
  mostraMenu()
};

function mostraMenu() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    document.getElementById("menu-fisso").style.display = "block";
  } else {
    document.getElementById("menu-fisso").style.display = "none";
  }
}