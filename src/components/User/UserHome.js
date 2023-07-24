import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function UserHome({ userName }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-start">Welcome Back! {userName} </h1>
      <Container>
        <Row>
          <Col className="d-flex flex-row mb-3">
            <Button className="mx-2" onClick={() => navigate('/me')}>
              All Books
            </Button>
            <Button className="mx-2" onClick={() => navigate('/me/books')}>
              My Books
            </Button>
            {/* <Button className="mx-2" onClick={() => navigate()}>
              My Notes
            </Button> */}
            {/* {renderBooks(myBooks)} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserHome;
