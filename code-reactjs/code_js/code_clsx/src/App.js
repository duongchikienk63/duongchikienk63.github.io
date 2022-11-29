import Button from "./components/Button";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: '10px 32px' }}>
      <Button primary />
      <Button danger />
      <Button dark />
      </div>
    </GlobalStyles>
  );
}

export default App;
