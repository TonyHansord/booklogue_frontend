import Note from '../Notes/Note';

function BookInfo({ book }) {
  const renderNotes = (notes) => {
    return notes.map((note) => {
      <Note />;
    });
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <h2>{book.author}</h2>
      <h3>{book.genre}</h3>

      {renderNotes(book.notes)}
    </div>
  );
}

export default BookInfo;
