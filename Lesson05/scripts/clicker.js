const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');

        //create a delet button
        const deleteButton = document.createElement('button');

        //populate the elements
        li.textContent = input.value;
        deleteButton.textContent = '❌';

        //append elements
        li.append(deleteButton);
        list.append(li);

        // Add event listner to the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        // send focus to the input element
        input.focus();

        //clear the input value
        input.value = '';
    }
    else {
        // Provide a message or return focus to the input field
        input.focus(); // return focus to the input field
    }
})