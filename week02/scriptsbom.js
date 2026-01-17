const input = document.querySelector('#favchap');
const button = document.querySelector('#addchap');
const list = document.querySelector('#list');
input.value = '';


button.addEventListener('click', function () {    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    li.appendChild(deleteButton);
    list.append(li);    
});

deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

    


