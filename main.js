let btn = document.querySelector('.add-sub');
let showContainerOneOne = document.querySelector('.container-one-one');
let option = document.querySelector ('.select');

// .container-one-one
btn.addEventListener('click', function (event) {
    if (option.value === 'Yes'){
    showContainerOneOne.style.opacity = 1;
    }
});
let btnDeleteOne = document.querySelector('.delete-one')
btnDeleteOne.addEventListener('click', function (event) {
    showContainerOneOne.style.opacity = 0;
});


// .container-one-two
let btnOne = document.querySelector('.add-sub-one');
let showContainerOneTwo = document.querySelector('.container-one-two');
btnOne.addEventListener('click', function (event) {
    showContainerOneTwo.style.opacity = 1;
});

let btnDeleteTwo = document.querySelector('.delete-two')
btnDeleteTwo.addEventListener('click', function (event) {
    showContainerOneTwo.style.opacity = 0;
});

// add car type 
let carValue = document.forms['form-one'].inputText.value;

