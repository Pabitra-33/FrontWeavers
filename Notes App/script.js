const notesContainer = document.querySelector('.notes-container');
const createButton = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

//showing the notes from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes"); // Get notes from localStorage
}
showNotes(); // Call the function to display notes on page load


// Function to save notes to localStorage
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

// Function to create a new note
createButton.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Function to delete a note
notesContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove(); // Remove the parent <p> element of the clicked image
        updateStorage(); // Update localStorage after deletion
    }
    else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function() {
                updateStorage(); // Update localStorage on keyup
            }
        })
    }
})

// Allow line breaks in notes
document.addEventListener("keydown", event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak"); // Allow line breaks in notes
        event.preventDefault(); // Prevent default behavior of Enter key
    }
})