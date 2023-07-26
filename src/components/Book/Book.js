import { Row, Col, Button } from 'react-bootstrap';
import AddNote from '../Notes/AddNote';
import { useState } from 'react';

function Book({ bookType, book, handleAdd }) {
  const [showAddNote, setShowAddNote] = useState(false);

  const handleCloseAddNote = () => setShowAddNote(false);
  const handleShowAddNote = () => setShowAddNote(true);

  return (
    <Row key={book.id}>
      <Col className="border-end">
        <p className="text-start px-2">{book.title}</p>
      </Col>
      <Col>
        <p className="text-start px-2">{book.authors[0].full_name}</p>
      </Col>
      <Col>
        <p className="text-start px-2">{book.genre.name}</p>
      </Col>
      <Col>
        {bookType === 'all' ? (
          <Button onClick={() => handleAdd(book)}> Add Book </Button>
        ) : (
          <>
            {/* <Button onClick={() => handleAdd(book)}>View Notes</Button> */}
            <Button onClick={handleShowAddNote}> Add Note </Button>
          </>
        )}
      </Col>
      <AddNote
        book={book}
        show={showAddNote}
        handleClose={handleCloseAddNote}
      />
    </Row>
  );
}

export default Book;
