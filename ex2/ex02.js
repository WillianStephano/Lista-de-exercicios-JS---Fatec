const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
   event.preventDefault();

   let fahrenheit = document.querySelector(".campo").value;
   let txtResultado = document.querySelector(".resultado");

   let celsius = (fahrenheit - 32) / 1.8;
   
   txtResultado.innerHTML = celsius.toFixed(1)

   
   console.log(celsius);

});
