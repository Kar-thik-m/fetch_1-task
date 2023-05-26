var container = document.createElement("div");
container.setAttribute("class", "container");

var row = document.createElement("div");
row.setAttribute("claas", "row");


var title = document.createElement("div");
title.setAttribute("class", "title");
title.innerHTML = `<h3 ><b>Thirukural</b></h3><br><u><b> தமிழ் & English </b>`

var thirukural = document.createElement("div");
thirukural.setAttribute("class", "table");


var tamil = document.getElementById("div");




async function art() {

  var get_value = await fetch("https://api-thirukkural.vercel.app/api?num=1");
  var arr = await get_value.json();
  console.log(arr);
  thirukural.innerHTML = `
<div class="card text-center">
  <div class="card-header">
   <h4><b> ${arr.chap_tam}</b></h4><br>
    <b> ${arr.chapgrp_tam}</b>
  </div>
  <div class="card-body">
    <h3 class="card-title">${arr.line1}</h3>
    <h3 class="card-text">${arr.line2}</h3>
  </div>
  <div class="card-footer text-muted">
  <b> ${arr.sect_tam}</b><br>
  <b> ${arr.tam_exp}<b>
  </div>
</div>
<div class="card text-center">
 <div class="card-header">
 <h4><b> ${arr.chap_eng}</b></h4><br>
  <b> ${arr.chapgrp_eng}</b>
 </div>
 <div class="card-body">
  <h3 class="card-title">${arr.eng}</h3>
 </div>
 <div class="card-footer text-muted">
 <b> ${arr.sect_eng}</b><br>
 <b> ${arr.eng_exp}<b>
 </div>
</div>
      `
}
art();




title.append(thirukural);
row.append(title);
container.append(row);
document.body.append(container);
