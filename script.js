const addBtn = document.getElementById('addBtn');
const noteInput = document.getElementById('noteInput');
const notesGrid = document.getElementById('notesGrid');
const inputContainer = document.getElementById('inputContainer');

let noteCount = 0;

addBtn.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    
    if (noteText !== "") {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        
        // Alternate Background Colors
        if (noteCount % 2 === 0) {
            noteDiv.style.backgroundColor = '#d1e1ff';
        } else {
            noteDiv.style.backgroundColor = '#fefffe';
        }
        noteCount++;

        // Note Text
        const textSpan = document.createElement('span');
        textSpan.style.fontSize = "14px";
        textSpan.style.color = "#333";
        textSpan.textContent = noteText;
        
        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '&times;';
        
        deleteBtn.addEventListener('click', () => {
            noteDiv.remove();
        });

        noteDiv.appendChild(textSpan);
        noteDiv.appendChild(deleteBtn);
        
        // Insert new note right before the input container
        notesGrid.insertBefore(noteDiv, inputContainer);
        
        // Clear input area
        noteInput.value = "";
    }
});