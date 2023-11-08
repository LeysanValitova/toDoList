
const task = document.getElementById("new-task");
const listt = document.getElementById("listt");
const button = document.querySelector(".btn");



// функция для переноса задач из поля ввода в список

function createTask() {
    let newElement = document.createElement('li');
    newElement.textContent = task.value;
    listt.append(newElement);
    task.value = '';
}

document.querySelector('.btn').onclick = createTask;


// стили для нажатого элемента задач
listt.addEventListener('click', function (event) {
    let targetE1 = event.target;
    
    if (targetE1.tagName === 'LI') {
        targetE1.classList.toggle('active');
    }
})


// отмена обновления
	
	button.addEventListener('submit', function (evt) {
		evt.preventDefault(); 
	});

	
	listt.addEventListener('submit', function (evt) {
		evt.preventDefault(); 
	});
