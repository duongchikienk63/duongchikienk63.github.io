

function App() {

  return (
    <div style={{ padding: 32 }}>
      <button onClick={handleShow}>click</button>
      {show && <Content />}
    </div>
  );
}

export default App;
