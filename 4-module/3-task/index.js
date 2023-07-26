function highlight(table) {
  let tr = table.querySelectorAll("tr");
  for(i = 1; i < tr.length; i++){
    if (table.rows[i].cells[3].getAttribute('data-available') == "true") {
      tr[i].classList.add("available") ;
    } else if (table.rows[i].cells[3].getAttribute('data-available') == undefined){
      tr[i].setAttribute('hidden', true);
    } else {
      tr[i].classList.add("unavailable");
    }
  }
  for(i = 1; i < tr.length; i++){
    if (table.rows[i].cells[2].innerHTML == "f") {
      tr[i].classList.add("female");
    } else {
      tr[i].classList.add("male");
    }
  }
  for(i = 1; i < tr.length; i++){
    if (table.rows[i].cells[1].innerHTML < 18) {
      tr[i].style.textDecoration = 'line-through';
    }
  }
}
