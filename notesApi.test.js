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
      expect(returnedDataFromApi.notes[0]).toEqual("a note");
    });
  });
});