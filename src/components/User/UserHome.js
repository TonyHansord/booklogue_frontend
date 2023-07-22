import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function UserHome({ userName }) {
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [myNotes, setMyNotes] = useState([]);
  const [visibleData, setVisibleData] = useState(books);

  useEffect(() => {
    fetch('/books')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
        setVisibleData(data);
      });

    fetch('/me/books')
      .then((res) => res.json())
      .then((data) => {
        setMyBooks(data);
      });
  }, []);

  const handleAddToMyBooks = (book) => {
    console.log('add to my books');
    fetch(`/books/${book.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        book_id: book.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyBooks([...myBooks, book]);
      });
  };

  const renderBooks = (books) => {
    return books.map((book) => {
      return (
        <Row key={book.id}>
          <Col className="border-end">
            <p className="text-start px-2">{book.title}</p>
          </Col>
          <Col>
            <p className="text-start px-2">{book.authors[0].full_name}</p>
          </Col>
          <Col>
            <Button onClick={() => handleAddToMyBooks(book)}> Add Book </Button>
            <Button onClick={() => handleAddToMyBooks(book)}> Add Note </Button>
          </Col>
        </Row>
      );
    });
  };

  const renderData = (data) => {
    if (data === books) {
      return renderBooks(books);
    } else if (data === myBooks) {
      return renderBooks(myBooks);
    } else {
      return <h1>My Notes</h1>;
    }
  };

  return (
    <div>
      <h1 className="text-start">Welcome Back! {userName} </h1>
      <Container>
        <Row>
          <Col className="d-flex flex-row mb-3">
            <Button className="mx-2" onClick={() => setVisibleData(books)}>
              All Books
            </Button>
            <Button className="mx-2" onClick={() => setVisibleData(myBooks)}>
              My Books
            </Button>
            <Button className="mx-2" onClick={() => setVisibleData(myNotes)}>
              My Notes
            </Button>
            {/* {renderBooks(myBooks)} */}
          </Col>
        </Row>
      </Container>
      <Container className="border border-3 border-info-subtle rounded">
        <Row>
          <Col>
            <h1 className="text-start">Title</h1>
          </Col>
          <Col>
            <h1 className="text-start">Author</h1>
          </Col>
          <Col>
            <h1 className="text-start">Add</h1>
          </Col>
        </Row>
        <Row>
          <Col>{renderData(visibleData)}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserHome;
