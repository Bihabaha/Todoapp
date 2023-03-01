const search= document.querySelector('.search input')

const form = document.querySelector('.add');
const list = document.querySelector(".todos")
// add todo
const generate=(todo)=>{
const html =` <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
    <i class="text-danger  delete">delete</i>
    </li>`
    list.innerHTML+=html
}
form.addEventListener('submit',e=>{
  e.preventDefault();
  const todo= form.add.value.trim();
if(todo.length){
 generate(todo)
 form.reset()
}
 
})

list.addEventListener('click',e=>{
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  }
})


//event Keyup search and filter

const filterTodos = (todo, find) => { Array.from(list.children)
  .forEach(todo => todo.textContent.toLocaleLowerCase().includes(find) ? todo.classList
  .remove('filtered') : todo.classList.add('filtered')
  )
}

search.addEventListener('keyup', e => {
  const find = search.value.trim().toLowerCase();
  filterTodos(list.children, find);
});









