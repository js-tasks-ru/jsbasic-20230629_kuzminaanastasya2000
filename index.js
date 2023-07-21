function highlight(table) {
    let tr = document.querySelectorAll('tr');
    let td = document.querySelectorAll('td');
    document.tr.classList.add('available')
    if (document.body.dataset.available == "true"){
      document.body.tr.classList.add('available')
    } else if (document.body.dataset.available == undefined){
      document.body.tr.classList.add('hidden')
    } else {
      document.body.tr.classList.add('unavailable')
    }
}