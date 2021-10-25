//Return the first element within the document that matches the specified selector.
const input = document.querySelector('.storage');
const text = document.querySelector('.text');
const save = document.querySelector('.save');
const clear = document.querySelector('.clear');
const storedInput = localStorage.getItem('textinput');

//Save the stored input within the box
if(input){
    text.textContent = storedInput
}

//Change the text every time you write
input.addEventListener('input', letter =>{
    text.textContent = letter.target.value
})

//  **CHAPTER 7 LOCAL STORAGE**

//Save to local storage
const savetolocalstorage = () => {
    localStorage.setItem('textinput', text.textContent)
}

//Save to local storage by clicking the button
save.addEventListener('click', savetolocalstorage)

//clear local storage
 const clearlocalstorage = () => {
    localStorage.removeItem('textinput', text.textContent)
}

//clear local storage by clicking the button
clear.addEventListener('click', clearlocalstorage)