import Note from '../Notes/Note';

function BookInfo({ book }) {
  const bookTitle = book.title;
  const bookAuthor = book.authors[0].full_name;
  const bookGenre = book.genre.name;

  const renderNotes = (notes) => {
    return notes.map((note) => {
      return <Note key={note.id} note={note} />;
    });
  };

  return (
    <div>
      <h1>{bookTitle}</h1>
      <h2>{bookAuthor}</h2>
      <h3>{bookGenre}</h3>

      {renderNotes(book.notes)}
    </div>
  );
}

export default BookInfo;
