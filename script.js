document.querySelector('form').addEventListener('submit', (event) => {

    event.preventDefault();
    let ul = document.querySelector('#ul');
    let amount = event.target.expenseAmount;
    let description = event.target.description;
    let category = event.target.choice;

    let obj = {
        expenseAmount: amount.value,
        desc: description.value,
        cat: category.value
    }

    let myobj = JSON.stringify(obj);
    localStorage.setItem(`${amount.value}-${description.value}-${category.value}`, myobj);
    let li = document.createElement('li');
    li.id = `${amount.value}-${description.value}-${category.value}`;
    li.innerHTML = `${amount.value}${description.value}${category.value}`;
    let del = document.createElement('button');
    del.textContent = 'Delete';
    del.className = 'btn btn-danger';
    del.addEventListener('click', (e) => {
        let parent = e.target.parentElement;
        localStorage.removeItem(parent.id);
        parent.remove();
    })
    let edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.className = 'btn btn-success';
    edit.addEventListener('click', (e) => {
        let parent = e.target.parentElement;
        let arr = parent.id.split('-');
        amount.value = arr[0];
        description.value = arr[1];
        category.value = arr[2];
        // console.log(arr);
        
        localStorage.removeItem(parent.id);
        parent.remove();
    })
    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);

})