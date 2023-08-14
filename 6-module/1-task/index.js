/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows;
  #elem;
  constructor(rows){
    this.#rows = rows;
    this.#elem = document.querySelector('table');
    this.addRows();
  }
  get elem(){
    return this.#elem;
  }
  addRows(){
    let structure = `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>` + this.#rows.map(e => `
    <tr>
       <td>${e.name}</td>
       <td>${e.age}</td>
       <td>${e.salary}</td>
       <td>${e.city}</td>
       <td><button>X</button></td>
    </tr>
    `).join("") + `</tbody>`
    this.#elem.innerHTML = structure;
    for(let b of this.elem.querySelectorAll('button')){
      b.addEventListener('click', this);
    }
  }
  handleEvent(event){
    let row = event.target.parentElement.parentElement;
    this.#rows.splice(row.rowIndex - 1, 1);
    row.remove()
  }
}

/*export default function makeTable(rows) {
  let table = document.createElement("table");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.innerHTML = 'fkfkf';
  td2.innerHTML = 'f[f[]]';
  tr.append(td1);
  tr.append(td2);
  table.append(tr);
}*/