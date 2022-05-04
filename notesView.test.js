/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView'); 
 
 describe(NotesView, () => {
   it('displays all notes', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const model = new NotesModel();
     const view = new NotesView(model);
     model.addNote('My first note');
     
     view.displayNotes();
 
     expect(document.querySelectorAll('div.note').length).toEqual(1);
   });

   it('a user can add a note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector('#new-note');
    const buttonEl = document.querySelector('#add-note');
    inputEl.value = 'A new note'
    buttonEl.click();
    
    expect(document.querySelectorAll('.note').length).toEqual(1);
  });

  it('refreshes the page to show only one copy of each note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector('#new-note');
    const buttonEl = document.querySelector('#add-note');
    inputEl.value = 'A new note'
    buttonEl.click();
    inputEl.value = 'A newer note'
    buttonEl.click();
    
    expect(document.querySelectorAll('.note').length).toEqual(2);
  });
 });