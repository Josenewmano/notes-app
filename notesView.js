class NotesView {
  constructor(model) {
    this.model = model;
    this.maincontainerEl = document.querySelector('#main-container');
    this.inputButtonEl = document.querySelector('#add-note');
    this.inputEl = document.querySelector('#new-note');
    this.inputButtonEl.addEventListener('click', () => {
      model.addNote(this.inputEl.value);
      this.displayNotes();
      this.inputEl.value = '';
    });
  };
  
  displayNotes() {
    const old_notes = document.querySelectorAll('.note');
    old_notes.forEach(note => {
      note.remove();
    })
    
    const notes = this.model.getNotes()
    notes.forEach((note) => {
      const outputEl = document.createElement('div');
      outputEl.innerText = note;
      outputEl.className = 'note';
      this.maincontainerEl.append(outputEl);
    })
  }

}

module.exports = NotesView;