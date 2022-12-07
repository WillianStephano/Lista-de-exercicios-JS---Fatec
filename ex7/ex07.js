var list = [];

function insert() {
   const numberValue = document.querySelector(".numberValue");
   list.push(numberValue.value);
   numberValue.value = "";
   numberValue.focus();
}

function show() {
   const result = document.querySelector(".resultado");
   result.innerHTML = "";
   for (let i = 0; i < list.length; i++) {
      result.innerHTML += list[i] + "-";
   }
   document.querySelector(".numberValue").focus();
}

function bigger() {
   let aux = [...list];
   aux.sort((a, b) => parseFloat(a) - parseFloat(b));
   let bigger = aux[list.length - 1];

   document.querySelector(".resultado").innerHTML = bigger;
}

function smaller() {
   let aux = [...list];
   aux.sort((a, b) => parseFloat(a) - parseFloat(b));
   let bigger = aux[0];

   document.querySelector(".resultado").innerHTML = bigger;
}
