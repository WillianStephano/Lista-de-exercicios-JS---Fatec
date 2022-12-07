/* Estava treinando umas coisas de objetos para um peojeto pessoal fiz essa gambiarra para treinar, ai fiquei sem tempo de fazer getter e setter depois :)  */

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
   event.preventDefault();

   var produtoUm = {
      nome: "",
      valor: 0,
      quantidade: 0,
      valorTotal: parseFloat(this.valor * this.quantidade),
      descricao: function () {
         let resul = this.nome + " " + this.quantidade * this.valor;

         return resul;
      },
   };
   produtoUm.nome = document.querySelector(".campo-nome").value;
   produtoUm.valor = document.querySelector(".campo-valor").value;
   produtoUm.quantidade = document.querySelector(".campo-qtn").value;

   var produtoDois = {
      nome: "",
      valor: 0,
      quantidade: 0,
      valorTotal: this.valor * this.quantidade,
      descricao: function () {
         let resul = this.nome + " " + this.quantidade * this.valor;

         return resul;
      },
   };
   produtoDois.nome = document.getElementById("nomeProduto2").value;
   produtoDois.valor = document.getElementById("valorProduto2").value;
   produtoDois.quantidade = document.getElementById("qtnProduto2").value;

   var produtoTres = {
      nome: "",
      valor: 0,
      quantidade: 0,
      valorTotal: this.valor * this.quantidade,
      descricao: function () {
         let resul = this.nome + " " + this.quantidade * this.valor;

         return resul;
      },
   };

   produtoTres.nome = document.getElementById("nomeProduto3").value;
   produtoTres.valor = document.getElementById("valorProduto3").value;
   produtoTres.quantidade = document.getElementById("qtnProduto3").value;

   document.querySelector(".resultadoProduto1").textContent =
      produtoUm.descricao();
   document.querySelector(".resultadoProduto2").textContent =
      produtoDois.descricao();
   document.querySelector(".resultadoProduto3").textContent =
      produtoTres.descricao();

   document.querySelector(".total").textContent =
      produtoUm.valorTotal + produtoDois.valorTotal + produtoTres.valorTotal;
});
