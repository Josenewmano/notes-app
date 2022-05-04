const NotesModel = require('./notesModel');

describe(NotesModel, () => {
  it("should return an array of notes with getNotes()", () => {
    model = new NotesModel;
    expect(model.getNotes()).toEqual([])
  });

  it("should add to the array of notes with addNote()", () => {
    model = new NotesModel;
    model.addNote('Hi');
    expect(model.getNotes()).toEqual(['Hi'])
  });

  it("should clear the array of notes with reset()", () => {
    model = new NotesModel;
    model.addNote('Hello');
    model.reset();
    expect(model.getNotes()).toEqual([])
  });
});
