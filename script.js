document.addEventListener('DOMContentLoaded', function() {
  var sticky =
      !!getComputedStyle(document.querySelector('main')).webkitOverflowScrolling;
  if(sticky) {
      document.body.className = "sticky";
  }
});
