import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function UserHome({ userName }) {
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });

    fetch('/me/books')
      .then((res) => res.json())
      .then((data) => {
        setMyBooks(data);
      });
  }, []);

  const renderBooks = (books) => {
    return books.map((book) => {
      return (
        <Row key={book.id}>
          <Col>
            <p>{book.title}</p>
          </Col>
          <Col>
            <p>{book.author}</p>
          </Col>
        </Row>
      );
    });
  };

  return (
    <div>
      <h1>Welcome Back! {userName} </h1>
      <Container>
        <Row>
          <Col>
            <h2>All Books</h2>
            {renderBooks(books)}
          </Col>
          <Col>
            <h2>My Books</h2>
            {renderBooks(myBooks)}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserHome;
