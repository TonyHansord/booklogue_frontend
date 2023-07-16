import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignupLogin({ authType, show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{authType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{authType} Form</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {authType}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupLogin;
