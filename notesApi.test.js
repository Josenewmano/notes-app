const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe(NotesApi, () => {
  it('calls fetch and loads note data with loadNotes()', () => {
    const api = new NotesApi();
    
    fetch.mockResponseOnce(JSON.stringify({
      notes: [
      'a note'
      ]}
      ));

    api.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes).toBe(["a note"]);
      // expect(returnedDataFromApi.notes[1]).toBe("another note");
      // expect(returnedDataFromApi.notes[2]).toBe("a third note");
    });
  });
});