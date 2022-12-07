const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
   event.preventDefault();

   const valorMetro = 36;
   let largura = document.querySelector(".campo-largura").value;
   let comprimento = document.querySelector(".campo-comprimento").value;

   let tamanhoComodo = largura * comprimento;

   let valorTotal = tamanhoComodo * valorMetro;

   document.querySelector(".resultado").textContent = valorTotal.toFixed(2);
});
