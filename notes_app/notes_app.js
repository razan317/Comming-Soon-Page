document.getElementById('addNote').addEventListener('click', function() {
  const noteText = document.getElementById('noteText').value;
  if (noteText.trim() !== '') {
      const allNotesContainer = document.getElementById('allNotes');
      const favoritesContainer = document.getElementById('favorites');
      
      const note = document.createElement('div');
      note.className = 'note';
      
      const noteContent = document.createElement('span');
      noteContent.innerText = noteText;
      
      const noteActions = document.createElement('div');
      noteActions.className = 'note-actions';

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-note';
      deleteButton.innerHTML = '&times;';
      deleteButton.addEventListener('click', function() {
          allNotesContainer.removeChild(note);
          if (note.classList.contains('favorite')) {
              favoritesContainer.removeChild(note);
          }
      });

      const favoriteButton = document.createElement('button');
      favoriteButton.className = 'favorite-note';
      favoriteButton.innerHTML = '★';
      favoriteButton.addEventListener('click', function() {
          note.classList.toggle('favorite');
          favoriteButton.classList.toggle('active');
          if (note.classList.contains('favorite')) {
              favoritesContainer.appendChild(note);
          } else {
              favoritesContainer.removeChild(note);
          }
      });

      noteActions.appendChild(deleteButton);
      noteActions.appendChild(favoriteButton);

      note.appendChild(noteContent);
      note.appendChild(noteActions);
      allNotesContainer.appendChild(note);
      
      document.getElementById('noteText').value = '';
  }
});

document.getElementById('allNotesTab').addEventListener('click', function() {
  document.getElementById('allNotes').style.display = 'flex';
  document.getElementById('favorites').style.display = 'none';
  this.classList.add('active');
  document.getElementById('favoritesTab').classList.remove('active');
});

document.getElementById('favoritesTab').addEventListener('click', function() {
  document.getElementById('allNotes').style.display = 'none';
  document.getElementById('favorites').style.display = 'flex';
  this.classList.add('active');
  document.getElementById('allNotesTab').classList.remove('active');
});
