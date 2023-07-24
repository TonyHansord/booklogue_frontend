import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Book from './Book';
// import AddNote from '../Notes/AddNote';

function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    fetch('/me/books')
      .then((res) => res.json())
      .then((data) => {
        setMyBooks(data);
      });
  }, []);

  const renderBooks = (books) => {
    return books.map((book) => {
      return (
        <Book
          key={book.id}
          book={book}
          bookType={'my'}
          handleAdd={() => console.log('AddNote')}
        />
      );
    });
  };

  return (
    <Container className="border border-3 border-info-subtle rounded">
      <Row>
        <Col className="border-end">
          <p className="text-start px-2">Title</p>
        </Col>
        <Col>
          <p className="text-start px-2">Author</p>
        </Col>
        <Col>
          <p className="text-start px-2">Genre</p>
        </Col>
        <Col>
          <p className="text-start px-2">Add Note</p>
        </Col>
      </Row>
      {renderBooks(myBooks)}
    </Container>
  );
}

export default MyBooks;
