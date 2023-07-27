function Note({ note }) {
  return (
    <div>
      <h1>{note.subject}</h1>
      <p>{note.content}</p>
    </div>
  );
}

export default Note;
