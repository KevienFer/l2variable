setTimeout(() => {
  document.getElementById('banner').style.display = 'block';
}, 3000);
setTimeout(() => {
  document.getElementById('banner').style.display = 'none';
}, 6000);

setTimeout(() => {
  document.getElementById('banner2').style.display = 'block';
}, 3000);
setTimeout(() => {
  document.getElementById('banner2').style.display = 'none';
}, 6000);
setTimeout(() => {
  document.getElementById('banner3').style.display = 'block';
}, 3000);
setTimeout(() => {
  document.getElementById('banner3').style.display = 'none';
}, 6000);
setTimeout(() => {
  document.getElementById('banner4').style.display = 'block';
}, 3000);
setTimeout(() => {
  document.getElementById('banner4').style.display = 'none';
}, 6000);


document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("boton1");
  function action() {
      alert("¡Que esperas para ir a descargar nuestros archivos!");
  }
  button.addEventListener("click", action);
});



