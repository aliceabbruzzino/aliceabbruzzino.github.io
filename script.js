window.onscroll = function() {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("reload");
  image.style.transform = "rotate(" + window.pageYOffset / 1 + "deg)";
}