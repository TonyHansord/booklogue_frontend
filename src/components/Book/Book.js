import { Row, Col, Button } from 'react-bootstrap';

function Book({ bookType, book, handleAdd }) {
  return (
    <Row key={book.id}>
      <Col className="border-end">
        <p className="text-start px-2">{book.title}</p>
      </Col>
      <Col>
        <p className="text-start px-2">{book.authors[0].full_name}</p>
      </Col>
      <Col>
        <p className="text-start px-2">{book.genre_id}</p>
      </Col>
      <Col>
        {bookType === 'all' ? (
          <Button onClick={() => handleAdd(book)}> Add Book </Button>
        ) : (
          <Button onClick={() => console.log('Add Note')}> Add Note </Button>
        )}
      </Col>
    </Row>
  );
}

export default Book;
